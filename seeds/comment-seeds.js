const { Comment } = require('../models');

const commentData = [{
        comment_text: "Thanks for the post!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Awesome post! to follow for more",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I'm surprised! Thanks for your post",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Love this guy!",
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;