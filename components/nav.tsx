"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

type Item = { label: string; href: string };

function NL({
  href,
  children,
  ...p
}: { href: string; children: React.ReactNode } & Record<string, unknown>) {
  return href.startsWith("/") ? (
    <Link href={href} {...p}>
      {children}
    </Link>
  ) : (
    <a href={href} {...p}>
      {children}
    </a>
  );
}

function DropdownMenu({
  items,
  menuId,
  txt,
}: {
  items: Item[];
  menuId: string;
  txt: string;
}) {
  return (
    <>
      <div
        id={menuId}
        role="menu"
        className="dd-root"
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translate3d(-50%, 0, 0)",
          background: "var(--surface)",
          borderRadius: 12,
          boxShadow: "var(--shadow-dd)",
          padding: 8,
          minWidth: 220,
          zIndex: 100,
          pointerEvents: "auto",
          opacity: 1,
          willChange: "transform, opacity",
        }}
      >
        {items.map((i) => (
          <NL
            key={i.label}
            href={i.href}
            role="menuitem"
            className="dd-link"
            style={{
              display: "block",
              padding: "10px 20px",
              fontFamily: "var(--font-phantom)",
              fontSize: 18,
              color: txt,
              textDecoration: "none",
              whiteSpace: "nowrap",
              borderRadius: 8,
              backgroundColor: "transparent",
              transition:
                "background-color 200ms ease, color 200ms ease, padding-left 200ms ease, box-shadow 200ms ease",
            }}
          >
            {i.label}
          </NL>
        ))}
      </div>
      <style>{`
        @keyframes ddIn {
          from { opacity: 0; transform: translate3d(-50%, 6px, 0); }
          to   { opacity: 1; transform: translate3d(-50%, 0, 0); }
        }
        .dd-root { animation: ddIn 180ms ${EASE}; }
        .dd-link:hover {
          background-color: var(--surface-hover) !important;
          color: #ec3750 !important;
          padding-left: 26px !important;
          box-shadow: 0 4px 12px rgba(236, 55, 80, 0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .dd-root { animation: none; }
          .dd-link { transition: none !important; }
        }
      `}</style>
    </>
  );
}

