import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
const app = express();
await mongoose.connect(process.env.mongo_url);
app.use(cors());
app.use(express.urlencoded());

app.use('/api/v1/user', userRouter);
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Invalid route' });
})
app.listen(process.env.port, () => {
    console.log(`Server is running at http://localhost:${process.env.port}`);
})