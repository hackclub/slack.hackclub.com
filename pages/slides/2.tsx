import { useRef, useEffect, useState } from "react"
import { getEmailQueryParam } from "../../lib/getEmailQueryParam"
import { Box, Text, Button, Image, Link } from 'theme-ui'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Pagination } from "swiper/modules"

import NavFooterThing from "../../components/slack/footerNav"
import UserMention from "../../components/userMention"

import angelKeyboard from "../../public/slides/2/angel-keyboard-b850d653.png"
import crookedRails from "../../public/slides/2/CrookedRails.png"
import qwave from "../../public/slides/2/qwave.png"

import bambuLabA1 from "../../public/slides/2/bambu-a1-mini-a09036ea.png"
import ipad from "../../public/slides/2/ipad.png"
import framework from "../../public/slides/2/framework-laptop-238e3c83.png"
import blahaj from "../../public/slides/2/blahaj.png"
import sandFalling from "../../public/slides/2/sandFalling.png"
import vertSh from "../../public/slides/2/vertsh.png"
import hackatimeHeatmap from "../../public/slides/2/hackatimeHeatmap.png"
import lightBound from "../../public/slides/2/lightbound.png"
import stash from "../../public/slides/2/stash.png"
import luma from "../../public/slides/2/luma.jpg"
import hexecute from "../../public/slides/2/hexecute.png"
import bobTheGun from "../../public/slides/2/bob_the_gun.png"
import catChef from "../../public/slides/2/cat_chef_restaurant.png"

import { BtnArrow } from "./../../components/btn-arrow";
import NextButton from "../../components/nextButton"
import Paragraph from "../../components/paragraph"

const coolProjects: {
    name: string,
    description: string,
    demoURL: string,
    repo: string,
    imageSrc: string,
    creators: {
        name: string,
        id: string
    }[]
}[] = [
        {
            name: "Biblically Accurate Angel Keyboard",
            description: "This is a custom, 3d-printed keyboard made to resemble a biblically accurate angel, powered by a Raspberry Pi Pico RP2040.",
            repo: "https://github.com/geg-tech/biblicallyaccuratekeyboard",
            demoURL: "https://www.youtube.com/watch?v=EbvpPsTKe3c",
            imageSrc: angelKeyboard.src,
            creators: [{
                name: "egg_splats",
                id: "U081WN0MA56"
            }]
        },
        {
            name: "Crooked Rails",
            description: "Crooked Rails is a multiplayer game where you work for a suspicious company. Defend your cargo from monsters and complete jobs between stations",
            repo: "https://github.com/AllInTw0/CrookedRailsPrototypeHDRP",
            demoURL: "https://github.com/AllInTw0/CrookedRailsPrototypeHDRP/releases/",
            imageSrc: crookedRails.src,
            creators: [{
                name: "Raivo",
                id: "U0A5PH25V70"
            }]
        },
        {
            name: "qWave",
            demoURL: "idk yet",
            description: "qWave is a locally hosted media server designed for music!",
            repo: "https://github.com/qwikster/qwave",
            imageSrc: qwave.src,
            creators: [{
                name: "qwik",
                id: "U091JJ2JF8E"
            }]
        },
        {
            name: "Satisfying sand falling thingy :)",
            description: "One of those cool looking gravtiy sand things built in C and raylib",
            repo: "https://github.com/nikoi008/Falling-sand-sim/",
            demoURL: "https://nikoi008.github.io/Falling-sand-sim/",
            imageSrc: sandFalling.src,
            creators: [{
                name: "nmsoukmandjiev007",
                id: "U0A71TWUM7D"
            }]
        },
        {
            name: "Hackatime Heatmap",
            description: "Generate a GitHub-style contribution heatmap for your Hackatime activity!",
            repo: "https://github.com/ImShyMike/hackatime-heatmap",
            demoURL: "https://hackatime-heatmap.shymike.dev",
            imageSrc: hackatimeHeatmap.src,
            creators: [{
                name: "miggy",
                id: "U07VC9705D4"
            }]
        },
        {
            name: "VERT.sh ",
            description: "Convert images, audio, and documents to various file formats - all on-device and locally!",
            repo: "https://github.com/VERT-sh/VERT",
            demoURL: "https://vert.sh",
            imageSrc: vertSh.src,
            creators: [{
                name: "maya",
                id: "U0826R42R98"
            },
            {
                name: "nullptr",
                id: "U08N3DUA47L"
            }]
        },
        {
            name: "LIGHT//BOUND",
            description: "A 2D stage-based rhythm game where the players movements are bound to the light.",
            repo: "https://github.com/FireEntity1/lightbound-demo",
            demoURL: "https://fire-entity.itch.io/lightbound",
            imageSrc: lightBound.src,
            creators: [{
                name: "fireentity",
                id: "U07A0D5K3T2"
            }]
        },
        {
            name: "Stash",
            description: "Share files quickly with encryption!",
            repo: "https://github.com/rip-super/stash",
            demoURL: "https://stash.sahildash.dev/",
            imageSrc: stash.src,
            creators: [{
                name: "rip_super",
                id: "U0A3584269Z"
            }]
        },
        {
            name: "Luma",
            description: "A Minecraft inspired lantern with bluetooth!",
            repo: "https://github.com/notaroomba/luma",
            demoURL: "https://github.com/notaroomba/luma",
            imageSrc: luma.src,
            creators: [{
                name: "NotARoomba",
                id: "U05EZRFKRV4"
            }]
        },
        {
            name: "Hexecute",
            description: "A gesture-based launcher for Wayland. Launch apps by casting spells!",
            repo: "https://github.com/m31-galaxy/Hexecute",
            demoURL: "https://github.com/m31-galaxy/Hexecute/releases",
            imageSrc: hexecute.src,
            creators: [{
                name: "andromeda",
                id: "U074K2VPP62"
            }]
        },
        {
            name: "Bob the Gun",
            description: "An automatic turret inspired by Engineer's sentry gun from TF2. It detects and shoots threats.",
            repo: "https://github.com/takshcpatel/automatic-turret",
            demoURL: "https://github.com/takshcpatel/automatic-turret",
            imageSrc: bobTheGun.src,
            creators: [{
                name: "Crazy Taxi",
                id: "U0A7QRVE0EB"
            }]
        },
        {
            name: "Cat Chef Restaurant",
            description: "A cozy game when you can just relax and serve customers",
            repo: "https://github.com/Kajmix/Godot-Cat-Chef-Game",
            demoURL: "https://kajmix.itch.io/cat-chef-restaurant",
            imageSrc: catChef.src,
            creators: [{
                name: "Kajmix",
                id: "U0A7ZD20DSL"
            }]
        }
    ]

