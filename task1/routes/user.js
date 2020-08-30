import { Router } from 'express';
import {
    getUser,
    getAutoSuggestUsers,
    createUser,
    updateUser,
    deleteUser
} from '../services/user';

export const userRouter = Router();

userRouter.get('/user/:id', getUser);

userRouter.get('/user-auto-suggested', getAutoSuggestUsers);

userRouter.post('/user/create', createUser);

userRouter.post('/user/:id/update', updateUser);

userRouter.delete('/user/:id/delete', deleteUser);
