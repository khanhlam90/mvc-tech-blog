const { Post } = require('../models');

const postData = [{
        title: 'Sample Title 1',
        content: 'Google is looking for Senior Developers',
        user_id: 1

    },
    {
        title: 'Sample Title 2',
        content: 'Facebook is looking for Tech Auditor',
        user_id: 2
    },
    {
        title: 'Sample Title 3',
        content: 'Amazon to terminate more than 150 senior developers',
        user_id: 3
    },
    {
        title: 'Sample Title 4',
        content: 'Developer at big tech companies making big money',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;