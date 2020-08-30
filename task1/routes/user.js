import { Router } from 'express';
import {
    getUser,
    getAutoSuggestUsers,
    createUser,
    updateUser,
    deleteUser
} from '../services/user';
import validator from '../validator/validator';


export const userRouter = Router();

userRouter.get('/user/:id', getUser);

userRouter.get('/user-auto-suggested', getAutoSuggestUsers);

userRouter.post('/user/create', validator, createUser);

userRouter.post('/user/:id/update', validator, updateUser);

userRouter.delete('/user/:id/delete', deleteUser);
