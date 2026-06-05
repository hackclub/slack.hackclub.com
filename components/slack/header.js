/** @jsxImportSource theme-ui */
import React, { useState, useRef, useEffect } from 'react'
import { Box, Card, Grid, Heading, Text } from 'theme-ui'
import { keyframes } from '@emotion/react'
import { getLiveCount, formatted as defaultFormatted } from '../../lib/members'
import usePrefersMotion from '../../lib/use-prefers-motion'
import useHasMounted from '../../lib/use-has-mounted'

const floatWorkspace = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-3deg); }
  50% { transform: translate3d(0, -14px, 0) rotate(-2deg); }
`

const floatThread = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(4deg); }
  50% { transform: translate3d(0, 12px, 0) rotate(3deg); }
`

const slideMessage = keyframes`
  0%, 100% { transform: translateX(0); opacity: 0.72; }
  50% { transform: translateX(10px); opacity: 1; }
`

const ChannelPill = ({ children, sx }) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      color: 'rgba(255,255,255,0.92)',
      bg: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.24)',
      borderRadius: '10px',
      px: 3,
      py: 2,
      fontSize: [1, 2],
      fontWeight: 700,
      lineHeight: 1,
      boxShadow: '0 12px 36px rgba(61, 37, 44, 0.14)',
      backdropFilter: 'blur(10px)',
      ...sx
    }}
  >
    <Text aria-hidden="true" sx={{ opacity: 0.72 }}>
      #
    </Text>
    {children}
  </Box>
)

const MessageLine = ({ width = '70%', color = 'rgba(255,255,255,0.72)' }) => (
  <Box
    sx={{
      height: '8px',
      width,
      borderRadius: '999px',
      bg: color
    }}
  />
)

const HeroGraphic = ({ prefersMotion }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}
  >
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(115deg, rgba(74,21,75,0.2) 0%, rgba(255,255,255,0) 42%), radial-gradient(ellipse at 80% 10%, rgba(54,197,240,0.22), transparent 34%), radial-gradient(ellipse at 16% 82%, rgba(46,182,125,0.24), transparent 30%)'
      }}
    />

    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        top: ['12%', '16%'],
        left: ['-42px', '5%'],
        width: ['180px', '260px'],
        transform: 'rotate(-3deg)',
        animation: prefersMotion
          ? `${floatWorkspace} 8s ease-in-out infinite`
          : undefined,
        display: ['none', 'block']
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '54px 1fr',
          minHeight: '168px',
          borderRadius: '18px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.26)',
          bg: 'rgba(74,21,75,0.54)',
          boxShadow: '0 28px 72px rgba(61, 37, 44, 0.3)',
          backdropFilter: 'blur(14px)'
        }}
      >
        <Box
          sx={{
            bg: 'rgba(74,21,75,0.68)',
            display: 'grid',
            alignContent: 'start',
            gap: 2,
            p: 3
          }}
        >
          {['#36c5f0', '#2eb67d', '#ecb22e', '#e01e5a'].map((color) => (
            <Box
              key={color}
              sx={{
                width: '18px',
                height: '18px',
                borderRadius: '6px',
                bg: color,
                boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.25)'
              }}
            />
          ))}
        </Box>
        <Box sx={{ p: 3, display: 'grid', gap: 3, alignContent: 'center' }}>
          <MessageLine width="46%" color="rgba(255,255,255,0.88)" />
          <MessageLine width="78%" />
          <MessageLine width="64%" />
          <Box
            sx={{
              height: '28px',
              width: '74%',
              borderRadius: '9px',
              bg: 'rgba(255,255,255,0.16)',
              border: '1px solid rgba(255,255,255,0.18)'
            }}
          />
        </Box>
      </Box>
    </Box>

    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        right: ['-72px', '5%'],
        top: ['14%', '18%'],
        width: ['210px', '300px'],
        transform: 'rotate(4deg)',
        animation: prefersMotion
          ? `${floatThread} 9s ease-in-out infinite`
          : undefined
      }}
    >
      <Box
        sx={{
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.26)',
          bg: 'rgba(255,255,255,0.18)',
          boxShadow: '0 28px 72px rgba(61, 37, 44, 0.24)',
          backdropFilter: 'blur(14px)',
          p: 3,
          display: 'grid',
          gap: 3
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ width: 22, height: 22, borderRadius: '7px', bg: '#36c5f0' }} />
          <MessageLine width="42%" color="rgba(255,255,255,0.88)" />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            animation: prefersMotion
              ? `${slideMessage} 6s ease-in-out infinite`
              : undefined
          }}
        >
          <MessageLine width="86%" />
          <MessageLine width="68%" />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ width: 22, height: 22, borderRadius: '7px', bg: '#2eb67d' }} />
          <MessageLine width="58%" color="rgba(255,255,255,0.8)" />
        </Box>
      </Box>
    </Box>

    <ChannelPill sx={{ position: 'absolute', bottom: ['20%', '18%'], left: ['8%', '12%'] }}>
      code
    </ChannelPill>
    <ChannelPill sx={{ position: 'absolute', bottom: ['12%', '26%'], right: ['8%', '18%'] }}>
      scrapbook
    </ChannelPill>
    <ChannelPill sx={{ position: 'absolute', top: ['10%', '12%'], left: ['10%', '38%'] }}>
      lounge
    </ChannelPill>
  </Box>
)

