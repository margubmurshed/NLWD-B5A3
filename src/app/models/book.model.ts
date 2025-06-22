import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"], required: true },
    isbn: { type: String, unique: true, required: true },
    description: {type: String},
    copies: {type: Number, min:0, required: true},
    available: {type: Boolean, default: true}
})

export const Book = model("book", bookSchema);