function useMediaQuery(q: string) {
  const [m, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(q);
    set(mq.matches);
    const h = (e: MediaQueryListEvent) => set(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [q]);
  return m;
}

export function Navbar({ invertColors = false }: { invertColors?: boolean }) {
  const [menuState, setMenuState] = useState<
    "closed" | "opening" | "open" | "closing"
  >("closed");
  const [openDd, setOpenDd] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openFrame = useRef<number | null>(null);
  const path = usePathname();
  const desktop = useMediaQuery("(min-width: 1024px)");

  const about = [
    { label: "Philosophy", href: "https://hackclub.com/philosophy" },
    { label: "Philanthropy", href: "https://hackclub.com/philanthropy" },
    { label: "Team & Board", href: "https://hackclub.com/team" },
    { label: "Jobs", href: "https://hackclub.com/jobs" },
    { label: "Branding Guide", href: "https://hackclub.com/brand" },
    { label: "Press Inquiries", href: "https://hackclub.com/press" },
  ];
  const resources = [
    { label: "HCB", href: "https://hackclub.com/fiscal-sponsorship" },
    { label: "Toolbox", href: "https://toolbox.hackclub.com" },
    { label: "Code of Conduct", href: "https://hackclub.com/conduct" },
    { label: "Privacy & Terms", href: "https://hackclub.com/privacy-and-terms" },
    { label: "Safety", href: "https://hackclub.com/safety" },
  ];
  const links: Array<{ label: string; href?: string; dropdown?: Item[] }> = [
    { label: "About", dropdown: about },
    { label: "Programs", href: "https://hackclub.com/programs" },
    { label: "Clubs", href: "https://hackclub.com/clubs" },
    { label: "Hackathons", href: "https://hackathons.hackclub.com" },
    { label: "Resources", dropdown: resources },
    { label: "Donate", href: "https://hackclub.com/philanthropy" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const txt = "var(--foreground)";
  const muted = "rgba(255,255,255,0.7)";
  const mobBg = "var(--nav-bg)";
  const mobBorder = "1px solid var(--border)";

  const enter = (l: string) => {
    if (timer.current) clearTimeout(timer.current);
    setOpenDd(l);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpenDd(null), 120);
  };
  const active = (h?: string) => (h ? h !== "#" && path.startsWith(h) : false);
  const mounted = menuState !== "closed";
  const isOpen = menuState === "opening" || menuState === "open";

  const clearHandles = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openFrame.current) cancelAnimationFrame(openFrame.current);
    closeTimer.current = null;
    openFrame.current = null;
  }, []);

  const openMenu = useCallback(() => {
    clearHandles();
    if (menuState === "open" || menuState === "opening") return;
    setMenuState("opening");
    openFrame.current = requestAnimationFrame(() => {
      setMenuState("open");
      openFrame.current = null;
    });
  }, [clearHandles, menuState]);

  const closeMenu = useCallback(() => {
    clearHandles();
    if (menuState === "closed" || menuState === "closing") return;
    setMenuState("closing");
    closeTimer.current = setTimeout(() => {
      setMenuState("closed");
      closeTimer.current = null;
    }, 240);
  }, [clearHandles, menuState]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [closeMenu, mounted]);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
      clearHandles();
    },
    [clearHandles]
  );

  const ls = (a: boolean): React.CSSProperties => ({
    fontFamily: "var(--font-phantom)",
    fontWeight: a ? "bold" : "normal",
    fontSize: 20,
    color: txt,
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: 1,
    transition: "opacity 0.15s",
  });
  const hIn = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.opacity = "0.6";
  };
  const hOut = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.opacity = "1";
  };

  const navBg = !desktop
    ? scrolled
      ? "var(--nav-bg)"
      : "transparent"
    : undefined;
  const navBd = !desktop
    ? scrolled
      ? "1px solid var(--border)"
      : "1px solid transparent"
    : undefined;
  const navBf = !desktop
    ? scrolled
      ? "blur(16px)"
      : "none"
    : undefined;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 32,
          paddingRight: "clamp(16px, 4vw, 55px)",
          height: 80,
          zIndex: 1100,
          background: navBg,
          borderBottom: navBd,
          backdropFilter: navBf,
          WebkitBackdropFilter: navBf,
          transition:
            "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/hackClubLogoRed.svg"
            alt="Hack Club"
            height={48}
            style={{
              height: 48,
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        {desktop && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {links.map(({ label, href, dropdown }) => {
              const a = active(href);
              if (dropdown) {
                const id = `dropdown-${label
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <div
                    key={label}
                    style={{ position: "relative" }}
                    onMouseEnter={() => enter(label)}
                    onMouseLeave={leave}
                    onFocus={() => enter(label)}
                    onBlur={(e) => {
                      if (
                        !e.currentTarget.contains(e.relatedTarget as Node)
                      )
                        leave();
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={openDd === label}
                      aria-controls={id}
                      style={{
                        ...ls(a),
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        opacity: openDd === label ? 0.6 : 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {label}
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        aria-hidden="true"
                        focusable="false"
                        style={{
                          transition: "transform 160ms ease, opacity 160ms ease",
                          opacity: 0.8,
                        }}
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openDd === label && (
                      <DropdownMenu items={dropdown} menuId={id} txt={txt} />
                    )}
                  </div>
                );
              }
              return (
                <NL
                  key={label}
                  href={href!}
                  style={ls(a)}
                  onMouseEnter={hIn}
                  onMouseLeave={hOut}
                >
                  {label}
                </NL>
              );
            })}
          </div>
        )}

        {!desktop && (
          <button
            type="button"
            style={{
              width: 40,
              height: 40,
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => (isOpen ? closeMenu() : openMenu())}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 26,
                  height: 3,
                  background: txt,
                  borderRadius: 2,
                  boxShadow: "none",
                  transform:
                    i === 0 && isOpen
                      ? "translateY(8px) rotate(45deg)"
                      : i === 1 && isOpen
                        ? "scaleX(0)"
                        : i === 2 && isOpen
                          ? "translateY(-8px) rotate(-45deg)"
                          : "none",
                  opacity: i === 1 && isOpen ? 0 : 1,
                  transition: `transform 220ms ${EASE}, opacity 220ms ${EASE}`,
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {!invertColors && !desktop && (
        <div
          style={{ height: 80, flexShrink: 0 }}
          aria-hidden="true"
        />
      )}

      {mounted && !desktop && (
        <div
          id="mobile-nav-menu"
          data-state={menuState}
          aria-hidden={!isOpen}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1090,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
            background: mobBg,
            backdropFilter: "blur(14px)",
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            pointerEvents: isOpen ? "auto" : "none",
            transition: isOpen
              ? `opacity 240ms ${EASE}`
              : `opacity 220ms ${EASE}, visibility 0ms linear 220ms`,
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "100%",
              padding: "104px 32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              borderTop: mobBorder,
              transform: isOpen
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, -14px, 0)",
              transition: `transform 240ms ${EASE}`,
              willChange: "transform",
            }}
          >
            {links.map(({ label, href, dropdown }, idx) => {
              const a = active(href);
              const s: React.CSSProperties = {
                fontFamily: "var(--font-phantom)",
                fontWeight: a ? "bold" : "normal",
                fontSize: 20,
                color: txt,
                textDecoration: "none",
              };
              return (
                <div
                  key={label}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(0, 12px, 0)",
                    transition: `transform 240ms ${EASE}, opacity 180ms ease-out`,
                    transitionDelay: isOpen ? `${40 + idx * 25}ms` : "0ms",
                    willChange: "transform, opacity",
                  }}
                >
                  {href ? (
                    <NL href={href} style={s} onClick={closeMenu}>
                      {label}
                    </NL>
                  ) : (
                    <span style={s}>{label}</span>
                  )}
                  {dropdown && (
                    <div
                      style={{
                        paddingLeft: 16,
                        marginTop: 6,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {dropdown.map((d) => (
                        <NL
                          key={d.label}
                          href={d.href}
                          onClick={closeMenu}
                          style={{
                            fontFamily: "var(--font-phantom)",
                            fontSize: 17,
                            color: muted,
                            textDecoration: "none",
                            opacity: 0.9,
                          }}
                        >
                          {d.label}
                        </NL>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
