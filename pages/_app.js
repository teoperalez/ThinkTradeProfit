import '../styles/globals.css'
import Layout from '../Components/Layout'


/// from https://www.youtube.com/watch?v=mTz0GXj8NN0

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )

}

export default MyApp
