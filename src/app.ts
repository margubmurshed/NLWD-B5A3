import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { bookRouter } from './app/controllers/book.controller';
import { borrowRouter } from './app/controllers/borrow.controller';

const app: Application = express();

app.use(express.json())
app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);
app.use(globalErrorHandler)

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my Library Management App")
})

export default app;