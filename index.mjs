const PORT = 3000
const REDIS_PORT = 6379
const REDIS_HOST = 'localhost'

import express from 'express'
const app = express()

import { createClient } from 'redis'
const redis = createClient(REDIS_PORT, REDIS_HOST); //creates a new client

app.get('/', (req, res) => {
  res.send('Hello World!')
})

redis.on('connect', function() {
    console.log('Connected to redis');
    app.listen(PORT, () => {
      console.log(`App listenig at port ${PORT}`)
    })
})





