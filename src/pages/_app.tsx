import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { ThemeContextProvider } from '@/contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Rest Countries - App</title>
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
