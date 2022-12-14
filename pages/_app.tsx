import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import "../styles/globals.css";
import styles from '../styles/Home.module.css';


function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (<>
    <div id={styles.main}>
      <Fragment>
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </Fragment>
    </div>
    <div id={styles.small}>
      <Component {...pageProps} />
    </div>
  </>
  );
}

export default App;
