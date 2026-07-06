import Head from 'next/head'
import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeUIProvider } from 'theme-ui'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { phantomSans, shantellSans, zarathustra } from "../lib/fonts"
import "../styles/global.css"
import NavFooterThing from "../components/slack/footerNav"
import { useEffect, useRef, useState } from 'react'

const App = ({ Component, pageProps }) => {
  const [overflow, setOverflow] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const main = mainRef.current

    const updatePadding = () => {
      if (document.documentElement.scrollHeight > window.innerHeight) {
        main.style.paddingBottom = "6rem"
      } else {
        main.style.paddingBottom = "2rem"
      }
    }

    updatePadding()

    const observer = new ResizeObserver(updatePadding);
    observer.observe(document.body)
    window.addEventListener("resize", updatePadding)


    const code = () => {
      if (window.innerHeight + window.scrollY + 120 >= document.documentElement.scrollHeight) {
        setOverflow(false)
      } else {
        setOverflow(true)
      }
    }
    const w = new ResizeObserver(code);

    w.observe(document.body)
    window.addEventListener("scroll", code)

    return () => {
      observer.disconnect()
      w.disconnect()
      window.removeEventListener("resize", updatePadding)
      window.removeEventListener("scroll", code)
    }
  }, [])

  return (
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
        <main ref={mainRef} className={`${phantomSans.variable} ${shantellSans.variable} ${zarathustra.variable}`} style={{
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
          {overflow ? <><svg className="animated-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" >
            { /* <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
            <path d="M19 7H5c-.37 0-.71.21-.89.54a1 1 0 0 0 .07 1.04l7 10a.997.997 0 0 0 1.64 0l7-10c.21-.31.24-.7.07-1.04A1 1 0 0 0 19 7m-7 9.26L6.92 9h10.16z"></path>
          </svg></> : undefined}

          <style>
            {`.animated-arrow{
            position: fixed;
            bottom: 20px;
            color: yellow;
            height: 30px;
            width: 30px;
              animation: scrollBounce 1.4s cubic-bezier(.22,1.01,.36,.83) infinite;
        }
        
        @keyframes scrollBounce {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(12px);
          }

          100% {
            transform: translateY(0);
          }
        }`}
          </style>
        </main>
      </BalancerProvider>
    </ThemeUIProvider>
  )
}

export default App
