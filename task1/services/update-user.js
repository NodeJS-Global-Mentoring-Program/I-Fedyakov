import { app } from '../app';
import { validateUser } from '../utils/validate-user';

export const updateUser = (req, res) => {
    const userId = req.params.id;
    const userFromRequest = req.body;
    const users = app.get('users');

    if (validateUser(userFromRequest)) {
        const updatedUsers = users.map(user => {
            return (user.id === userId)
                ? {
                    ...user,
                    ...userFromRequest
                }
                : user;
        });

        app.set('users', updatedUsers);

        res.json({ status: 'Success' }).status(201);
    } else {
        res.json({
            'error': "User doesn\'t have required properties (login, password and age)"
        }).status(402);
    }
};
