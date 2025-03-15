"use server"

import { MongoClient } from 'mongodb';

const uri = "your_mongodb_connection_string"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export const createInvoice = async (formData: { amount: number, customer: string, status: string }) => {
    const { amount, customer, status } = formData;
    try {
        await client.connect();
        const database = client.db('your_database_name'); // Replace with your database name
        const invoices = database.collection('invoices');

        const newInvoice = {
            amount,
            customer,
            status,
            createdAt: new Date(),
        };

        const result = await invoices.insertOne(newInvoice);
        console.log(`New invoice created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error creating invoice:', error);
    } finally {
        await client.close();
    }
}