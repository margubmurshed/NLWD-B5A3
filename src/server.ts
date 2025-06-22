import mongoose from 'mongoose';
import app from './app';

const PORT = 5000;
let server;

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://learning_mongoose:4F94hlTcXBX9bbym@cluster0.hrq6pyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        server = app.listen(PORT, () => {
            console.log(`Library Management Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.error(e)
    }
}

main();