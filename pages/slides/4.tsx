import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button, Image, Link } from 'theme-ui'

import a1mini from "../../public/slides/4/a1-mini.png";
import macbook from "../../public/slides/4/macbook.png"

import NavFooterThing from "../../components/slack/footerNav"

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

                backgroundImage: "radial-gradient(rgb(250, 250, 250) 12%, transparent 12%), radial-gradient(rgb(255, 255, 255) 12%, transparent 12%)",
                backgroundPosition: "0px 0px, 24px 24px",
                backgroundSize: "48px 48px",
                backgroundColor: "rgb(255, 255, 255)",

                minHeight: '100vh'
            }}>
                <Box as="main" sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem", bg: 'white', color: 'black', padding: "4rem",

                    height: "fit-content",
                    backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                }}>
                    <Text
                        variant="title"
                        sx={{
                            color: 'black',
                            position: 'relative',
                            display: 'block'
                        }}
                        as="h1"
                    >That's right!</Text>

                    <Text sx={{ fontSize: '1.5rem', fontWeight: "800", color: 'slate', textAlign: "center" }}>
                        Hack Club hosts <Link href="https://hackclub.com/programs" target='_blank'>You ship, We ship programs</Link> where teens are rewarded for shipping cool projects with prizes like...
                    </Text>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
                        gridTemplateRows: ["1fr 1fr", "1fr 1fr", "1fr"],
                        gap: "2rem",
                        placeItems: "center",

                        paddingTop: "4rem",
                        height: "100%"
                    }}>
                        <Text sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: '1.5rem', fontWeight: "800", color: 'slate', textAlign: "center"
                        }}>
                            the A1 Mini 3d printer from Bambu Lab
                            <Image
                                sx={{
                                    height: "480px"
                                }}
                                src={a1mini.src}
                            />
                        </Text>

                        <Text sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: '1.5rem', fontWeight: "800", color: 'slate', textAlign: "center"
                        }}>
                            the Macbook Neo
                            <Image sx={{
                                height: "480px"
                            }}
                                src={macbook.src} />
                        </Text>
                    </Box>

                    <Button
                        as="a"
                        {...({ href: `/slides/5${(email !== null ? "?email=" + email : "")}` } as any)}

                        sx={{
                            position: "relative",
                            display: "flex",

                            whiteSpace: 'nowrap',
                            borderRadius: "12px",
                            background: "#ec3750",
                            transition: "none !important",
                            transform: "none !important",

                            textTransform: "initial",
                            width: "fit-content",
                            paddingRight: "2rem",
                            paddingLeft: "2rem",
                            alignSelf: "center",
                            minWidth: "600px"
                        }}
                    >
                        <Text sx={{
                            fontSize: "2rem"
                        }}>
                            Hehe - awesome!
                        </Text>
                    </Button>
                </Box>

                <NavFooterThing />
            </Box>
        </>
    )
}