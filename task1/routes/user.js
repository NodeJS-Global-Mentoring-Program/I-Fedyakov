import { Router } from 'express';

export const userRouter = Router();

userRouter.route('/user')
    .get((req, res) => {
        res.json(null);      
    });
