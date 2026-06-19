import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button } from 'theme-ui'

import NavFooterThing from "../../components/slack/footerNav"

import Emoji from "../../components/emoji"
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

                                lineHeight: "1",
                                fontFamily: "var(--font-zarathustra-src)"
                            }}
                            as="h1"
                        >The community is on Slack <Emoji name="slack" style={{
                            position: "relative",
                            bottom: "0.15em"
                        }} /></Text>

                        <Text sx={{ fontSize: '24px', color: 'var(--foreground)' }}>
                            Hack Club hosts its community on Slack!

                            Slack is a chat app like Discord, but better and trusted by thousands of businesses.
                        </Text>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",

                        alignItems: "center",

                        backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                    }}>
                        <Text sx={{ fontSize: '1.5rem', color: 'var(--foreground)', textAlign: "center" }}>
                            Don't know how to use Slack? Watch this quick 2 minute video!
                        </Text>
                        <iframe width="864" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                            fontFamily: "var(--font-shantell-src)"
                        }}>
                            but what even happens on Slack?
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

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",

                        gap: "2rem",

                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            height: "500px",
                            width: "400px",

                            borderRadius: "16px",
                            background: "#10141d"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",

                                padding: "1rem"
                            }}>
                                <Text sx={{
                                    fontSize: "2rem",
                                    fontWeight: "600",

                                    color: "var(--foreground)",
                                    alignSelf: "center",
                                    textAlign: "center"
                                }}>Game nights!</Text>

                                <Text sx={{
                                    fontSize: "1.25rem",
                                    color: "var(--foreground)",
                                    textAlign: "center"
                                }}>
                                    We host game nights where we play Minecraft, Among Us, Monopoly, and other silly games :P
                                </Text>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            height: "500px",
                            width: "400px",

                            borderRadius: "16px",
                            background: "#10141d"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",

                                padding: "1rem"
                            }}>
                                <Text sx={{
                                    fontSize: "2rem",
                                    fontWeight: "600",

                                    color: "var(--foreground)",
                                    alignSelf: "center",
                                    textAlign: "center"
                                }}>Interviews with influential figures!</Text>

                                <Text sx={{
                                    fontSize: "1.25rem",
                                    color: "var(--foreground)",
                                    textAlign: "center"
                                }}>
                                    We host AMA (Ask-me-anything) interviews with leaders in tech and business, including Michael Dell (founder and CEO of Dell), Howard Shultz (former CEO at Starbucks) and many others!
                                </Text>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            height: "500px",
                            width: "400px",

                            borderRadius: "16px",
                            background: "#10141d",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",

                                padding: "1rem"
                            }}>
                                <Text sx={{
                                    fontSize: "2rem",
                                    fontWeight: "600",

                                    color: "var(--foreground)",
                                    alignSelf: "center",
                                    textAlign: "center"
                                }}>Participate in You Ship, We Ship programs!</Text>

                                <Text sx={{
                                    fontSize: "1.25rem",
                                    color: "var(--foreground)",
                                    textAlign: "center"
                                }}>
                                    Build a project, track your time with Hackatime, submit it, and get prizes shipped to your doorstep!
                                </Text>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            height: "500px",
                            width: "400px",

                            borderRadius: "16px",
                            background: "#10141d"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",

                                padding: "1rem"
                            }}>
                                <Text sx={{
                                    fontSize: "2rem",
                                    fontWeight: "600",

                                    color: "var(--foreground)",
                                    alignSelf: "center",
                                    textAlign: "center"
                                }}>Connect with other teens!</Text>

                                <Text sx={{
                                    fontSize: "1.25rem",
                                    color: "var(--foreground)",
                                    textAlign: "center"
                                }}>
                                    Make friends and connect with other teens with the same interests!
                                </Text>
                            </div>
                        </div>
                    </div>

                    <NextButton text="Wait, tell me more about You Ship, We Ship!" slide={2} email={email} />
                </Box>
            </Box >

            <NavFooterThing />
        </>
    )
}