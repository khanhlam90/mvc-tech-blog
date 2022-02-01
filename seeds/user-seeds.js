const { User } = require('../models');

const userData = [{
        username: 'kenlam',
        password: 'password1234'

    },
    {
        username: 'selenala',
        password: 'password1234'
    },
    {
        username: 'techblog',
        password: 'password1234'
    },
    {
        username: 'testinguser',
        password: 'password1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;