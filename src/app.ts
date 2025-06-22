import express, { Application, Request, Response } from 'express';
import { bookRouter } from './app/controllers/book.controller';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json())
app.use("/api/books", bookRouter);
app.use(globalErrorHandler)

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my Library Management App")
})

export default app;