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
                paddingRight: "16px",
                paddingLeft: "16px",
                alignSelf: "center",

                boxShadow: pressed ? "none" : "0 4px 0 #871026 !important",
                transform: pressed ? "translateY(4px) !important" : "none",

                marginTop: "2rem", //I don't like using margin but I'm lazy
                textWrap: "balance",
                minWidth: "30vw",

                "&:focus": {
                    transform: "none",
                },

                "&:hover": {
                    transform: "none",
                },
            }}
        >
            <Text sx={{
                fontSize: "clamp(16px, 5vw, 36px)"
            }}>{text}</Text>
        </Button >
    )
}