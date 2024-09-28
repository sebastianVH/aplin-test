import express from 'express'
import { Express } from 'express'
import inventory from './routes/routes'


const app: Express = express()

const PORT: number = 3000

app.use(express.json())
app.use(inventory)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
