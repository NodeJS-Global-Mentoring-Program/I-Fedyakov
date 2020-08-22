import express from 'express';
import { config as configDotenv } from 'dotenv';
import { userRouter } from './routes/user';

configDotenv();

const app = express();

app.set('x-powered-by', false);
app.use(express.json());

app.use('/', userRouter);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);  
});