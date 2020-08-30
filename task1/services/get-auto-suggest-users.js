import { app } from '../app';

export const getAutoSuggestUsers = (req, res) => {
    const { loginSubstring, limit } = req.query;

    const suggestedUsers = _getAutoSuggestUsers(loginSubstring, limit);

    res.json({ users: suggestedUsers }).status(201);
};

const _getAutoSuggestUsers = (loginSubstring, limit) => {
    const users = app.get('users');
    const suggestedUsers = users.filter(user => user.login.includes(loginSubstring));
    console.log({ suggestedUsers });

    return limitUsers(suggestedUsers, limit);
};

const limitUsers = (users, limit) =>
    (users.length > limit)
        ? users.slice(0, limit)
        : users;
