import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button, Image } from 'theme-ui'

import spacesLogo from "../../public/slides/2/spaces.svg"
import nestLogo from "../../public/slides/2/nest.png"

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
                    >Hack Club gives tools to empower teens like...</Text>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr 1fr"],
                        gap: "2rem",

                        paddingTop: "4rem"
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "100%",
                            padding: "2rem",

                            borderRadius: "12px",
                            backgroundColor: "#03001c"
                        }}>
                            <header>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        width: "6rem",
                                        height: "6rem",

                                        borderRadius: "2rem",
                                        background: "transparent"
                                    }}>
                                    <a href="https://hackclub.app" target="_blank">
                                        <Image sx={{
                                            height: "100%",
                                            width: "100%",
                                        }} src={nestLogo.src} /></a>
                                </Box>
                            </header>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <Text
                                    variant="title"
                                    sx={{
                                        color: 'white',
                                        position: 'relative',
                                        display: 'block',
                                        fontSize: "48px !important",
                                        alignSelf: "center"
                                    }}
                                    as="h1"
                                ><a href="https://hackclub.app" target="_blank">Nest</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>Host Discord bots, apps, websites, try out basic computer networking and more!</Text>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "100%",
                            padding: "2rem",

                            borderRadius: "12px",
                            backgroundColor: "#03001c"
                        }}>
                            <header>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        color: "white",
                                        width: "6rem",
                                        height: "6rem",

                                        fontWeight: "700",
                                        fontSize: "3rem",

                                        borderRadius: "2rem",
                                        background: "#ec3750"
                                    }}>
                                    <a href="https://ai.hackclub.com" target='_blank'>
                                        h
                                    </a>
                                </Box>
                            </header>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <Text
                                    variant="title"
                                    sx={{
                                        color: 'white',
                                        position: 'relative',
                                        display: 'block',
                                        fontSize: "48px !important",
                                        alignSelf: "center"
                                    }}
                                    as="h1"
                                ><a href="https://ai.hackclub.com" target='_blank'>Hack Club AI</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>Access to 400+ LLMs for Hack Clubbers. Limited to $3 a day</Text>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "100%",
                            padding: "2rem",

                            borderRadius: "12px",
                            backgroundColor: "#03001c"
                        }}>
                            <header>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        color: "white",
                                        width: "6rem",
                                        height: "6rem",

                                        fontWeight: "700",
                                        fontSize: "3rem",

                                        background: "transparent"
                                    }}>
                                    <a href="https://spaces.hackclub.com" target="_blank">
                                        <Image sx={{
                                            filter: "invert(40%) sepia(46%) saturate(6189%) hue-rotate(331deg) brightness(93%) contrast(98%)",
                                            height: "64px",
                                            width: "64px",
                                        }}
                                            src={spacesLogo.src} />
                                    </a>
                                </Box>
                            </header>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <Text
                                    variant="title"
                                    sx={{
                                        color: 'white',
                                        position: 'relative',
                                        display: 'block',
                                        fontSize: "48px !important",
                                        alignSelf: "center",
                                        whiteSpace: "nowrap"
                                    }}
                                    as="h1"
                                ><a href="https://spaces.hackclub.com" target="_blank">Hack Club Spaces</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>Virtual development environments for Hack Clubbers. VSCode, Blender, KiCad, and more, in the cloud.</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Button
                        as="a"
                        {...({ href: `/slides/3${(email !== null ? "?email=" + email : "")}` } as any)}

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
                            Next
                        </Text>
                    </Button>
                </Box>

                <NavFooterThing />
            </Box>

            <style>
                {`a {
                    text-decoration: none;
                    color: inherit;
                }`}
            </style>
        </>
    )
}