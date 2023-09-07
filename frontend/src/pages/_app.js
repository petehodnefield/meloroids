import Layout from "../components/Layout";
import "@/styles/globals.css";
import { createContext, useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { useApollo } from "../../lib/apollo";
import Auth from "utils/auth";
import Login from "./login";
import Script from "next/script";
export const LoginContext = createContext();
export const NavigationContext = createContext();

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [loggedIn, setLoggedIn] = useState();
  const [navigationSelected, setNavigationSelected] = useState("");
  useEffect(() => {
    setLoggedIn(Auth.loggedIn());
  }, []);
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <NavigationContext.Provider
        value={[navigationSelected, setNavigationSelected]}
      >
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />{" "}
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-JXMJZT5MYJ"
            />
            <Script id="google-analytics">
              {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JXMJZT5MYJ');
          `}
            </Script>
          </Layout>
        </ApolloProvider>
      </NavigationContext.Provider>
    </LoginContext.Provider>
  );
}
