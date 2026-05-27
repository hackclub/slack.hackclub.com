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
                            display: 'block',
                            alignSelf: "center"
                        }}
                        as="h1"
                    >One more thing...</Text>


                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",

                        padding: "4rem"
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
                                    color: 'black',
                                    position: 'relative',
                                    display: 'block',
                                    alignSelf: "center",
                                    fontSize: "2rem",
                                    fontWeight: "700"
                                }}
                            >Hack Club is for teenagers</label>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "12px"
                            }}>
                                <input name="im-a-child" type="checkbox" checked={iAmAChild} onChange={() => setIAmAChild(!iAmAChild)} />
                                <label htmlFor="im-a-child"
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700"
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
                                    color: 'black',
                                    position: 'relative',
                                    display: 'block',
                                    alignSelf: "center",
                                    fontSize: "2rem",
                                    fontWeight: "700"
                                }}
                            >Hack Club expects respect in its community</label>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "12px"
                            }}>
                                <input name="im-a-child" type="checkbox" checked={agreeToCoc} onChange={() => setAgreeToCoc(!agreeToCoc)} />
                                <label htmlFor="im-a-child"
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700"
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
                            color: `${(attemptedClickBeforeAgreeing) ? "black" : "transparent"}`
                        }}>You must agree to both provisions before continuing</Text>

                        <Button
                            onClick={() => {
                                if (!(iAmAChild && agreeToCoc)) {
                                    setAttemptedClickBeforeAgreeing(true)
                                    return
                                }
                                window.location.href = `https://auth.hackclub.com/slack${(email !== null ? "?email=" + email : "")}`
                            }}

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
                                Hack Club, here I come!
                            </Text>
                        </Button>
                    </Box>
                </Box>

                <NavFooterThing />
            </Box >
        </>
    )
}