import '../styles/global.css'
import Layout from '/src/components/Nav/layout.js'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
  </Layout>
  )
}

export default MyApp
