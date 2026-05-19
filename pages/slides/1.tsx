import { Box, Heading, Text, Button, Link, Image } from 'theme-ui'

import NavFooterThing from "../../components/slack/footerNav"
import slack from "../../public/slides/1/slack.png"

export default function Page() {

    return (
        <>
            <Box sx={{
                display: "flex",
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
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",

                        background: "transparent"
                    }}>
                        <Text
                            variant="title"
                            sx={{
                                color: 'black',
                                position: 'relative',
                                display: 'block'
                            }}
                            as="h1"
                        >Hack Club uses Slack</Text>

                        <Text sx={{ fontSize: '2rem', fontWeight: "800", color: 'slate' }}>
                            <Text sx={{ color: 'red' }}>Slack</Text> is a messaging platform a lot like <Text sx={{ color: '#5865f2' }}>Discord</Text>.
                            It has channels and emoji's and voice chats and bots.
                        </Text>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",

                        backgroundColor: "transparent" // Theme UI sets a solid background color but I want the pokadots in the background to show through. So I gotta do this
                    }}>
                        <Text sx={{ fontSize: '1.5rem', fontWeight: "800", color: 'slate' }}>
                            Completely new to Slack? Watch this quick 2 minute introduction
                        </Text>
                        <iframe width="864" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Box>

                    <Button
                        variant="ctaLg"
                        as="a"
                        {...({ href: '/slides/2' } as any)}

                        sx={{
                            position: "relative",
                            transformOrigin: 'center center',
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

                {
                    //TODO: only show the aside of the screen is larger than like 996px and switch to this new layout or whatever
                }
                <aside>
                    <Image src={slack.src} />
                </aside>
            </Box>

            <NavFooterThing />
        </>
    )
}