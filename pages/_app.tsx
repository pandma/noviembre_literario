import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import "../styles/globals.css";



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "black" }}>
      <Fragment>
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </Fragment>
    </div>
  );
}

export default MyApp;
