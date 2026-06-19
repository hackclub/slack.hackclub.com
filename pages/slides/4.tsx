import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button, Link } from 'theme-ui'
import NavFooterThing from "../../components/slack/footerNav"
import NextButton from "../../components/nextButton"


export default function Page() {
    const [email, setEmail] = useState("")
    useEffect(() => {
        setEmail(getEmailQueryParam())
    })

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                backgroundImage:
                    "radial-gradient(rgb(29, 29, 37) 22.8%, transparent 22.8%), radial-gradient(rgb(29, 29, 37) 22.8%, transparent 22.8%)",
                backgroundPosition: "0px 0px, 32px 32px",
                backgroundSize: "64px 64px",
                backgroundColor: "rgb(23, 23, 29)",

                minHeight: '100vh'
            }}>
                <Box as="main" sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    gap: "2rem", bg: 'white', color: 'black', padding: "4rem",

                    height: "fit-content",
                    backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                }}>
                    <Text
                        variant="title"
                        sx={{
                            color: 'var(--foreground)',
                            position: 'relative',
                            display: 'block',
                            alignSelf: "center",
                            fontFamily: "var(--font-zarathustra-src)"
                        }}
                        as="h1"
                    >Want to learn more about Hack Club?</Text>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <Text
                            sx={{
                                color: 'var(--foreground)',
                                position: 'relative',
                                display: 'block',
                                alignSelf: "center",
                                fontSize: "2rem"
                            }}
                            as="h1"
                        >Read <Link href="https://readme.hackclub.com/slack">
                                readme
                            </Link> - a detailed explainer to Hack Club</Text>
                    </Box>

                    <NextButton text="Next" slide={5} email={email} />
                </Box>

                <NavFooterThing />
            </Box>
        </>
    )
}