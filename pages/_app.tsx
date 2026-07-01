import Head from 'next/head'
import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeUIProvider } from 'theme-ui'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { phantomSans, shantellSans, zarathustra } from "../lib/fonts"
import "../styles/global.css"
import NavFooterThing from "../components/slack/footerNav"

const App = ({ Component, pageProps }) => (
  //@ts-ignore
  <ThemeUIProvider theme={theme}>
    <Meta as={Head}>
      <meta
        name="google-site-verification"
        content="7zE7h5foPaxIcnv5Frq6BkcUb9-3UzVc8q3P_cexf9I"
      />
      {/* Look. This fixes whatever the heck I was dealing with. I don't know why NextJS didn't add this to begin with but I'm just happy it's over */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Meta>
    <BalancerProvider>
      <main className={`${phantomSans.variable} ${shantellSans.variable} ${zarathustra.variable}`} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",

        backgroundImage:
          "radial-gradient(rgb(29, 29, 37) 22.8%, transparent 22.8%), radial-gradient(rgb(29, 29, 37) 22.8%, transparent 22.8%)",
        backgroundPosition: "0px 0px, 32px 32px",
        backgroundSize: "64px 64px",
        backgroundColor: "rgb(23, 23, 29)",

        minHeight: '100vh',
        width: "100vw",
        maxWidth: "100%"
      }}>
        <Component {...pageProps} />
        <NavFooterThing />
      </main>
    </BalancerProvider>
  </ThemeUIProvider>
)

export default App
