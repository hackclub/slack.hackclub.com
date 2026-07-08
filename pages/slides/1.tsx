import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { isMobile } from 'react-device-detect';
import { Box, Text } from 'theme-ui'
import Image, { StaticImageData } from "next/image"

import Emoji from "../../components/emoji"
import games from "../../public/slides/1/games.png"
import globe from "../../public/slides/1/globe.png"
import mic from "../../public/slides/1/mic.png"
import laptop from "../../public/slides/1/laptop.png"

import { Embed } from "../../components/Embed";

import Paragraph from "../../components/paragraph"

const thingsToDoInTheSlackAndStuff: {
    title: string,
    description: string,
    image?: StaticImageData
}[] = [
        {
            title: "Game Nights!",
            description: "We host game nights where we play Minecraft, Among Us, Monopoly, and other silly games :P",
            image: games
        },
        {
            title: "Interviews with influential figures!",
            description: "We host interviews with leaders in tech and business like Michael Dell (founder and CEO of Dell), Howard Shultz (former CEO at Starbucks) and many others!",
            image: mic
        },
        {
            title: "Participate in You Ship, We Ship programs!",
            description: "Build a project, track your time with Hackatime, submit it, and get prizes shipped to your doorstep!",
            image: laptop
        },
        {
            title: "Connect with other teens!",
            description: "Make friends and connect with other teens with the same interests!",
            image: globe
        }
    ]

export default function Page() {
    const [open, setOpen] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(isMobile)
    }, [])

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",

                width: "100%"
            }}>
                <Text
                    variant="title"
                    sx={{
                        color: 'var(--foreground)',
                        position: 'relative',
                        display: 'block',
                        alignSelf: "center",

                        lineHeight: "1",
                        fontFamily: "var(--font-zarathustra-src)",
                        fontSize: "40px"
                    }}
                    as="h1"
                >Hang out on Slack!</Text>

                <Paragraph>
                    Slack is where the community hangs out!
                    Slack is a chat app like Discord, but better! It has unlimited custom emojis and uncapped file uploads.
                </Paragraph>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
            }}>

                {/* Color value of "hsla(0,0%,100%,.45)" stolen from stardance signup flow*/}
                <Text sx={{ fontSize: '1.25rem', color: 'hsla(0,0%,100%,.45)', textAlign: "center", marginBottom: "4px" }}>
                    Don't know how to use Slack? Watch this quick 2 minute <Text onClick={() => setOpen(true)} style={{ textDecoration: "underline wavy", textUnderlineOffset: "4px", color: "var(--color-red)" }}>video!</Text>
                </Text>

                {!mobile ? <Embed isOpen={open} onClose={() => setOpen(false)} link="https://user-cdn.hackclub-assets.com/019f13af-24c0-7955-9663-436012aff1ce/Timeline%201.mp4" /> : <Embed isOpen={open} onClose={() => setOpen(false)} link="https://user-cdn.hackclub-assets.com/019f23dd-f8b9-7646-bd16-6b2c6674d9ef/mobile.mp4" />}
            </Box >

            <div style={{
                display: "flex",
                gap: "0.5rem",

                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text sx={{ fontSize: "24px", lineHeight: "1.5em", color: "var(--foreground)", alignSelf: "center" }}>
                    <Text sx={{
                        height: "fit-content",

                        color: "var(--color-red)",
                        fontSize: "24px",
                        fontFamily: "var(--font-shantell-src)",
                    }}>
                        "but what happens on Slack?"
                    </Text>, you ask. Well, we have...
                </Text>
            </div>

            <Box sx={{
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"],

                gap: "2rem",

                width: "100%"
            }}>
                {thingsToDoInTheSlackAndStuff.map(item => {
                    return (<div style={{
                        display: "flex",
                        flexDirection: "column",

                        borderRadius: "16px",
                        background: "rgb(3, 0, 28)",
                        width: "100%",
                        maxWidth: "calc(100vw - 4rem)"
                    }}>
                        {!!item.image ? <Image alt={`Image for ${item.title}`} src={item.image} height={180} style={{ marginTop: "2rem", alignSelf: "center" }} /> : <></>}

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5em",

                            padding: "1.5em"
                        }}>
                            <Text sx={{
                                fontSize: "2rem",
                                fontWeight: "600",

                                color: "var(--foreground)",
                                alignSelf: "center",
                                textAlign: "center"
                            }}>{item.title}</Text>

                            <Text sx={{
                                fontSize: "1.25rem",
                                color: "var(--foreground)",
                                textAlign: "center"
                            }}>
                                {item.description}
                            </Text>
                        </div>
                    </div>
                    )
                })}
            </Box>
        </>
    )
}