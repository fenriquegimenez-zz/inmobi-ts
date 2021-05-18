// import App from "next/app"
import type { AppProps /*, AppContext */ } from "next/app"
import Head from "next/head"
import { useRouter } from "next/dist/client/router"
import AppLayout from "@/components/AppLayout/AppLayout"
import { titleCase } from "title-case"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.pathname.split("/")[1]
  return (
    <>
      <Head>
        <title>
          {path === "" ? "Inmobi - Inicio" : `Inmobi - ${titleCase(path)}`}
        </title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
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
