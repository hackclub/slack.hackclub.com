// Stolen from hackclub/site v4
"use client";

import { useCallback, useEffect, useState } from "react";

export function Embed({ link, isOpen, onClose }: { link: string, isOpen: boolean, onClose: () => void }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            const frame = window.requestAnimationFrame(() => setIsVisible(true));
        }
    }, [isOpen])

    const requestClose = useCallback(() => {
        setIsVisible(false);
        onClose();
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
