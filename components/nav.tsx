import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Box, Container, Flex, Link } from 'theme-ui'
import theme from '../lib/theme'
import Icon from './icon'
import Flag from './flag'
import ScrollLock from 'react-scrolllock'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'

const desktopAbout = [
  { label: 'Philosophy', href: 'https://hackclub.com/philosophy' },
  { label: 'Philanthropy', href: 'https://hackclub.com/philanthropy' },
  { label: 'Team & Board', href: 'https://hackclub.com/team' },
  { label: 'Jobs', href: 'https://hackclub.com/jobs' },
  { label: 'Branding Guide', href: 'https://hackclub.com/brand' },
  { label: 'Press Inquiries', href: 'https://hackclub.com/press' }
]

const desktopResources = [
  { label: 'HCB Fiscal Sponsorship', href: 'https://hackclub.com/fiscal-sponsorship' },
  { label: 'Hacker Toolbox', href: 'https://toolbox.hackclub.com' },
  { label: 'Code of Conduct', href: 'https://hackclub.com/conduct' },
  { label: 'Privacy & Terms', href: 'https://hackclub.com/privacy-and-terms' },
  { label: 'Safety', href: 'https://hackclub.com/safety' }
]

const desktopLinks = [
  { label: 'About', dropdown: desktopAbout },
  { label: 'Programs', href: 'https://hackclub.com/programs' },
  { label: 'Clubs', href: 'https://hackclub.com/clubs' },
  { label: 'Resources', dropdown: desktopResources },
  { label: 'Donate', href: 'https://hackclub.com/philanthropy' }
]

const mobileLinks = [
  { label: 'Clubs', href: 'https://hackclub.com/clubs' },
  { label: 'Fiscal Sponsorship', href: 'https://hackclub.com/hcb' },
  { label: 'Hackathons', href: 'https://hackclub.com/hackathons' },
  { label: 'Join', href: '/' },
  { label: 'Toolbox', href: 'https://toolbox.hackclub.com/' },
  { label: 'Donors', href: 'https://hackclub.com/philanthropy' }
]

const rgbaBgColor = (props, opacity) =>
  `rgba(
    ${props.bgColor[0]},
    ${props.bgColor[1]},
    ${props.bgColor[2]},
    ${opacity}
  )`

// const bg = (props) =>
//   props.dark
//     ? css`
//         -webkit-backdrop-filter: saturate(90%) blur(20px);
//         backdrop-filter: saturate(90%) blur(20px);
//       `
//     : css`
//         -webkit-backdrop-filter: saturate(180%) blur(20px);
//         backdrop-filter: saturate(180%) blur(20px);
//       `
const fixed = props =>
  (props.scrolled || props.toggled || props.fixed) &&
  css`
    background-color: rgba(22, 18, 27, 0.86);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: ${props.transparent
      ? 'transparent'
      : rgbaBgColor(props, 0.75)};
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
      /* {bg}; to support dark mode later */
    }
  `

const Root = styled(Box, {
  shouldForwardProp: prop =>
    !['bgColor', 'scrolled', 'toggled', 'fixed', 'dark'].includes(prop)
})`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  ${fixed};
  @media print {
    display: none;
  }
`

const RootAny = Root as any

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`

const hoverColor = name =>
  ({
    white: 'smoke',
    smoke: 'muted',
    muted: 'slate',
    slate: 'black',
    black: 'slate',
    primary: 'error'
  })[name] || 'black'

const slide = keyframes({
  from: { transform: 'translateY(-25%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

const layout = props =>
  props.isMobile
    ? css`
        display: ${props.toggled ? 'flex' : 'none'};
        flex-direction: column;
        overflow-y: auto;
        text-align: left;
        height: 100vh;
        @media (prefers-reduced-motion: no-preference) {
          animation: ${slide} 0.25s ease-in;
        }
        a {
          color: ${theme.colors[props.dark ? 'white' : 'black']} !important;
          margin: 0 auto;
          height: 64px;
          font-weight: bold;
          font-size: ${theme.fontSizes[2]}px;
          width: 100vw;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(48, 48, 48, 0.125);
          }
          @media screen and (max-width: 22em) {
            max-width: 16rem;
          }
        }
      `
    : css`
        @media (min-width: 56em) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${theme.space[3]}px;
        }
        a {
          font-size: 16px;
          &:hover {
            text-decoration: underline;
            color: ${theme.colors[hoverColor(props.color)]};
          }
        }
      `
const NavBar = styled(Box, {
  shouldForwardProp: prop => !['isMobile', 'toggled'].includes(prop)
})`
  display: none;
  ${layout};
  a {
    margin-left: ${theme.space[1]}px;
    padding: ${theme.space[3]}px;
    text-decoration: none;
    @media (min-width: 56em) {
      color: #e0e6ed;
    }
  }
