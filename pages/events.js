/** @jsxImportSource theme-ui */
import Meta from '@hackclub/meta'
import Head from 'next/head'
import { Box, Heading, Text, Link as ThemeLink, Input } from 'theme-ui'
import { useState, useMemo, useEffect } from 'react'
import Footer from '../components/footer'
import ForceTheme from '../components/force-theme'
import Nav from '../components/nav'

const StatusBadge = ({ status, deadline }) => {
  const isEndingSoon =
    status === 'active' &&
    deadline &&
    new Date(deadline) - new Date() < 7 * 24 * 60 * 60 * 1000

  const label = isEndingSoon ? 'Ending Soon' : status
  const colors = {
    active: { bg: '#d4f5e0', color: '#1a7f3c' },
    'ending soon': { bg: '#fff3cd', color: '#856404' },
    draft: { bg: '#e2e8f0', color: '#475569' },
    ended: { bg: '#fee2e2', color: '#991b1b' }
  }
  const style = colors[label.toLowerCase()] || colors['draft']

  return (
    <Box
      sx={{
        display: 'inline-block',
        px: 2,
        py: '2px',
        borderRadius: '999px',
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        bg: style.bg,
        color: style.color
      }}
    >
      {label}
    </Box>
  )
}

const EventCard = ({ program }) => (
  <Box
    as="a"
    href={program.website || program.slack || 'https://ysws.hackclub.com'}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 3,
      bg: 'white',
      borderRadius: '12px',
      border: '1px solid',
      borderColor: 'smoke',
      borderTop: '4px solid',
      borderTopColor: 'primary',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(236, 55, 80, 0.15)',
        borderTopColor: 'orange'
      }
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
      <Text sx={{ fontWeight: 800, fontSize: '1rem', color: 'primary', lineHeight: 1.3 }}>
        {program.name}
      </Text>
      <StatusBadge status={program.status} deadline={program.deadline} />
    </Box>
    <Text sx={{ fontSize: '0.85rem', color: 'slate', lineHeight: 1.5, flexGrow: 1 }}>
      {program.description}
    </Text>
    {program.slackChannel && (
      <Text sx={{ fontSize: '0.75rem', color: 'muted', fontWeight: 600, fontFamily: 'monospace' }}>
        {program.slackChannel}
      </Text>
    )}
    {program.deadline && program.status === 'active' && (
      <Text sx={{ fontSize: '0.72rem', color: 'muted', fontWeight: 500 }}>
        Ends {new Date(program.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </Text>
    )}
  </Box>
)

const FilterButton = ({ active, onClick, children }) => (
  <Box
    as="button"
    type="button"
    onClick={onClick}
    aria-pressed={active}
    sx={{
      px: 4,
      py: 2,
      borderRadius: '999px',
      border: '2px solid',
      borderColor: active ? 'primary' : 'smoke',
      bg: active ? 'primary' : 'white',
      color: active ? 'white' : 'slate',
      fontWeight: 700,
      fontSize: '0.9rem',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 0.15s ease',
      '&:hover': {
        borderColor: 'primary',
        color: active ? 'white' : 'primary'
      }
    }}
  >
    {children}
  </Box>
)

const EventsPage = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('active')
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/ysws')
      .then((r) => r.json())
      .then((data) => {
        const all = [
          ...(data.limitedTime || []),
          ...(data.indefinite || []),
          ...(data.recentlyEnded || []),
          ...(data.drafts || [])
        ]
        setPrograms(all)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const counts = useMemo(() => ({
    active: programs.filter((p) => p.status === 'active').length,
    ended: programs.filter((p) => p.status === 'ended').length,
    draft: programs.filter((p) => p.status === 'draft').length,
    all: programs.length
  }), [programs])

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const matchesSearch =
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.description?.toLowerCase().includes(search.toLowerCase()) ||
        p.slackChannel?.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === 'all' || p.status === filter
      return matchesSearch && matchesFilter
    })
  }, [programs, search, filter])

  return (
    <Box
      sx={{
        backgroundImage: 'url(/pattern.svg)',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        backgroundColor: 'snow'
      }}
    >
      <Meta
        as={Head}
        name="YSWS Programs – Hack Club Slack"
        description="Browse all Hack Club You Ship We Ship programs. Build something amazing and get rewarded!"
      />
      <ForceTheme theme="light" />
      <Nav />

      {/* Hero */}
      <Box
        sx={{
          backgroundImage: (t) => t.util.gx('orange', 'red'),
          pt: ['7rem', '8rem'],
          pb: ['3rem', '4rem'],
          px: ['1.5rem', '3rem'],
          textAlign: 'center'
        }}
      >
        <Heading
          as="h1"
          sx={{
            fontSize: ['2.5rem', '4rem'],
            color: 'white',
            fontWeight: 800,
            mb: 2,
            textShadow: '0 2px 12px rgba(0,0,0,0.2)'
          }}
        >
          You Ship, We Ship
        </Heading>
        <Text sx={{ color: 'white', fontSize: ['1rem', '1.25rem'], opacity: 0.9, mb: 3 }}>
          Build something awesome. Hack Club ships you something epic in return.
        </Text>
        {!loading && !error && (
          <Text sx={{ color: 'white', fontSize: '0.95rem', opacity: 0.75 }}>
            {counts.active} active program{counts.active !== 1 ? 's' : ''} · {counts.all} total
          </Text>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: ['1.5rem', '3rem'], py: ['1.5rem', '2rem'] }}>

        {/* Search + Filter */}
        <Box
          sx={{
            bg: 'white',
            borderRadius: '16px',
            p: ['1.25rem', '1.75rem'],
            boxShadow: 'card',
            border: '1px solid',
            borderColor: 'smoke',
            mb: ['1.5rem', '2rem']
          }}
        >
          <Input
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              mb: 3,
              fontSize: '1rem',
              borderRadius: '8px',
              border: '2px solid',
              borderColor: 'smoke',
              px: 3,
              py: 2,
              fontFamily: 'inherit',
              '&:focus': { borderColor: 'primary', outline: 'none' }
            }}
          />
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <FilterButton active={filter === 'active'} onClick={() => setFilter('active')}>
              Active ({counts.active})
            </FilterButton>
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All ({counts.all})
            </FilterButton>
            <FilterButton active={filter === 'ended'} onClick={() => setFilter('ended')}>
              Ended ({counts.ended})
            </FilterButton>
            <FilterButton active={filter === 'draft'} onClick={() => setFilter('draft')}>
              Draft ({counts.draft})
            </FilterButton>
          </Box>
        </Box>

        {loading && (
          <Box sx={{ textAlign: 'center', py: '4rem', color: 'muted' }}>
            <Text sx={{ fontSize: '1rem', fontWeight: 600 }}>Loading programs...</Text>
          </Box>
        )}

        {error && (
          <Box sx={{ textAlign: 'center', py: '4rem', color: 'muted' }}>
            <Text sx={{ fontSize: '1rem', fontWeight: 600 }}>
              Couldn&apos;t load programs. Try again later.
            </Text>
          </Box>
        )}

        {!loading && !error && (
          <>
            <Text sx={{ color: 'muted', fontSize: '0.9rem', mb: 3, fontWeight: 500 }}>
              {filtered.length === 0
                ? 'No programs found'
                : `Showing ${filtered.length} program${filtered.length !== 1 ? 's' : ''}`}
            </Text>

            {filtered.length > 0 ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
                  gap: ['0.75rem', '1rem']
                }}
              >
                {filtered.map((program, i) => (
                  <EventCard key={program.name + i} program={program} />
                ))}
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center', py: '4rem', color: 'muted' }}>
                <Text sx={{ fontSize: '1.15rem', fontWeight: 600 }}>
                  No programs match &quot;{search}&quot;
                </Text>
                <Text sx={{ fontSize: '0.95rem', mt: 1 }}>Try a different search term</Text>
              </Box>
            )}
          </>
        )}

        <Box sx={{ textAlign: 'center', mt: ['3rem', '4rem'], mb: '2rem', display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
          <ThemeLink
            href="https://ysws.hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            View full YSWS catalog →
          </ThemeLink>
          <ThemeLink
            href="/"
            sx={{ color: 'primary', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Back to Hack Club Slack
          </ThemeLink>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default EventsPage