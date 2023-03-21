import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { useApollo } from '../../lib/apollo';


export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Layout >
        <Component  {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}
