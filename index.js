import express from 'express'
import dotenv from 'dotenv'
import mainRoutes from './routes'
dotenv.config()

const app = express()
app.use(express.json())
express.urlencoded({ extended: true })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mainRoutes(app);

const port = process?.env?.PORT ?? 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})