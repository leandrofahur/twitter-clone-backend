import 'reflect-metadata';
import cors from 'cors';
import createConnection from './database';
import express from 'express';
import { userRoute } from './routes/userRoute';
import { postRoute } from './routes/postRoute';
import { commentRoute } from './routes/commentRoute';

try {
  createConnection();
} catch (error) {
  console.error(error.message);
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);

export { app };
