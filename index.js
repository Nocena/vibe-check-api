import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const responseData = {
  isHuman: true,
  confidence: 84,
  detectedEmotionType: 'neutral'
}

app.get('/api/vibe-check-api', (req, res) => {
  res.json(responseData)
})

app.get('/', (req, res) => {
  res.send('Vibe Check API is live!')
})

app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