const MemberBadge = () => {
  const [count, setCount] = useState(defaultFormatted)

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    getLiveCount(controller.signal)
      .then(data => setCount(data.formatted))
      .catch(() => {})
      .finally(() => clearTimeout(timeout))
    return () => {
      controller.abort()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Box sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      bg: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '999px',
      px: 3, py: 1, mb: 3,
      backdropFilter: 'blur(8px)'
    }}>
      <Box sx={{
        width: '8px', height: '8px',
        borderRadius: '50%', bg: '#2eb67d',
        boxShadow: '0 0 6px #2eb67d',
        animation: 'pulse 2s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 }
        }
      }} />
      <Text sx={{ color: 'white', fontSize: 1, fontWeight: 600, letterSpacing: '0.03em' }}>
        {count} hackers online
      </Text>
    </Box>
  )
}

const Content = ({
  onJoinClick,
  headingRef,
  btnRef,
  onBtnMouseMove,
  onBtnMouseLeave,
  prefersMotion
}) => (
  <Grid
    gap={3}
    pt={[5, '100px']}
    pb={[3, 4]}
    sx={{
      backgroundImage:
        'radial-gradient(ellipse farthest-corner at top left, #ff8c37, #ec3750)',
      position: 'relative'
    }}
  >
    <HeroGraphic prefersMotion={prefersMotion} />
    <Box
      ref={headingRef}
      sx={{
        position: 'relative',
        zIndex: 1,
        textShadow: 'text',
        textAlign: ['center', 'center'],
        willChange: 'transform'
      }}
    >
      <MemberBadge />
      <Heading
        as="h1"
        variant="title"
        sx={{ color: 'white', fontSize: [5, 6, 7], lineHeight: 'limit', mb: [2, 3] }}
      >
        Hack Club Slack
      </Heading>
    </Box>
    <Box sx={{ zIndex: 5, display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Card
        sx={{
          variant: 'cards.translucent',
          maxWidth: (t) => `calc(${t.sizes.narrow} * 1.2)`,
          mx: 'auto',
          textAlign: 'center'
        }}
      >
        <Text as="p" sx={{ fontSize: [2, 3], mb: 3 }}>
          Hack Clubbers hang out on our Slack.
          <br />
          Join up to make friends, find projects, and have fun.
        </Text>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Text
            ref={btnRef}
            as="button"
            onClick={onJoinClick}
            onMouseMove={onBtnMouseMove}
            onMouseLeave={onBtnMouseLeave}
            sx={{
              bg: 'red',
              backgroundImage:
                'radial-gradient(ellipse farthest-corner at top left, #ff8c37, #ec3750)',
              color: 'white',
              fontSize: [2, 3],
              px: 5, py: 3,
              borderRadius: 'extra',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid white',
              cursor: 'pointer',
              fontFamily: 'inherit',
              willChange: 'transform',
              ':hover': {
                boxShadow: '0 0 0 2px white',
                backgroundImage:
                  'radial-gradient(ellipse farthest-corner at bottom right, #ff8c37, #ec3750)'
              }
            }}
          >
            Join Hack Club
          </Text>
        </Box>
      </Card>
    </Box>
  </Grid>
)

const Static = ({
  img = 'https://cloud-r4rrjh2z8-hack-club-bot.vercel.app/02020-07-25_a1tcva4ch6mmr6j2cfmcb4e9ync3yhar.png',
  onJoinClick
}) => (
  <Box
    as="section"
    id="slack"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover'
    }}
  >
    <Content onJoinClick={onJoinClick} prefersMotion={false} />
  </Box>
)

const Slack = ({ onJoinClick }) => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  const headingRef = useRef(null)
  const btnRef = useRef(null)
  const scrollRafRef = useRef(null)
  const scrollYRef = useRef(0)
  const btnRafRef = useRef(null)
  const btnPendingRef = useRef(null)

  useEffect(() => {
    if (!prefersMotion) return
    const onScroll = () => {
      scrollYRef.current = window.scrollY
      if (!scrollRafRef.current) {
        scrollRafRef.current = requestAnimationFrame(() => {
          const y = scrollYRef.current
          if (headingRef.current)
            headingRef.current.style.transform = `translateY(${y * -0.08}px)`
          scrollRafRef.current = null
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [prefersMotion])

  const handleBtnMouseMove = prefersMotion
    ? (e) => {
        const el = btnRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dx = Math.max(-8, Math.min(8, (e.clientX - (rect.left + rect.width / 2)) * 0.4))
        const dy = Math.max(-8, Math.min(8, (e.clientY - (rect.top + rect.height / 2)) * 0.4))
        btnPendingRef.current = { dx, dy }
        if (!btnRafRef.current) {
          btnRafRef.current = requestAnimationFrame(() => {
            const pending = btnPendingRef.current
            const btn = btnRef.current
            if (btn && pending) {
              btn.style.transition = 'transform 0.1s ease-out, box-shadow 0.125s ease-in-out'
              btn.style.transform = `translate(${pending.dx}px, ${pending.dy}px) scale(1.05)`
            }
            btnRafRef.current = null
          })
        }
      }
    : undefined

  const handleBtnMouseLeave = prefersMotion
    ? () => {
        const el = btnRef.current
        if (!el) return
        el.style.transition = 'transform 0.4s ease, box-shadow 0.125s ease-in-out'
        el.style.transform = ''
      }
    : undefined

  if (hasMounted && prefersMotion) {
    return (
      <Box
        as="section"
        id="slack"
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Content
          onJoinClick={onJoinClick}
          headingRef={headingRef}
          btnRef={btnRef}
          onBtnMouseMove={handleBtnMouseMove}
          onBtnMouseLeave={handleBtnMouseLeave}
          prefersMotion={prefersMotion}
        />
      </Box>
    )
  } else {
    return <Static onJoinClick={onJoinClick} />
  }
}

export default Slack
