import { useState, useRef, useCallback } from 'react'

import Nav from '../components/nav'
import Footer from '../components/footer'
import ForceTheme from '../components/force-theme'
import { Box, Heading, Text, Button, Link, Image } from 'theme-ui'

import orpheusWave from "../public/orpheus-wave.png"
import buildStuff from "../public/build-stuff.png"
import hangOut from "../public/hang-out.png"
import makeFriends from "../public/make-friends.png"

import { ChannelName } from '../components/slack/channelName'

import channels from '../channels.json'

import ct from "countries-and-timezones";

const GuideItem = ({ title, children, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  const handleClick = () => {
    onToggle()
  }

  const handleTransitionEnd = useCallback(() => { }, [])

  return (
    <Box
      sx={{
        borderBottom: '1px solid',
        borderColor: 'smoke',
        overflow: 'hidden',
        '&:last-child': { borderBottom: 'none' }
      }}
    >
      <Box
        as="button"
        onClick={handleClick}
        sx={{
          width: '100%',
          py: '1.25rem',
          px: '0.5rem',
          fontWeight: 600,
          fontSize: '1.5rem',
          color: 'white',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'inherit',
          textAlign: 'left',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: 'white',
            bg: 'rgba(236, 55, 80, 0.05)'
          },
          '&:hover .guide-icon': { color: 'white' }
        }}
      >
        {title}
        <Text
          className="guide-icon"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'white',
            transition: 'transform 0.3s ease, color 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          {isOpen ? '−' : '+'}
        </Text>
      </Box>
      <Box
        ref={contentRef}
        onTransitionEnd={handleTransitionEnd}
        sx={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
          '& > div': { overflow: 'hidden' }
        }}
      >
        <Box
          sx={{
            fontSize: '1.15rem',
            pb: isOpen ? '1.5rem' : 0,
            pt: isOpen ? '0.5rem' : 0,
            px: '0.5rem',
            transition: 'padding 0.3s ease',
            '& p': { mb: '0.75rem', color: 'white', lineHeight: '1.6' },
            '& p:last-child, & ul:last-child': { mb: 0 },
            '& ul': { pl: '1.5rem' },
            '& li': { mb: '0.5rem', color: 'white' },
            '& code': {
              bg: 'sunken',
              px: '0.3em',
              py: '0.1em',
              borderRadius: '4px',
              fontFamily: 'monospace'
            }
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

const MakeFigure = (props) => {
  const imgUrl = props.imgUrl
  const imgDesc = props.imgDesc
  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
    >
      <img
        src={imgUrl}
        alt={imgDesc}
        loading="lazy"
        style={{
          height: '22.5rem'
        }}
      />
      <figcaption style={{ color: "white" }}>{imgDesc}</figcaption>
    </figure>
  )
}

export default function Page() {
  const [openGuide, setOpenGuide] = useState(null)
  const [geoLocationError, setGeoLocationError] = useState<null | string>(null)
  const [geoLocationData, setGeoLocationData] = useState<{
    country_name: string
    country_code: string,
    channel: {
      "channel": string,
      "match": string
      "type": string // it's really just "country" | "us-state" but if I use this union, TypeScript will complain
      "url": string,
      "id": string
    },
  } | null>(null)

  const handleGuideToggle = (index) => {
    setOpenGuide(openGuide === index ? null : index)
  }

  const handleGeolocate = async () => {
    const timezone = window.Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || null
    const country = ct.getCountryForTimezone(timezone)

    if (!country) {
      setGeoLocationError("Location not found for this timezone")
    }

    const formattedCountryOrSomethingIDKDontAskMe = country.name.toLowerCase().replace(/[\s-]+/g, '-')
    const channel = channels.find(
      (c) =>
        c.type === 'country' &&
        (formattedCountryOrSomethingIDKDontAskMe.includes(c.match) || c.match.includes(formattedCountryOrSomethingIDKDontAskMe))
    )
    console.log(channel)
    setGeoLocationData({
      country_name: country.name,
      country_code: country.id,
      channel: channel
    })
  }

  return (
    <>
      <ForceTheme theme="light" />
      <Nav />
      <Box as="main" sx={{ bg: 'dark', color: 'black', minHeight: '100vh' }}>
        <Box
          as="header"
          sx={{
            bg: 'dark',
            pt: [5, 6],
            pb: [2, 1],
            textAlign: 'left',
            position: 'relative',
            overflowX: 'hidden',
            height: "500px"
          }}
        >
          <Box
            sx={{
              color: 'white',
              position: 'absolute',
              display: "flex",
              gap: "4rem",
              flexDirection: "column",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "fit-content",
              alignItems: "center",
              transform: "translate(-50%, -50%)",
            }}>

            <Text
              variant="title"
              sx={{
                color: 'white',
                position: 'relative',
                display: 'block',
                padding: "1rem"
              }}
              as="h4"
            >Join Hack Club on Slack</Text>
            <Button
              variant="ctaLg"
              as="a"
              {...({ href: '/slides/0' } as any)}

              sx={{
                position: "relative",
                transformOrigin: 'center center',
                width: "fit-content",
                whiteSpace: 'nowrap',
                borderRadius: "12px",
                background: "#ec3750"
              }}
            >
              <Image src={orpheusWave.src}
                sx={{
                  position: "absolute",
                  top: "-60px",
                  right: "-50px",
                  height: "120px"
                }}
              />
              Join Hack Club
            </Button>
          </Box>
        </Box>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          "@media only screen and (max-width: 1200px)": {
            gridTemplateColumns: "1fr"
          },
          height: "fit-content",
          paddingTop: ["1rem", "2rem"],
          bg: 'dark',
        }}>
          <Box sx={{ padding: "1rem", bg: 'dark' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                height: "100%",
                width: "100%",
                aspectRatio: {
                  _: "1",
                  tablet: "none"
                }
              }}>
              <Image sx={{
                borderRadius: "12px",
              }} src={hangOut.src} />
              <Text sx={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "white"
              }}>Hang out</Text>
            </Box>
          </Box>

          <Box sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                height: "100%",
                width: "100%",
                aspectRatio: {
                  _: "1",
                  tablet: "none"
                }
              }}>

              <Image sx={{
                borderRadius: "12px",
              }} src={makeFriends.src} />
              <Text sx={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "white"
              }}>Make friends</Text>
            </Box>
          </Box>

          <Box sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                height: "100%",
                width: "100%",
                aspectRatio: {
                  _: "1",
                  tablet: "none"
                }
              }}>
              <Image sx={{
                borderRadius: "12px",
              }} src={buildStuff.src} />
              <Text sx={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "white"
              }}>Build projects</Text>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
            paddingTop: ["0rem", "2rem"],
            gap: ["1rem", "2rem"],
            bg: 'dark',
          }}>
          <Box sx={{
            padding: ["1rem", "2rem"],
          }}>
            <Heading
              as="h2"
              sx={{
                fontSize: ['2.5rem', '3.5rem'],
                mb: '1.5rem',
                lineHeight: 'tight',
                fontWeight: 800,
                color: "primary",
                display: 'inline-block'
              }}
            >
              New? Read this first!
            </Heading>

            <GuideItem
              title="How Slack works"
              isOpen={openGuide === 0}
              onToggle={() => handleGuideToggle(0)}
            >
              <p>
                Welcome! Our Slack can be intimidating, but that&apos;s because
                there is so much happening. We care about you, and wrote this
                guide to help you.
              </p>
              <div>
                <Heading as="h3" sx={{ color: "white" }}>Channels</Heading>
                <p>
                  The best place to meet new people and have interesting
                  conversations. When you want to talk about something, you find
                  the channel with other people who want to talk about it, or if
                  that channel doesn&apos;t exist, you make your own!
                </p>
                <MakeFigure
                  imgUrl="slack-channel.gif"
                  imgDesc="A GIF showing channels in Slack"
                />
              </div>
              <div>
                <Heading as="h3" sx={{ color: "white" }}>DMs</Heading>
                <p>
                  You can also DM individual users or groups of users. This is
                  another way to connect with members of our community!
                </p>
                <MakeFigure
                  imgUrl="slack-dms.gif"
                  imgDesc="A GIF showing how the DMs section looks like in Slack"
                />
              </div>
              <div>
                <Heading as="h3" sx={{ color: "white" }}>Search</Heading>
                <p>
                  The search bar at the top of your Slack is how you find channels
                  to join, find people to DM, and look up messages. It has so many
                  hidden functions; for example you can search in a specific
                  channel or DM for a specific message on a specific day!
                </p>
                <MakeFigure
                  imgUrl="slack-search.gif"
                  imgDesc="A GIF showing the search bar in Slack"
                />
              </div>
              <div>
                <Heading as="h3" sx={{ color: "white" }}>The Sidebar</Heading>
                <p>
                  Once you join a channel or start a DM, it lives in your sidebar.
                  You can play around and reorganize it in the way that makes
                  sense to you.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  <MakeFigure
                    imgUrl="default-slack-sidebar.png"
                    imgDesc="How the Slack sidebar looks by default"
                  />
                  <MakeFigure
                    imgUrl="slack-sidebar-small-icons.png"
                    imgDesc="Slack sidebar with small icons enabled"
                  />
                  <MakeFigure
                    imgUrl="slack-sidebar-all-items-enabled.png"
                    imgDesc="Slack sidebar with all icons enabled"
                  />
                  <MakeFigure
                    imgUrl="slack-sidebar-all-items-disabled.png"
                    imgDesc="Slack sidebar with most icons disabled"
                  />
                  <MakeFigure
                    imgUrl="slack-sidebar-preferences.png"
                    imgDesc="Options for the slack sidebar"
                  />
                </div>
              </div>
            </GuideItem>

            <GuideItem
              title="Where to start"
              isOpen={openGuide === 1}
              onToggle={() => handleGuideToggle(1)}
            >
              <p>
                <strong>
                  As a new user, you&apos;re put into a special welcome channel
                  for new users
                </strong>{' '}
                who joined around the same time as you. This is overseen by our
                Gardeners - teen hackers who volunteer to help new users.
                Don&apos;t be shy: ask them a question (they don&apos;t bite.)!
                It&apos;s also a good place to make friends with other new users,
                and do fun things organized by the Special Activities Division.
              </p>
              <p>Other than your welcome channel, here are some core channels:</p>
              <p>
                <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0710J7F4U9">
                  #ysws
                </ChannelName>{' '}
                - At Hack Club, the #1 activity is making things! &quot;You Ship,
                We Ship&quot; is a challenge where you make something and you get
                a prize in return! (sounds fun right). Make what? Get what? There
                are lots of different YSWS, offering different prizes for
                different kinds of projects. Browse{' '}
                <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0710J7F4U9">
                  #ysws
                </ChannelName>{' '}
                to find a challenge and get started.
              </p>
              <p>
                Once you find a YSWS you like, join its channel. Many YSWS also
                have a help channel. Join that, too.
              </p>
              <p>Here are more key channels:</p>
              <ul>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0EA9S0A0">
                    #code
                  </ChannelName>{' '}
                  - A channel to get help with code
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C6C026NHJ">
                    #hardware
                  </ChannelName>{' '}
                  - A channel to get help with hardware projects
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C01504DCLVD">
                    #scrapbook
                  </ChannelName>{' '}
                  - A channel to show off your work in progress, and be amazed by
                  others doing the same!
                </li>
              </ul>
              <ul>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0266FRGT">
                    #announcements
                  </ChannelName>{' '}
                  - Big announcements
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C05B6DBN802">
                    #happenings
                  </ChannelName>{' '}
                  - A biweekly roundup of cool stuff happening on the Slack
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C01AS1YEM8A">
                    #neighbourhood
                  </ChannelName>{' '}
                  - A channel to help you find even more channels! Channels
                  channel channels!
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C078Q8PBD4G">
                    #library
                  </ChannelName>{' '}
                  - An app that shows the newest and most active channels. We
                  really like channels!
                </li>
                <li>
                  <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0266FRGV">
                    #lounge
                  </ChannelName>{' '}
                  - A channel for general discussion. Remember to follow the code
                  of conduct everywhere in the Slack.
                </li>
              </ul>
              <p>
                Want more information about Slack? Read the{' '}
                <Link href="https://readme.hackclub.com/slack">
                  readme
                </Link>
                !
              </p>
            </GuideItem>

            <GuideItem
              title="Being good"
              isOpen={openGuide === 3}
              onToggle={() => handleGuideToggle(3)}
            >
              <p>
                Hack Club is special, because we insist on making it that way. We
                will hold you to higher standards than most other online spaces.
              </p>
              <p>
                Our{' '}
                <Link href="https://hackclub.com/conduct/">
                  Code of Conduct
                </Link>{' '}
                is short because we expect you to read it, know it, and follow it.
              </p>
              <p>
                If you want to report misconduct, send a DM to{' '}
                <ChannelName href="https://hackclub.slack.com/app_redirect?app=A07K4T4FMAS">
                  @shroud
                </ChannelName>
                , which reports it to the Fire Department, our moderation team.
              </p>
            </GuideItem>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: ["1rem", "2rem"] }}>
            <Heading
              as="h2"
              sx={{
                fontSize: ['2.5rem', '3.5rem'],
                mb: 0,
                lineHeight: 'tight',
                fontWeight: 800,
                color: "primary",
                display: 'inline-block'
              }}
            >
              Find your regional channel
            </Heading>
            <Text sx={{ fontSize: '1.15rem', color: 'white' }}>
              Feel like sharing something random from your life? Check out{' '}
              <ChannelName href="https://hackclub.enterprise.slack.com/archives/C0AL2BXLB7V">
                #self
              </ChannelName>
            </Text>

            {
              ((geoLocationError !== null) || (geoLocationData !== null)) ? (
                <>
                  <Text sx={{ fontSize: '1.15rem', color: 'slate' }}>
                    Looks like you're from {geoLocationData.country_name}! Join your fellow hack clubbers in{' '}
                    <ChannelName href={geoLocationData.channel.url}>
                      #{geoLocationData.channel.channel}
                    </ChannelName>
                  </Text>
                </>
              ) : (
                <>
                  <Button onClick={handleGeolocate}
                    sx={{
                      borderRadius: "12px",
                      background: "#ec3750",
                      maxWidth: "400px",
                      fontSize: "1.5rem",
                      textTransform: "initial",
                      alignSelf: "center"
                    }}
                  >
                    Click me to see other Hack Clubbers from your country!
                  </Button>
                </>
              )
            }
          </Box>
        </Box>
      </Box >
      <Footer
        dark
        sx={{
          backgroundColor: 'dark',
          position: 'relative',
          overflow: 'hidden',
          textShadow: '0 1px 2px rgba(0,0,0,0.375)',
          'h2,span,p,a': { color: 'white !important' },
          '> div img': { objectPosition: ['left', 'center'] },
          svg: {
            fill: 'white',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
          }
        }}
      >
        <style>
          {`a{
          color: #338eda
        }`}
        </style>
      </Footer>
    </>
  )
}