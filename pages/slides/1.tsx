import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { isMobile } from 'react-device-detect';
import { Box, Text, Image } from 'theme-ui'

import Emoji from "../../components/emoji"
import NextButton from "../../components/nextButton"

import { YouTubeEmbed } from "../../components/YouTubeEmbed";

import microphone from "../../public/slides/1/microphone.png"
import Paragraph from "../../components/paragraph"

const thingsToDoInTheSlackAndStuff: {
    title: string,
    description: string,
    image?: string
}[] = [
        {
            title: "Game Nights!",
            description: "We host game nights where we play Minecraft, Among Us, Monopoly, and other silly games :P"
        },
        {
            title: "Interviews with influential figures!",
            description: "We host interviews with leaders in tech and business like Michael Dell (founder and CEO of Dell), Howard Shultz (former CEO at Starbucks) and many others!",
            image: microphone.src
        },
        {
            title: "Participate in You Ship, We Ship programs!",
            description: "Build a project, track your time with Hackatime, submit it, and get prizes shipped to your doorstep!"
        },
        {
            title: "Connect with other teens!",
            description: "Make friends and connect with other teens with the same interests!"
        }
    ]

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
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",

                    width: "100%",
                    background: "transparent"
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
                    >The community is on Slack</Text>

                    <Paragraph>
                        Hack Club hosts its community on Slack!

                        Slack is a chat app like Discord, but better and trusted by thousands of businesses.
                    </Paragraph>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center",

                    backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                }}>
                    {/* Color value of "hsla(0,0%,100%,.45)" stolen from stardance signup flow*/}
                    <Text sx={{ fontSize: '1.25rem', color: 'hsla(0,0%,100%,.45)', textAlign: "center" }}>
                        Don't know how to use Slack? Watch this quick 2 minute video!
                    </Text>

                    <div
                        style={{
                            width: "min(520px, calc(100vw - 96px))",
                            borderRadius: 12,
                            overflow: "hidden",
                            aspectRatio: "16 / 9",
                            background: "rgba(0,0,0,0.3)",
                            marginBottom: 32,
                        }}
                    >
                        {!isMobile ? <YouTubeEmbed id="dQw4w9WgXcQ" title="Rick Roll 4k" /> : <YouTubeEmbed id="q3UPkLdogl0" title="Partners in crime" />}
                    </div>
                </Box>

                <div style={{
                    display: "flex",
                    gap: "0.5rem",

                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "12px",
                        flexDirection: "column",

                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "14px",

                            transform: "rotate(25deg)",
                            borderRadius: "16px"
                        }}></span>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "18px",

                            borderRadius: "16px"
                        }}></span>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "14px",

                            transform: "rotate(-25deg)",
                            borderRadius: "16px"
                        }}></span>
                    </div>

                    <Text sx={{
                        height: "fit-content",

                        color: "var(--color-red)",
                        fontSize: "36px",
                        fontFamily: "var(--font-shantell-src)",

                        textWrap: "nowrap",
                        "--font-level": 2
                    }} className="fluid">
                        but what happens on Slack?
                    </Text>

                    <div style={{
                        display: "flex",
                        gap: "12px",
                        flexDirection: "column",
                    }}>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "14px",

                            transformOrigin: "mid left",
                            transform: "rotate(155deg)",
                            borderRadius: "16px"
                        }}></span>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "18px",

                            borderRadius: "16px"
                        }}></span>
                        <span style={{
                            background: "var(--color-red)",
                            height: "3px",
                            width: "14px",

                            transformOrigin: "mid left",
                            transform: "rotate(25deg)",
                            borderRadius: "16px"
                        }}></span>
                    </div>
                </div>

                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"],

                    gap: "2rem",

                    width: "100%"
                }}>
                    {thingsToDoInTheSlackAndStuff.map(item => {
                        return (<div style={{
                            display: "flex",
                            flexDirection: "column",

                            borderRadius: "16px",
                            background: "#10141d",
                            flex: "1 1 0",
                        }}>
                            {!!item.image ? <Image src={item.image} /> : <></>}

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

                <NextButton text="Wait, what's You Ship, We Ship!" slide={2} email={email} />
            </Box>
        </>
    )
}