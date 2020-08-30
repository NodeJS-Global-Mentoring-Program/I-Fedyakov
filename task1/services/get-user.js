import { app } from '../app';

export const getUser = (req, res) => {
    const id = req.params.id;
    const users = app.get('users');
    const targetUser = users.filter(user => user.id === id);

    if (targetUser && targetUser.length) {
        res.json(targetUser[0]).status(200);
    } else {
        res.json({
            error: `User with id ${id} isn't found`
        }).status(404);
    }
};
