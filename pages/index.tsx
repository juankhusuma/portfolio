import Head from "next/head";
import React from "react";
import MatrixText from "../components/MatrixTextEffect";

/**
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 font-azeret">
      <Head>
        <title>Juan D Khusuma | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <MatrixText
          className="font-bold text-white sm:text-lg md:text-xl lg:text-2xl"
          glyphClass="bg-red-500"
          delay={800}
          text="$juan-d-khusuma"
        />
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center text-white"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
