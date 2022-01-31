//import the elements that we'll need to build the Post model
const { Model, DataTypes } = require('sequelize'); // Model and Datatypes we'll use from the sequelize package.
const sequelize = require('../config/connection'); //the connection to MySQL we stored in the connection.js file

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user',
                key: 'id' 
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

// export expression to make the Post model accessible to other parts of the application
module.exports = Post;