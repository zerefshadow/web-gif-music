import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from  "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb' , extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb' , extended: true }));
app.use(cors());

app.use('/posts' , postRoutes); // damn do node_modules với phần lỗi badRequestError: request aborted nhớ cái qq node_modules lỗi đương nhiên bị gì đó trong ba cái lib install nó lại

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL , { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT , () => console.log(`ui vãi cha nội này vô server port ${PORT}`)))
    .catch((error) => console.log(error.message));