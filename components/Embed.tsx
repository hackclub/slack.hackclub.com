// Stolen from hackclub/site v4
"use client";

import { useCallback, useEffect, useState } from "react";
import how2useslack from "../public/slides/1/how2useslack.png"

export function Embed({ link }: { link: string }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const open = useCallback(() => {
        setIsMounted(true);
        window.requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const requestClose = useCallback(() => {
        setIsVisible(false);
    }, []);

    useEffect(() => {
        if (!isMounted || isVisible) return;

        const timeout = window.setTimeout(() => {
            setIsMounted(false);
        }, 180);

        return () => window.clearTimeout(timeout);
    }, [isMounted, isVisible]);

    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) requestClose();
        },
        [requestClose],
    );

    return (
        <>
            <button
                onClick={open}
                aria-label={`Play 'How to use Slack'`}
                style={{
                    position: "relative",
                    width: "100%",
                    border: "none",
                    height: "100%",
                    padding: 0,
                    cursor: "pointer",
                    background: "transparent",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={how2useslack.src}
                    alt="How to use Slack image"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "12px", border: "2px solid white" }}
                />
                <svg
                    viewBox="0 0 68 48"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 68,
                        height: 48,
                        opacity: 0.8,
                    }}
                >
                    <path
                        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                        fill="red"
                    />
                    <path d="M45 24L27 14v20" fill="#fff" />
                </svg>
            </button>

            {isMounted && (
                <div
                    onClick={handleBackdropClick}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.85)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 180ms ease-out",
                    }}
                >
                    <div
                        style={{
                            width: "min(90vw, 1280px)",
                            aspectRatio: "16 / 9",
                            position: "relative",
                        }}
                    >
                        <button
                            onClick={requestClose}
                            aria-label="Close video"
                            style={{
                                position: "absolute",
                                top: -40,
                                right: 0,
                                background: "none",
                                border: "none",
                                color: "#fff",
                                fontSize: 32,
                                cursor: "pointer",
                                lineHeight: 1,
                            }}
                        >
                            ✕
                        </button>
                        <iframe
                            src={link}
                            title="How to use Slack"
                            aria-label="How to use Slack"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                borderRadius: 12,
                                background: "#000",
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
