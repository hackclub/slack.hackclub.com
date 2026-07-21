"use client";

import { Button, Text } from 'theme-ui'
import Link from 'next/link'
import { usePathname } from "next/navigation"

export default function NextButton({ email }) {
    const pathname = usePathname()
    const slide = parseInt(pathname.split("/").at(-1))

    console.log(pathname)
    if (!pathname.includes("slides")) {
        return <></>
    }

    return (
        <>
            {(slide !== 4) ? (<Link
                href={`/slides/${slide + 1}${(email !== null ? "?email=" + email : "")}`}

                style={{
                    position: "fixed",
                    transformOrigin: 'center center',
                    whiteSpace: 'nowrap',
                    borderRadius: "12px",
                    background: "var(--color-red)",
                    transition: "none !important",
                    width: "fit-content",

                    alignItems: "center",

                    bottom: "50%",
                    right: "10px",

                    textDecoration: "none",
                    padding: "6px 12px",

                    alignSelf: "center",

                    textWrap: "balance",
                    zIndex: 9999,
                    color: "var(--foreground)",

                    transform: "translateY(-50%)"
                }}
            >
                <Text sx={{
                    display: "flex",
                    fontSize: "clamp(16px, 5vw, 36px)",
                    alignItems: "center",
                    gap: "4px"
                }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                    fill="currentColor" viewBox="0 0 24 24" >
                        { /*<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->*/}
                        <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
                    </svg></Text>
            </Link>) : undefined
            }
        </>
    )
}