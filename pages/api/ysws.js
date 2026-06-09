export default async function handler(req, res) {
  try {
    const response = await fetch('https://ysws.hackclub.com/api.json')
    const data = await response.json()
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch YSWS data' })
  }
}