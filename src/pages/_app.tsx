// import App from "next/app"
import type { AppProps /*, AppContext */ } from "next/app"
import Head from "next/head"
import { useRouter } from "next/dist/client/router"

import { titleCase } from "title-case"
import { Auth0Provider } from "@auth0/auth0-react"
import { useEffect, useState } from "react"

import AppLayout from "@/components/AppLayout/AppLayout"
import { auth0 } from "utils/auth0"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.pathname.split("/")[1]
  const { domain, clientId, url } = auth0
  const [location, setLocation] = useState(url)
  useEffect(() => {
    setLocation(window.location.origin)
    console.log(location)
  }, [])
  return (
    <>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={location}>
        <Head>
          <title>
            {path === "" ? "Inmobi - Inicio" : `Inmobi - ${titleCase(path)}`}
          </title>
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Auth0Provider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
