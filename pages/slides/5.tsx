import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button, Link } from 'theme-ui'
import NavFooterThing from "../../components/slack/footerNav"

export default function Page() {
    const [iAmAChild, setIAmAChild] = useState(false)
    const [agreeToCoc, setAgreeToCoc] = useState(false)

    const [attemptedClickBeforeAgreeing, setAttemptedClickBeforeAgreeing] = useState(false)

    const [email, setEmail] = useState("")
    useEffect(() => {
        setEmail(getEmailQueryParam())
    })
    const [pressed, setPressed] = useState(false)


    return (
        <>
            <Text
                variant="title"
                sx={{
                    color: 'var(--foreground)',
                    position: 'relative',
                    display: 'block',
                    alignSelf: "center",
                    fontFamily: "var(--font-zarathustra-src)",

                    fontSize: "40px"
                }}
                as="h1"
            >One more thing...</Text>

            <Box sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem"
            }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <label htmlFor="im-a-child"
                        style={{
                            color: 'var(--foreground)',
                            position: 'relative',
                            display: 'block',
                            alignSelf: "center",
                            //@ts-ignore oh hush, TypeScript. This is for the .fluid class stuff defined in global.css
                            "--font-level": 3
                        }}
                        className="fluid"
                    >Hack Club is for teenagers</label>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px"
                    }}>
                        <input id="child" type="checkbox" checked={iAmAChild} onChange={() => setIAmAChild(!iAmAChild)} />
                        <label htmlFor="child"
                            style={{
                                fontSize: "1.5rem",
                                color: 'var(--foreground)',
                            }}
                        >I am 13 - 18 years old</label>
                    </Box>
                </Box>

                <Box sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <label htmlFor="im-a-child"
                        style={{
                            color: 'var(--foreground)',
                            position: 'relative',
                            display: 'block',
                            alignSelf: "center",

                            "--font-level": 3
                        }}
                        className="fluid"
                    >Hack Club expects respect in its community</label>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px"
                    }}>
                        <input id="read" type="checkbox" checked={agreeToCoc} onChange={() => setAgreeToCoc(!agreeToCoc)} />
                        <label htmlFor="read"
                            style={{
                                fontSize: "1.5rem",
                                color: 'var(--foreground)',
                            }}
                        >I've read the <Link href="https://hackclub.com/conduct/" target='_blank'>Code of Conduct</Link></label>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
            }}>
                <Text sx={{
                    fontWeight: "600",
                    color: `${(attemptedClickBeforeAgreeing) ? "var(--foreground)" : "transparent"}`
                }}>You must agree to both provisions before continuing</Text>

                <Button
                    onClick={() => {
                        if (!(iAmAChild && agreeToCoc)) {
                            setAttemptedClickBeforeAgreeing(true)
                            return
                        }
                        window.location.href = `https://auth.hackclub.com/slack${(email !== null ? "?email=" + email : "")}`
                    }}

                    onMouseDown={() => setPressed(true)}
                    onMouseUp={() => setPressed(false)}
                    onMouseLeave={() => setPressed(false)}

                    sx={{
                        position: "relative",
                        transformOrigin: 'center center',
                        whiteSpace: 'nowrap',
                        borderRadius: "12px",
                        background: "#ec3750",
                        transition: "none !important",

                        textTransform: "initial",
                        paddingRight: "16px",
                        paddingLeft: "16px",
                        alignSelf: "center",

                        boxShadow: pressed ? "none" : "0 4px 0 #871026 !important",
                        transform: pressed ? "translateY(4px) !important" : "none",

                        marginTop: "2rem", //I don't like using margin but I'm lazy
                        textWrap: "balance",
                        minWidth: "30vw",

                        "&:focus": {
                            transform: "none",
                        },

                        "&:hover": {
                            transform: "none",
                        },
                    }}
                >

                    <Text sx={{
                        fontSize: "clamp(16px, 5vw, 36px)"
                    }}>Hack Club, here I come!</Text>
                </Button>
            </Box>
        </>
    )
}