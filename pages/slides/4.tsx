import { useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Link } from 'theme-ui'

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
            >Ready to start?</Text>

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
                            fontSize: "20px",
                            color: 'var(--foreground)',
                            position: 'relative',
                            display: 'block',
                            alignSelf: "center",

                            textAlign: "center"
                        }}

                    >Hack Club is for teenagers</label>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",

                        alignItems: "center"
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
                            fontSize: "20px",
                            textAlign: "center"
                        }}

                    >Hack Club expects respect in its community</label>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",

                        alignItems: "center"
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
            </Box >




            <Link
                onClick={() => {
                    if (!(iAmAChild && agreeToCoc)) {
                        setAttemptedClickBeforeAgreeing(true)
                        return
                    }
                    window.location.href = `https://auth.hackclub.com/slack${(email !== null ? "?email=" + email : "")}`
                }}

                style={{
                    position: "fixed",
                    transformOrigin: 'center center',
                    whiteSpace: 'nowrap',
                    borderRadius: "12px",
                    background: "var(--color-red)",
                    transition: "none !important",
                    width: "fit-content",

                    alignItems: "center",

                    bottom: "50%",
                    right: "10px",

                    textDecoration: "none",
                    padding: "6px 12px",

                    alignSelf: "center",

                    textWrap: "balance",
                    zIndex: 99,
                    color: "var(--foreground)",

                    transform: "translateY(-50%)"
                }}
            >
                <Text sx={{
                    display: "flex",
                    fontSize: "clamp(16px, 5vw, 36px)",
                    alignItems: "center",
                    gap: "4px"
                }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                    fill="currentColor" viewBox="0 0 24 24" >
                        { /*<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->*/}
                        <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
                    </svg></Text>
            </Link>

            <style>
                {`
input[type="checkbox"] {
position: relative;
appearance: none;

width: 20px;
height: 20px;

background-color: #17171d;
border: 2px solid #454549;
border-radius: 4px;
                }
    

input[type="checkbox"]:checked::after {
content: '';
position: absolute;
top: 0px;
left: 5px;
width: 4px;
height: 12px;
border: solid white;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}`}
            </style>
        </>
    )
}