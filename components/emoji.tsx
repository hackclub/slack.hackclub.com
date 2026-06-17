export default function Emoji({ name, style }) {
    return (
        <span role="img" aria-label={name} style={style}>
            <img style={{
                verticalAlign: "middle"
            }} src={`https://cachet.dunkirk.sh/emojis/${name}/r`} alt={name} title={`:${name}:`} />
        </span>
    )
}