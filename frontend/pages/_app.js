import "../styles/globals.css";
import React, { useEffect } from "react";
import Head from "next/head";
import { useAuth, ProvideAuth } from "../utils/auth";

export default function MyApp({ Component, pageProps }) {

  return (
    <ProvideAuth>
      <React.Fragment>
        <Head>
          <title>Labs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    </ProvideAuth>
  );
}
