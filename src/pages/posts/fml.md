---
layout: ../../components/MarkdownPost.astro
title: "FunML: A Functional Markup Language Case Study"
image:
  url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  alt: "Code on screen representing functional programming"
tags: ["Haskell", "Functional Programming", "Compiler", "Case Study"]
pubDate: 'Nov 09, 2024'
description: "A case study on building FunML — a functional markup language transpiler in Haskell, exploring the architecture, challenges, and lessons learned."
---

> During my Functional Programming course at Universitas Indonesia, I built FunML — a transpiler that compiles a custom functional markup language to vanilla JavaScript. This is the story of how it was made.

---

## About FunML

**FunML** (Functional Markup Language) is a declarative syntax for building reactive UI components. It transpiles to vanilla JavaScript, allowing developers to write clean, functional component definitions without the complexity of full frameworks.

The goal was simple: create a language that feels like writing a specification, not instructions. Write *what* you want, not *how* to build it.

---

## Context & Motivation

When I started researching how real-world compilers and language tools are built, I discovered something surprising: **functional programming dominates this space**.

- **Rust** was originally written in OCaml
- **Bend** (a parallel computing language) started in Haskell before being ported to Rust  
- **Kind** (a language with automatic proof support) was built with Haskell

The pattern was undeniable — functional paradigms and compilers go hand in hand.

This realization sparked an idea: *What if I applied these same principles to a domain I actually know well — front-end development?*

Modern front-end development increasingly relies on transpilation — JSX, TypeScript, Svelte — they're all abstractions that get transformed into vanilla JavaScript. I wanted to create my own.

---

## Problems

Building a transpiler for a new language comes with several challenges:

1. **Syntax design** — Creating a grammar that is both expressive and unambiguous for parsing
2. **Parser complexity** — Handling nested structures, mixed content, and edge cases
3. **Error handling** — Providing meaningful error messages without boilerplate code
4. **Bracket matching** — Distinguishing between language delimiters and embedded JavaScript code
5. **Learning curve** — Understanding how functional programming patterns apply to compiler design

---

## Goals

| Goal | Description |
|------|-------------|
| **Declarative Syntax** | Code should read like a grammar specification, not imperative instructions |
| **Zero Runtime** | Transpile to vanilla JS without framework dependencies |
| **Expressiveness** | Support reactive primitives, conditionals, and loops in a clean syntax |
| **Educational** | Learn and apply functional programming concepts in a real-world project |

---

## Proposed Solution

The core idea was to build a **parser combinator** system in Haskell — small, composable parsing functions that combine to form the complete grammar.

### Syntax Design

FunML uses a clean, indentation-free syntax inspired by functional programming principles:

```funml
script (
  import { createSignal } from '@lib';
  const [count, setCount] = createSignal(0);
)

Counter => (
  div class="p-4 bg-gray-100 rounded-lg text-center" (
    h1 class="text-2xl font-bold mb-4" $ "Hello world",
    p class="" $ [() => `Counter: ${count()}`],
    button onclick=[() => setCount(prev => prev + 1)] $ "Increment"
  )
)
```

### Architecture

The transpiler follows a classic pipeline:

```
Source Code → Lexer → Parser → AST → Code Generator → JavaScript
```

Each stage is implemented as composable functions, leveraging Haskell's type system for safety.

---

## Technical Deep Dives

### 1. Code as Grammar Specification

In functional programming, **code isn't just instructions — it's a description of the problem itself**.

```haskell
element = fmlComponent
      <|> fmlElement
      <|> ifBlock
      <|> forBlock
      <|> fmlText
```

You can read this out loud: *"An element is either a component, an HTML element, an if block, a for block, or text."*

This isn't a sequence of steps telling the computer *how* to parse. It's literally the grammar specification itself. **The parser is the grammar.**

---

### 2. Monadic Error Handling

The monad instance for the parser handles two critical concerns automatically:

```haskell
instance Monad Parser where
  pa >>= f = Parser $ \(s, pos) -> case runParser pa (s, pos) of
    (s', pos', Right a) -> runParser (f a) (s', pos')
    (s', pos', Left e) -> (s', pos', Left e)
```

