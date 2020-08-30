import { v4 } from 'uuid';

export const createUsers = numberOfUsers => {
    const users = new Array(numberOfUsers).fill(0).map(() => generateUser());
    return users;
};

const generateUser = () => ({
    id: v4(),
    login: generateLogin(),
    password: generatePassword(),
    age: generateRandomNumber(8, 88),
    isDeleted: false
});

const generateLogin = () => {
    const logins = [
        'blah blah login',
        'login1',
        'simple login',
        'the sipliest login ever'
    ];

    return generateInstance(logins);
};

const generatePassword = () => {
    const passwords = [
        'qwertty',
        'lololo2006',
        'the password',
        "you'll never guess",
        "it's just a joke"
    ];

    return generateInstance(passwords);
};

const generateInstance = list => {
    const id = generateRandomNumber(0, list.length - 1);
    return list[id];
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
