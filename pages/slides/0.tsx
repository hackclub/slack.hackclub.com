import { Box, Text } from 'theme-ui'
import Image from "next/image"

import welcome from "../../public/slides/0/welcome_to_the_club.gif"
import Paragraph from "../../components/paragraph"

export default function Page() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",

                width: "100%"
            }}>
                <Text
                    variant="title"
                    sx={{
                        color: 'var(--foreground)',
                        position: 'relative',
                        display: 'block',
                        alignSelf: "center",
                        marginBottom: "1rem",

                        lineHeight: "1",
                        fontFamily: "var(--font-zarathustra-src)",
                        fontSize: "40px"
                    }}
                    as="h1"
                >Welcome to Hack Club!</Text>

                <Image src={welcome} alt="Welcome to the Club" style={{
                    maxWidth: "100%",
                    height: "auto",

                    borderRadius: 8
                }} />

                <Paragraph>
                    Hack Club is a nonprofit founded by Zach Latta to help teenagers create more hardware and software!
                </Paragraph>
                <Box sx={{
                    display: "flex",
                    flexDirection: ["column", "column", "row"],
                    gap: "1rem",

                    fontSize: "24px", lineHeight: "1.5em", color: "var(--foreground)", alignSelf: "center"
                }}>
                    <Paragraph><p style={{ textAlign: "center" }}>You might wonder</p></Paragraph>
                    <div style={{
                        display: "flex",
                        gap: "0.5rem",

                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text sx={{
                            height: "fit-content",

                            color: "var(--color-red)",
                            fontSize: "36px",
                            fontFamily: "var(--font-shantell-src)",

                            textAlign: "center"
                        }}>
                            "but what do I actually do here?"
                        </Text>
                    </div>
                </Box>
                <Paragraph><p style={{ textAlign: "center" }}>Well, let's find out!</p></Paragraph>
            </Box>
        </>
    )
}