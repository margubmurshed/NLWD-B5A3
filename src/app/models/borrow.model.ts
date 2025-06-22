import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>({
    book: { type: Schema.Types.ObjectId, required: true },
    quantity: {
        type: Number,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be an integer value!"
        }, 
        required: true
    },
    dueDate: { type: Date, required: true }
})

export const Borrow = model("borrow", borrowSchema);