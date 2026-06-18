import { Button, Text } from 'theme-ui'
import { useState } from "react"

export default function NextButton({ slide, email, text }) {
    const [pressed, setPressed] = useState(false)

    return (
        <Button
            variant="ctaLg"
            as="a"
            {...({ href: `/slides/${slide}${(email !== null ? "?email=" + email : "")}` } as any)}

            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}

            draggable={false}

            sx={{
                position: "relative",
                transformOrigin: 'center center',
                whiteSpace: 'nowrap',
                borderRadius: "12px",
                background: "#ec3750",
                transition: "none !important",

                textTransform: "initial",
                width: "fit-content",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                alignSelf: "center",
                minWidth: "600px",

                boxShadow: pressed ? "none" : "0 4px 0 #871026 !important",
                transform: pressed ? "translateY(4px) !important" : "none",

                "&:focus": {
                    transform: "none",
                },

                "&:hover": {
                    transform: "none",
                },
            }}
        >
            <Text sx={{
                fontSize: "2rem"
            }}>{text}</Text>
        </Button >
    )
}