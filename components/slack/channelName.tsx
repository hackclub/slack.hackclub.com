import { Text, Link } from 'theme-ui'

export const ChannelName = ({ children, href }) => (
    href ? <Link
        href={href}
        target="_blank"

        sx={{
            fontWeight: 500,
            color: '#1264a3',
            fontSize: '1.1rem',
            backgroundColor: '#e8f5fa',
            border: '1px solid rgba(18, 100, 163, 0.1)',
            px: '0.4em',
            py: '0.1em',
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block',
            lineHeight: '1.4',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: '#c9e5f2',
                transform: 'scale(1.05)',
                boxShadow: '0 2px 8px rgba(18, 100, 163, 0.15)'
            }
        }}>
        {children}
    </Link> :
        <Text
            sx={{
                fontWeight: 500,
                color: '#1264a3',
                fontSize: '1.1rem',
                backgroundColor: '#e8f5fa',
                border: '1px solid rgba(18, 100, 163, 0.1)',
                px: '0.4em',
                py: '0.1em',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                lineHeight: '1.4',
                transition: 'all 0.2s ease-in-out',
                ...(href && {
                    '&:hover': {
                        backgroundColor: '#c9e5f2',
                        transform: 'scale(1.05)',
                        boxShadow: '0 2px 8px rgba(18, 100, 163, 0.15)'
                    }
                })
            }}
        >
            {children}
        </Text>
)