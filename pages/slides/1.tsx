import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button } from 'theme-ui'

import NavFooterThing from "../../components/slack/footerNav"

import Emoji from "../../components/emoji"

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
                            height: "600px",
                            width: "400px",

                            background: "#10141d"
                        }}>Actvies! Multiple actves per month like game nights and AMAs with figures in tech and busness
                            <Text sx={{
                                fontSize: "1.25rem",
                                fontWeight: "600",

                                color: "var(--foreground)"
                            }}>Activities!</Text>
                        </div>

                        <div style={{
                            height: "600px",
                            width: "400px",

                            background: "#10141d"
                        }}><Text sx={{
                            fontSize: "1.25rem",
                            fontWeight: "600",

                            color: "var(--foreground)"
                        }}>Connect with other teens</Text>
                        </div>

                        <div style={{
                            height: "600px",
                            width: "400px",

                            background: "#10141d"
                        }}></div>

                        <div style={{
                            height: "600px",
                            width: "400px",

                            background: "#10141d"
                        }}></div>
                    </div>

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

                    <Button
                        variant="ctaLg"
                        as="a"
                        {...({ href: `/slides/2${(email !== null ? "?email=" + email : "")}` } as any)}

                        sx={{
                            position: "relative",
                            transformOrigin: 'center center',
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
                            Wait, what's you ship, we ship?
                        </Text>
                    </Button>
                </Box>
            </Box>

            <NavFooterThing />
        </>
    )
}