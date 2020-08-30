export const validateUser = user => {
    if (user.login && user.password && user.age) {
        return true;
    }

    return false;
};
