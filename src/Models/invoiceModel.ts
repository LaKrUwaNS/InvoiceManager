import mongoose, { Schema, Document, models, Model } from "mongoose";

// Define the interface for the Invoice document
interface IInvoice extends Document {
    customer: Record<string, unknown>;  // You can define this more specifically if needed
    amount: string;
    status: string;
    send: number;
    createdAt: Date;  // Automatically added by 'timestamps'
    updatedAt: Date;  // Automatically added by 'timestamps'
}

// Define the schema for the invoice
const invoiceSchema = new Schema<IInvoice>(
    {
        customer: {
            type: Object, // You can change this to a more specific type if needed
            required: true, // Fix 'require' to 'required'
        },
        amount: {
            type: String,
            required: true,
            trim: true, // Removes spaces from the start and end of the string
        },
        status: {
            type: String,
            required: true,
            default: "0", // Set default as string "0"
        },
        send: {
            type: Number,
            required: true,
            default: 0, // Set default value for send
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Check if the model is already defined (to handle hot-reloading in development environments)
const Invoice: Model<IInvoice> = models.Invoice || mongoose.model<IInvoice>("Invoice", invoiceSchema);

export default Invoice;
