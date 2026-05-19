import { Box, Text, Button, Link, Image } from 'theme-ui'
import NavFooterThing from "../../components/slack/footerNav"
export default function Page() {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundImage: "radial-gradient(rgb(250, 250, 250) 12%, transparent 12%), radial-gradient(rgb(255, 255, 255) 12%, transparent 12%)",
                backgroundPosition: "0px 0px, 24px 24px",
                backgroundSize: "48px 48px",
                backgroundColor: "rgb(255, 255, 255)",

                minHeight: '100vh'
            }}>
                <Box as="main" sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
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
                    >Want to learn more about Hack Club?</Text>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <Text
                            sx={{
                                color: 'black',
                                position: 'relative',
                                display: 'block',
                                alignSelf: "center"
                            }}
                            as="h1"
                        >Read <Link href="https://readme.hackclub.com/slack">
                                readme
                            </Link> - a detailed explainer to Hack Club</Text>

                        <Text
                            sx={{
                                color: 'black',
                                position: 'relative',
                                display: 'block',
                                alignSelf: "center"
                            }}
                            as="p"
                        >The expandable sections do not work in the iframe to the right</Text>
                    </Box>

                    <Button
                        as="a"
                        {...({ href: '/slides/5' } as any)}

                        sx={{
                            position: "relative",
                            display: "flex",
                            alignSelf: "center",

                            width: "100%",
                            maxWidth: "600px",

                            whiteSpace: 'nowrap',
                            borderRadius: "12px",
                            background: "#ec3750",
                            transition: "none !important",
                            transform: "none !important"
                        }}
                    >
                        <Text sx={{
                            fontSize: "2rem"
                        }}>
                            Next &rarr;
                        </Text>
                    </Button>
                </Box>

                <aside className="aside-thing">
                    <iframe style={{
                        height: "100vh",
                        width: "30vw",
                        minWidth: "500px"
                    }} src="https://readme.hackclub.com/"></iframe>
                </aside>

                <NavFooterThing />
            </Box>

            <style>
                {`.aside-thing {
                    position: relative;
                    height: 100vh;
                    right: 0;
                    @media only screen and (max-width: 1000px) { display: none; }
                }`}
            </style>
        </>
    )
}