export default function Page() {
    const [email, setEmail] = useState("")
    useEffect(() => {
        setEmail(getEmailQueryParam())
    })

    const [slideWidthOrSomethingIdk, setSlideWidthOrSomethingIdk] = useState(290) //default value is 290px
    const [slideGapOrSomethingIDKDontAskMeAAAAA, setSlideGapOrSomethingIDKDontAskMeAAAAA] = useState(50)
    useEffect(() => {
        const swiper = document.querySelector(".swiper")
        const amountOfCardsVisible = swiper.querySelectorAll(".swiper-slide-visible").length

        if (amountOfCardsVisible == 1) {
            console.log(swiper.clientWidth)
            setSlideWidthOrSomethingIdk(swiper.clientWidth)
            setSlideGapOrSomethingIDKDontAskMeAAAAA(0)
        }
    })

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem"
            }}>
                <Text
                    variant="title"
                    sx={{
                        position: 'relative',
                        display: 'block',
                        color: "var(--foreground)",
                        alignSelf: "center",

                        fontFamily: "var(--font-zarathustra-src)",
                        fontSize: "40px"
                    }}
                    as="h1"
                >I'm glad you asked!</Text>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem"
                    }}>
                        <Paragraph>
                            <Link href="https://hackclub.com/programs" target='_blank'>You ship, We ship</Link> (YSWS) is a family of programs ran by Hack Club where you ship (create) anything you want (hardware or software) like...
                        </Paragraph>

                        <div style={{
                            position: "relative"
                        }}>
                            <Button className="prev-button" sx={{
                                position: "absolute",
                                left: "-20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: "555",

                                "&:hover": {
                                    transform: "translateY(-50%)",
                                },
                            }}>&lt;</Button>

                            <Swiper modules={[Navigation, Pagination]} navigation={{
                                nextEl: '.next-button',
                                prevEl: '.prev-button',
                            }} pagination={{ clickable: true }} slidesPerView="auto" spaceBetween={slideGapOrSomethingIDKDontAskMeAAAAA} watchSlidesProgress={true}>
                                {
                                    coolProjects.map(project => (
                                        <SwiperSlide style={{
                                            width: `${slideWidthOrSomethingIdk}px`,
                                            height: "auto",
                                            display: "flex",

                                            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                height: "100%",

                                                textDecoration: "none",
                                                color: "black"
                                            }}>
                                                <Image sx={{
                                                    display: "block",
                                                    aspectRatio: "3 / 2",
                                                    objectFit: "cover",

                                                    width: "290px",
                                                    height: "200px",
                                                    borderRadius: "16px 16px 0px 0px",

                                                    userSelect: "none",
                                                    pointerEvents: "none"
                                                }} draggable={false} src={project.imageSrc} />

                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "100%",
                                                    gap: "0.5rem",

                                                    backgroundColor: "#1f1f27",
                                                    padding: "16px 18px 18px",
                                                    borderRadius: "0px 0px 16px 16px"
                                                }}>
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}>
                                                        <span style={{
                                                            alignSelf: "center",
                                                            color: "var(--foreground)",
                                                            fontWeight: "800"
                                                        }}>{project.name}</span>
                                                        <span style={{
                                                            alignSelf: "center",
                                                            color: "var(--foreground)"
                                                        }}>Created by {project.creators.length > 1 ? project.creators.map((creator, index) => (
                                                            <><UserMention key={creator.id} username={creator.name} slackId={creator.id} />{" "}<span style={{
                                                                color: "var(--foreground)"
                                                            }}>{index == (project.creators.length - 1) ? "" : "and "}</span></>
                                                        )) : project.creators.map(creator => (
                                                            <UserMention key={creator.id} username={creator.name} slackId={creator.id} />
                                                        ))}</span>
                                                    </div>
                                                    <span style={{
                                                        color: "var(--foreground)",
                                                        height: "100%"
                                                    }}>
                                                        {project.description}
                                                    </span>

                                                    <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                                                        <a
                                                            href={project.demoURL}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="cta-btn"
                                                            style={{
                                                                fontSize: 20,
                                                                color: "var(--color-red)",
                                                                textDecoration: "none",
                                                                fontFamily: "var(--font-phantom)",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            Check out the demo <BtnArrow />
                                                        </a>

                                                        <a
                                                            href={project.repo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="View source code"
                                                            title="View source code"
                                                            style={{
                                                                color: "var(--foreground)",
                                                                textDecoration: "none",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                marginLeft: "auto",
                                                            }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <Button className="next-button" sx={{
                                position: "absolute",
                                right: "-20px",

                                top: "50%",
                                zIndex: "555",
                                transform: "translateY(-50%)",

                                "&:hover": {
                                    transform: "translateY(-50%)",
                                },
                            }}>&gt;</Button>
                        </div>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Paragraph>
                            and we physically ship you prizes like...
                        </Paragraph>
                        <Box sx={{
                            display: "grid",
                            gap: ["1em", "0.5em"],

                            gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr 1fr"],

                            alignItems: "flex-end",
                            padding: "0.5rem 0",

                            width: "fit-content",
                            margin: "auto"
                        }}>
                            <Box sx={{
                                display: "flex",
                                gap: "0.25rem",
                                flexDirection: "column",

                                alignItems: "center"
                            }}>
                                <Image sx={{
                                    height: "auto",
                                    maxHeight: "180px",
                                    width: "auto",
                                    objectFit: "contain"
                                }}
                                    src={bambuLabA1.src} />

                                <span style={{
                                    color: "var(--foreground)"
                                }}>
                                    Bambu A1 Mini
                                </span>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                gap: "0.25rem",
                                flexDirection: "column",

                                alignItems: "center",
                            }}>
                                <Image sx={{
                                    height: "auto",
                                    maxHeight: "180px",
                                    width: "auto",
                                    objectFit: "contain"
                                }} src={ipad.src} />

                                <span style={{
                                    color: "var(--foreground)"
                                }}>
                                    Apple iPad
                                </span>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                gap: "0.25rem",
                                flexDirection: "column",

                                alignItems: "center"
                            }}>
                                <Image sx={{
                                    height: "auto",
                                    maxHeight: "180px",
                                    width: "auto",
                                    objectFit: "contain"
                                }} src={framework.src} />

                                <span style={{
                                    color: "var(--foreground)"
                                }}>
                                    Framework Laptop
                                </span>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                gap: "0.25rem",
                                flexDirection: "column",

                                alignItems: "center"
                            }}>
                                <Image sx={{
                                    height: "auto",
                                    maxHeight: "180px",
                                    width: "auto",
                                    objectFit: "contain"
                                }} src={blahaj.src} />

                                <span style={{
                                    color: "var(--foreground)"
                                }}>
                                    Blahaj
                                </span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <NextButton text="Oh! What else?" slide={3} email={email} />
        </>
    )
}