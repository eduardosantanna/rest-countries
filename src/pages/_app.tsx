import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { ThemeContextProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
