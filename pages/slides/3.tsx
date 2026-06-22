import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Link, Image } from 'theme-ui'

import spacesLogo from "../../public/slides/3/spaces.svg"
import nestLogo from "../../public/slides/3/nest.png"
import cdnLogo from "../../public/slides/3/cdn.svg"
import lapseLogo from "../../public/slides/3/lapse.png"

import Marquee from "react-fast-marquee"

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
                    flexDirection: "column",
                    gap: "2rem", bg: 'white', color: 'black', padding: "4rem",

                    height: "fit-content",
                    width: "100%",
                    backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                }}>
                    <Text
                        variant="title"
                        sx={{
                            position: 'relative',
                            display: 'block',
                            color: "var(--foreground)",
                            alignSelf: "center",

                            fontFamily: "var(--font-zarathustra-src)",
                            "--font-level": 4
                        }}
                        className="fluid"
                        as="h1"
                    >We have developer tools!</Text>

                    <Text sx={{ fontSize: '2rem', color: "var(--foreground)", alignSelf: "center", }}>
                        Not all teens have access to the tools they need to create, so Hack Club offers developer tools and services for free!</Text>

                    <Marquee style={{
                        marginLeft: "-4rem",
                        marginRight: "-4rem",
                        width: "calc(100% + 8rem)"
                    }}

                        speed={40} pauseOnHover={true} gradient={false}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "420px",
                            marginRight: "24px",
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

                            width: "420px",
                            marginRight: "24px",
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

                            width: "420px",
                            marginRight: "24px",
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
                                ><a href="https://spaces.hackclub.com" target="_blank">Spaces</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>Cloud dev environments for Hack Clubbers, with VSCode, Blender, KiCad, and more.</Text>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "420px",
                            marginRight: "24px",
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
                                    <a href="https://cdn.hackclub.com" target="_blank">
                                        <Image sx={{
                                            filter: "invert(40%) sepia(46%) saturate(6189%) hue-rotate(331deg) brightness(93%) contrast(98%)",
                                            height: "64px",
                                            width: "64px",
                                        }}
                                            src={cdnLogo.src} />
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
                                ><a href="https://cdn.hackclub.com" target="_blank">CDN</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>50GB of free image and video hosting, with permanent links for your websites</Text>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            width: "420px",
                            marginRight: "24px",
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
                                    <a href="https://lapse.hackclub.com/" target="_blank">
                                        <Image sx={{
                                            height: "64px",
                                            width: "64px",
                                        }}
                                            src={lapseLogo.src} />
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
                                ><a href="https://lapse.hackclub.com/" target="_blank">Lapse</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>Record time spent on hardware, art, or anything else Hackatime can't track.</Text>
                            </Box>
                        </Box>
                    </Marquee>
                    <Text sx={{
                        color: "var(--foreground)",
                        fontSize: "1.25rem"
                    }}>
                        See the full list on <Link href="https://toolbox.hackclub.com/" target="_blank">Toolbox</Link>
                    </Text>

                    <NextButton text="oh wow! I can't wait to start!" slide={4} email={email} />
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