import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import "./shared/container";
import express, { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { router } from "./routes";
import { AppError } from "./errors/appError";
import cors from "cors";

const server = express()

const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
}

server.use(cors(corsOptions));
const { PORT } = process.env

server.use(express.json())
server.use(router)

server.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status:"error",
        message: `Internal server error - ${err.message}`
    })
})

server.listen(PORT || 3333, () => console.log(`Server is running on port ${PORT || 3333}`))

AppDataSource.initialize().then(async () => {
    console.log("Datasource initialized successfully")
}).catch(error => console.log(error))