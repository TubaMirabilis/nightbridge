import "../scss/styles.scss"
import Layout from '../comps/Layout'
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
