﻿import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/primeicons/primeicons.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/primereact/resources/primereact.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css"
        />

        <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
