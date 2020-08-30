import { app } from '../app';
import { v4 } from 'uuid';
import { validateUser } from '../utils/validate-user';

export const createUser = (req, res) => {
    const newUser = req.body;
    const users = app.get('users');

    if (validateUser(newUser)) {
        const updatedUsers = [
            ...users,
            addDefaultValuesToUser(newUser)
        ];

        app.set('users', updatedUsers);

        res.json({ users: updatedUsers }).status(201);
    } else {
        res.json({
            error: 'User doesn\'t have required properties (login, password and age)'
        }).status(402);
    }
};

const addDefaultValuesToUser = user => ({
    ...user,
    id: v4(),
    isDeleted: false
});
