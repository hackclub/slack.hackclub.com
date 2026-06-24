import { Text } from "theme-ui"

export default function Paragraph({ children }) {
    return (<Text sx={{ fontSize: "24px", lineHeight: "1.5em", color: "var(--foreground)", alignSelf: "center" }}>
        {children}</Text>)
}