**What the `>>=` (bind) operator does:**

1. **State threading** — Remaining string and cursor position flow to the next parser automatically
2. **Short-circuit on failure** — If any parser fails, the whole chain stops. No manual error checking

**Without monads (imperative approach):**

```c
Result parseIfBlock(String input, int pos) {
    Result res1 = parseOperator(input, pos, "@if");
    if (res1.isError) return res1;  // Manual check
    
    Result res2 = readUntilKeyword(input, res1.newPos, "then");
    if (res2.isError) return res2;  // Manual check
    
    // ...endless boilerplate...
}
```

**With monads:**

```haskell
ifBlock = do
  _    <- operator "@if"
  cond <- readUntilKeyword "then"
  return cond
```

No boilerplate. No manual checks. Pure grammar logic.

---

### 3. Recursive Bracket Matching

A key challenge was bracket matching. In FunML, `[ ]` denotes a JavaScript expression. But JavaScript itself can contain brackets! So how does the parser know which `]` closes the FunML block?

**Solution: Recursive parsing with depth tracking**

```haskell
balancedBracketContent :: Int -> Parser String
balancedBracketContent 0 = return ""
balancedBracketContent level = do
  c <- satisfyCond "any character" (const True)
  case c of
    ']' -> (c :) <$> balancedBracketContent (level - 1)
    '[' -> (c :) <$> balancedBracketContent (level + 1)
    _ -> (c :) <$> balancedBracketContent level
```

The `level` parameter is essentially a stack — but I never explicitly create one. **The recursion is the stack.** Each recursive call pushes a frame, each return pops it.

---

### 4. Manual vs. Automatic Parsing

For the main transpiler, I used manual recursive descent parsing. For the REPL with CodeMirror syntax highlighting, I experimented with automatic parsers like Lezer (an LR(1) parser).

| Aspect | Manual Parsing | Automatic Parsing |
|--------|----------------|-------------------|
| Direction | Top-down, intuitive | Bottom-up |
| Control | Full control over errors | Less flexible |
| Mixed grammars | Handles well | Requires strict format |
| Code volume | More code, clearer logic | Less code, more magic |

**When to use each:**
- **Manual** — When you need full control (custom errors, complex features, mixed grammars)
- **Automatic** — For simpler tasks like syntax highlighting where you just need token identification

---

## Outcome

| Metric | Result |
|--------|--------|
| **Lines of Haskell** | ~1,200 lines for the complete transpiler |
| **Features Supported** | Components, reactive primitives, conditionals, loops |
| **Output** | Clean, readable vanilla JavaScript |
| **Development Time** | 3 weeks (including learning Haskell patterns) |

The transpiler successfully compiles FunML source files to JavaScript that runs without any framework dependencies.

---

## Reflections

### What I Learned

1. **Monads are practical** — Before this project, I thought monads were abstract academic concepts. Now I see them as elegant solutions for threading state and handling errors without boilerplate.

2. **Syntax design is hard** — Every syntax choice in popular languages exists for a reason. HTML's `<div>...</div>` tags are popular because they're unambiguous and easy to parse. Trade-offs between parsing complexity and developer experience are real.

3. **Recursion as data structure** — Problems that require explicit stacks in imperative code often resolve themselves through recursion in functional code.

4. **Code as specification** — When your parser *is* your grammar, when your data types *are* your domain model, when your recursion *is* your stack — you start to see programming differently.

### What I Would Do Differently

- **Start with a simpler grammar** — I added complexity too early. A more minimal first version would have helped.
- **Better error messages** — The current error handling is functional but could be more user-friendly.
- **Type-checked output** — Integrating with TypeScript for type-safe transpilation would be a valuable next step.

---

## Try It Yourself

1. Clone the repository
2. Run `build.sh`
3. Find the binary in `/bin`

**GitHub:** [github.com/funcml/fml_transpiler](https://github.com/funcml/fml_transpiler)

---

*This project was built as part of my Functional Programming coursework at Universitas Indonesia. If you're curious about compilers or Haskell, I highly recommend building a small parser yourself — the lessons you learn are worth the effort.*
