import { app } from '../app';

export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const users = app.get('users');

    const updatedUsers = users.map(user => {
        return (user.id === userId)
            ? {
                ...user,
                isDeleted: true
            }
            : user;
    });

    app.set('users', updatedUsers);

    res.json({ users: updatedUsers }).status(201);
};
