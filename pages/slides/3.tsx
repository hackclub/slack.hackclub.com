import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button } from 'theme-ui'
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
                    >Some words you might not understand...</Text>

                    <Text sx={{ fontSize: '1.5rem', fontWeight: "800", color: 'slate', textAlign: "center" }}>
                        The community uses words or abbreviations that you may not understand.
                        Here are the important ones and their definitions
                    </Text>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr 1fr"],
                        gap: "2rem",
                        textAlign: "center",
                        padding: "4rem"
                    }}>
                        <Box>
                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: "center",
                                    fontSize: "6rem !important"
                                }}
                                as="h1"
                            >Ship</Text>
                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'block',
                                    alignSelf: "center"
                                }}
                                as="h2"
                            >to host a finished project so other people can use it and test it</Text>
                        </Box>

                        <Box>
                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: "center",
                                    fontSize: "6rem !important"
                                }}
                                as="h1"
                            >YSWS</Text>

                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'block',
                                    alignSelf: "center"
                                }}
                                as="h2"
                            >an abbreviation that means “you ship, we ship.” It refers to a family of programs hosted by Hack Club where you can get prizes for making cool projects</Text>
                        </Box>

                        <Box>
                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: "center",
                                    fontSize: "6rem !important"
                                }}
                                as="h1"
                            >Grant</Text>
                            <Text
                                sx={{
                                    color: 'black',
                                    position: 'relative',
                                    display: 'block',
                                    alignSelf: "center"
                                }}
                                as="h2"
                            >a virtual Visa card given by YSWS programs to be spent on specific things like domains or filament for 3d printers
                            </Text>
                        </Box>
                    </Box>

                    <Button
                        as="a"
                        {...({ href: `/slides/4${(email !== null ? "?email=" + email : "")}` } as any)}

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
                            Wait, I can get prizes from YSWS? Tell me more!
                        </Text>
                    </Button>
                </Box>

                <NavFooterThing />
            </Box>
        </>
    )
}