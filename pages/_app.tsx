import Head from 'next/head'
import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeUIProvider } from 'theme-ui'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { phantomSans, shantellSans, zarathustra } from "../lib/fonts"
import "../styles/global.css"

const App = ({ Component, pageProps }) => (
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
      <main className={`${phantomSans.variable} ${shantellSans.variable} ${zarathustra.variable}`}>
        <Component {...pageProps} />
      </main>
    </BalancerProvider>
  </ThemeUIProvider>
)

export default App
