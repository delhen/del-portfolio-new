import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Body from '../components/Body'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Body>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Body>

  )
}

export default MyApp
