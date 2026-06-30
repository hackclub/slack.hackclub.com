import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Link } from 'theme-ui'
import NextButton from "../../components/nextButton"


export default function Page() {
    const [email, setEmail] = useState("")
    useEffect(() => {
        setEmail(getEmailQueryParam())
    })

    return (
        <>
            <Text
                variant="title"
                sx={{
                    color: 'var(--foreground)',
                    position: 'relative',
                    display: 'block',
                    alignSelf: "center",

                    fontFamily: "var(--font-zarathustra-src)",
                    fontSize: "40px"
                }}

                as="h1"
            >Want to learn more about Hack&nbsp;Club?</Text>

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
                >Read <Link href="https://readme.hackclub.com/slack">
                        readme
                    </Link> - a detailed explainer to Hack Club</Text>
            </Box>

            <NextButton text="Next" slide={5} email={email} />
        </>
    )
}