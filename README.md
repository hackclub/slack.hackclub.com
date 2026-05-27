<p align="center">
    <img width="192" alt="Hack Club logo" src="https://assets.hackclub.com/flag-standalone.svg">
</p>
<h1 align="center">
    The new <a href="https://slack.hackclub.com/">Hack Club Slack Landing Page!</a>!
</h1>

## Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t slack-hackclub-com .
docker run -p 3000:3000 slack-hackclub-com
```


# ACTUAL DEV DOCS
Okay, so yoou see how it fetches the email from the query param in slides 1, 2, 3, 4, 5, and finally 6? You might be wondering why it's constantly just fetching it. Well, the first slide fetches and passes it onto the 2nd slide by appending it to the next button's href and the 2nd slide passes it along to slide 3 and it goes like that until it reaches slide 6 where slide 6 passes it to auth.hackclub.com/slack so that the email can be prefilled

I considered using cookies (the first slide sets the cookie and no slide touches it until the 6th slide rolls around) but that would break the back button because hackclub.com would load slack.hackclub.com/slide/1?email=example@example.com and then the first slide would set the cookie and then it would remove the query param and refresh the page so that when the user clicked the back button, the query param would be readded because it would go back to the previous URl with the query param

oh wait- I realized just now that it could set the cookie without redirecting and stripping the query param. Well, shoot. 
I guess a positive of this approach is being transparent so that the user can see exactly how the email is being passed along and what their email is. Setting a cookie could make them confused because how would they even know a cookie is being set. They'd be super confused like "why is the email being set" when they're doing testing. 

And it's too late to go back now and change the approach. I just spent 45 minutes implementing the "pass along the email" way hahaha
Anywayyyyyy