import express from 'express';
import { config as configDotenv } from 'dotenv';
import { userRouter } from './routes/user';
import { createUsers } from './utils/create-users';

configDotenv();

export const app = express();
app.use(express.json());

app.set('users', createUsers(20));
console.log({ users: app.get('users') });

app.set('x-powered-by', false);

app.use((req, res, next) => {
    if (Object.keys(req.body).length !== 0) {
        console.log({ body: req.body });
    }

    if (Object.keys(req.params).length !== 0) {
        console.log({ params: req.params });
    }

    if (Object.keys(req.query).length !== 0) {
        console.log({ queries: req.query });
    }

    next();
});
app.use('/', userRouter);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
