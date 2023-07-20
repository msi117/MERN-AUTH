import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import path from 'path'
import { fileURLToPath } from 'url';

dotenv.config()
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 8000
import userRoutes from './routes/userRoutes.js'

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())
app.use('/api/users', userRoutes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, 'frontend/dist')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
} else {
    app.get('/', (req, res) => res.send('Server is ready'))
    app.get('*', (req, res) => {
        res.status(401).send('Not Found sdkjfnsjdk');
    });
}


app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 