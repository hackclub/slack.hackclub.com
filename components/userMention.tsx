import style from "../styles/userMention.module.css"

export default function UserMention({ username, slackId }) {
    return (
        <a className={style.mention} href={`https://hackclub.slack.com/team/${slackId}`} target="_blank" rel="noopener noreferrer">@{username}</a>
    )
}