`

const Navigation = props => (
  // REMINDER: This should be no more than 7 links :)
  <NavBar role="navigation" {...props}>
    <Link as={NextLink} href="https://hackclub.com/clubs">
      Clubs
    </Link>
    <Link as={NextLink} href="https://hackclub.com/fiscal-sponsorship">
      Fiscal&nbsp;Sponsorship
    </Link>
    <Link as={NextLink} href="https://hackclub.com/hackathons">
      Hackathons
    </Link>
    <Link href="https://toolbox.hackclub.com/">Toolbox</Link>
    <Link as={NextLink} href="https://hackclub.com/philanthropy">
      Donors
    </Link>
  </NavBar>
)

const ToggleContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  @media (min-width: 56em) {
    display: none;
  }
`

type HeaderProps = {
  unfixed?: boolean
  color?: string
  fixed?: boolean
  dark?: boolean
  bgColor?: string | number[]
}

export default function Header({
  unfixed = false,
  color = 'white',
  bgColor,
  dark = false,
  fixed = false,
  ...props
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const searchParams = useSearchParams()
  const isKawaii = searchParams.get('uwu') != null

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY >= 16)
    setOpenDd(null)
  }, [])
  const handleToggleMenu = () => {
    setToggled(t => !t)
  }
  const clearDropdownTimer = () => {
    if (closeDropdownTimer.current) {
      window.clearTimeout(closeDropdownTimer.current)
      closeDropdownTimer.current = null
    }
  }
  const enterDropdown = (label) => {
    clearDropdownTimer()
    setOpenDd(label)
  }
  const leaveDropdown = () => {
    clearDropdownTimer()
    closeDropdownTimer.current = window.setTimeout(() => {
      setOpenDd(null)
    }, 180)
  }
  const closeDropdown = () => {
    clearDropdownTimer()
    setOpenDd(null)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    if (!unfixed) {
      window.addEventListener('scroll', onScroll)
    }

    const mobileQuery = window.matchMedia('(max-width: 48em)')
    const handleMobileChange = (e) => {
      setMobile(e.matches)
      setToggled(false)
    }
    mobileQuery.addEventListener('change', handleMobileChange)
    setMobile(mobileQuery.matches)
    document.addEventListener('mousedown', handleOutsideClick)


    return () => {
      window.removeEventListener('scroll', onScroll)
      mobileQuery.removeEventListener('change', handleMobileChange)
      document.removeEventListener('mousedown', handleOutsideClick)
      clearDropdownTimer()
    }
  }, [unfixed])

  const baseColor = dark
    ? color || 'white'
    : color === 'white' && scrolled
      ? 'black'
      : color
  const toggleColor = dark
    ? color || 'snow'
    : toggled || (color === 'white' && scrolled)
      ? color || 'snow'
      : color

  return (
    <RootAny
      {...props}
      fixed={fixed}
      scrolled={scrolled}
      toggled={toggled}
      dark={dark}
      bgColor={bgColor || (dark ? [32, 34, 36] : [32, 34, 36])}
      as="header"
      sx={{
        '@media (min-width: 56em)': {
          backgroundColor: 'rgba(22, 18, 27, 0.86)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)'
        }
      }}
    >
      <Content>
        <Flag scrolled={scrolled || fixed} uwu={isKawaii} />
        <Navigation
          isMobile={false}
          toggled={toggled}
          dark={dark}
        />
        <ToggleContainer color={toggleColor} onClick={handleToggleMenu}>
          <Icon glyph={toggled ? 'view-close' : 'menu'} />
        </ToggleContainer>
      </Content>
      <Navigation
        isMobile
        dark={dark}
      />
      {toggled && <ScrollLock />}
    </RootAny>
  )
}
