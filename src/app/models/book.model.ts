import { model, Schema } from "mongoose";
import { IBook, IBookStaticMethods } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"], required: true, uppercase:true },
    isbn: { type: String, unique: true, required: true },
    description: {type: String},
    copies: {type: Number, min:0, required: true},
    available: {type: Boolean, default: true}
}, {versionKey: false, timestamps: true})

bookSchema.pre("save", function(next){
    if(this.copies === 0){
        this.available = false;
    }
    next();
})

bookSchema.statics.borrowBook = async function(bookId: string, quantity: number){
    const book = await this.findById(bookId);

    if(!book) {
        throw new Error("No book found!")
    }

    if(book.copies < quantity) {
        throw new Error("Not enough copies available!")
    }

    if(!book.available) {
        throw new Error("Book is not available for borrowing!")
    }

    book.copies = book.copies - quantity;
    if(book.copies === 0){
        book.available = false;
    }

    await book.save();
    return book;
}

export const Book = model<IBook, IBookStaticMethods>("book", bookSchema);