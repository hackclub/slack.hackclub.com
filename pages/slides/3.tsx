import { JSX, useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Link, Image } from 'theme-ui'

import spacesLogo from "../../public/slides/3/spaces.svg"
import nestLogo from "../../public/slides/3/nest.png"
import cdnLogo from "../../public/slides/3/cdn.svg"
import lapseLogo from "../../public/slides/3/lapse.png"
import confused from "../../public/slides/3/confused_dinosaur.png"

import Marquee from "react-fast-marquee"

import NextButton from "../../components/nextButton"
import Paragraph from "../../components/paragraph"

const cards: ({
    title: string,
    description: string,
    url: string,
} & ({
    image: string,
    customImage?: never
} | {
    customImage: JSX.Element,
    image?: never
}))[] = [{
    title: "Nest",
    description: "Host Discord bots, apps, websites, try out basic computer networking and more!",
    image: nestLogo.src,

    url: "hackclub.app"
},
{
    title: "Lapse",
    description: "Track the time spent assembly hardware, using CAD, or coding via screen recording",
    image: lapseLogo.src,

    url: "lapse.hackclub.com"
},
{
    title: "CDN",
    description: "50GB of free image and video hosting, with permanent links for your websites",
    url: "cdn.hackclub.com",

    customImage: (<Box
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
    </Box>)
},
{
    title: "Hack Club AI",
    description: "Access to 400+ LLMs for Hack Clubbers. Limited to $3 a day",
    url: "ai.hackclub.com",

    customImage: (<Box
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
    </Box>)
},
{
    title: "Free subdomains",
    description: "Get a free subdomain on dino.icu for personal purposes like a portfolio or a random project",
    url: "https://github.com/hackclub/dns",

    image: confused.src
},
{
    title: "Spaces",
    description: "Cloud dev environments for Hack Clubbers, with VSCode, Blender, KiCad, and more.",
    url: "spaces.hackclub.com",

    customImage: (<Box
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
    </Box>)
}]

export default function Page() {
    const [email, setEmail] = useState("")
    useEffect(() => {
        setEmail(getEmailQueryParam())
    })

    return (
        <>
            <Box as="main" sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "2rem", bg: 'white', color: 'black', padding: "2rem",

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
                        fontSize: "40px"
                    }}

                    as="h1"
                >We have developer tools!</Text>

                <Paragraph>
                    Not all teens have access to the tools they need to create, so Hack Club offers developer tools and services for free!
                </Paragraph>

                <Marquee style={{
                    marginLeft: "-4rem",
                    marginRight: "-4rem",
                    width: "calc(100% + 6rem)"
                }}
                    speed={40} pauseOnHover={true} gradient={false}>

                    {cards.map(c => {
                        return (<Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",

                            height: "100%",
                            width: "420px",
                            marginRight: "24px",
                            padding: "2rem",

                            borderRadius: "12px",
                            backgroundColor: "#03001c"
                        }}>
                            <header>
                                {!!c.image ? <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        width: "6rem",
                                        height: "6rem",

                                        borderRadius: "2rem",
                                        background: "transparent"
                                    }}>
                                    <a href={c.url} target="_blank">
                                        <Image sx={{
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: "12px",
                                        }} src={c.image} /></a>
                                </Box> : c.customImage}
                            </header>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
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
                                ><a href={c.url} target="_blank">{c.title}</a></Text>

                                <Text sx={{
                                    color: "#aeaeb2"
                                }}>{c.description}</Text>
                            </Box>
                        </Box>
                        )
                    })}
                </Marquee>
                <Text sx={{
                    color: "var(--foreground)",
                    fontSize: "1.25rem"
                }}>
                    See the full list on <Link href="https://toolbox.hackclub.com/" target="_blank">Toolbox</Link>
                </Text>

                <NextButton text="oh wow! I can't wait to start!" slide={4} email={email} />
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