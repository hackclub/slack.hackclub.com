import { JSX, useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Link } from 'theme-ui'
import Image, { StaticImageData } from "next/image"

import nestLogo from "../../public/slides/3/nest.png"
import lapseLogo from "../../public/slides/3/lapse.png"
import confused from "../../public/slides/3/confused_dinosaur.png"

import Marquee from "react-fast-marquee"

import Paragraph from "../../components/paragraph"

const cards: ({
    title: string,
    description: string,
    url: string,
} & ({
    image: StaticImageData,
    customImage?: never
} | {
    customImage: JSX.Element,
    image?: never
}))[] = [{
    title: "Nest",
    description: "Host Discord bots, apps, websites, try out basic computer networking and more!",
    image: nestLogo,

    url: "hackclub.app"
},
{
    title: "Lapse",
    description: "Track the time spent assembly hardware, using CAD, or coding via screen recording",
    image: lapseLogo,

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
            <svg style={{
                filter: "invert(40%) sepia(46%) saturate(6189%) hue-rotate(331deg) brightness(93%) contrast(98%)",
                height: "128px",
                width: "128px",
            }} fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="download" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="36" height="36"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C19.4194 7 21.4374 8.71837 21.9002 11.0012C24.1171 10.9472 26 12.7809 26 15C26 17.2091 24.2091 19 22 19C21.4477 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17C23.1046 17 24 16.1046 24 15C24 13.8954 23.1046 13 22 13C21.7137 13 21.4301 13.0367 21.1499 13.0962C20.6068 13.2113 20 12.5551 20 12C20 10.3432 18.6569 9 17 9C15.2449 9 14.1626 10.151 13.7245 11.534C13.5099 12.2114 12.7936 12.6737 12.1486 12.3754C11.6937 12.1651 11.282 12 11 12C10.4477 12 10 12.4477 10 13C10.254 14.0159 9.48563 15 8.43845 15H8C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19H8C6.34314 19 5 17.6569 5 16C5 14.3431 6.34314 13 8 13C8 11.3431 9.34314 10 11 10C11.4651 10 11.9055 10.1058 12.2983 10.2947C12.9955 8.37292 14.8374 7 17 7ZM19.7071 22.7071L16.7071 25.7071C16.3166 26.0976 15.6834 26.0976 15.2929 25.7071L12.2929 22.7071C11.9024 22.3166 11.9024 21.6834 12.2929 21.2929C12.6834 20.9024 13.3166 20.9024 13.7071 21.2929L15 22.5858V17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17V22.5858L18.2929 21.2929C18.6834 20.9024 19.3166 20.9024 19.7071 21.2929C20.0976 21.6834 20.0976 22.3166 19.7071 22.7071Z"></path></g></svg>
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

    image: confused
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
            <svg style={{
                filter: "invert(40%) sepia(46%) saturate(6189%) hue-rotate(331deg) brightness(93%) contrast(98%)",
                height: "128px",
                width: "128px",
            }} fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="flag" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="0" width="32" height="32">
                <g>
                    <path d="M10.953 5.034a1 1 0 0 0-1.225.707L4.034 26.992a1 1 0 1 0 1.932.517l5.694-21.25a1 1 0 0 0-.707-1.225zm2.107 9.005c.425-1.703.798-3.036 1.225-4.079.429-1.058.766-1.43.912-1.532a.216.216 0 0 0 .022-.023l.017.003c.131-.022.133-.021.353.073l.065.028c.584.23 1.492.826 2.826 2.076 1.584 1.462 3.173 2.338 4.36 2.738a9.906 9.906 0 0 0 2.045.4c-.312 1.161-.627 2.297-1.028 3.334-.405 1.061-.756 1.774-1.284 2.307-.385.41-.719.542-1.131.527-.519-.018-1.447-.289-2.901-1.37-1.746-1.291-3.25-2.073-4.327-2.514a17.61 17.61 0 0 0-1.498-.524c.08-.375.193-.838.344-1.444zm12.104-1.615a.522.522 0 0 1 0 0zm-13.21 2.816l.017.008a.08.08 0 0 1-.017-.008zm-.834-1.685c1.727-6.93 3.174-9.634 8.727-4.43 2.833 2.655 4.933 2.646 6.14 2.641 1.16-.005 1.494-.007.86 2.359-1.294 4.83-3.053 10.796-9.5 6-2.638-1.962-4.392-2.486-5.449-2.801-1.526-.456-1.599-.478-.778-3.769z" />
                </g>

            </svg>
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
            >Use Hack Club tools!</Text>

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
                        backgroundColor: "rgb(3, 0, 28)"
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
                                    <Image style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "12px",
                                    }} src={c.image} alt={`Logo of Hack Club ${c.title}`} /></a>
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

            <style>
                {`a {
                    text-decoration: none;
                    color: inherit;
                }`}
            </style>
        </>
    )
}