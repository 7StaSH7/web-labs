import "../styles/globals.css";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Labs</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
