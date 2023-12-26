import express from "express";

const app = express()

import cors from 'cors';
import { corsOptions } from "./config/corsOptions.js";
import cookieParser from 'cookie-parser'
import { logger } from './middleware/logger.js'

app.use(express.static('public'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(logger)

export default app