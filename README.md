# Tech Blog Using Model-View-Controller (MVC) Paradigm

![Github License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=for-the-badge)

## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.

This application builds a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application is built and deployed to Heroku, which follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

User Story
- AS A developer who writes about tech
- I WANT a CMS-style blog site
- SO THAT I can publish articles, blog posts, and my thoughts and opinions

Technologies Used:
- [Node.js and Express.js to create a RESTful API](https://www.npmjs.com/package/express)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize) package to connect Express.js API to a MySQL database
- [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like MySQL username, password, and database name
- [Handlebars.js](https://www.npmjs.com/package/handlebars), a logicless templating language that keeps the View and the code separate and compiles templates into JavaScript functions
- [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords
- [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication
- [Deployed with Heroku](https://www.heroku.com/home)
- Structure follows MVC Paradigm


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Links](#links)

## Installation

To use this application, please follow the following steps:
- Clone the repository using SSH - 'git@github.com:kimberlyamaya/iCocina.git'
- Run npm to install the dependencies: Node.js, Express.js , MySQL, MySQL2, Sequelize, dotenv, Handlebars.js, bcrypt, express-session and connect-session-sequalize - 'npm install node.js express mysql mysql2 sequelize dotenv express-handlebars bcrypt express-session connect-session-sequalize'
- Create a environment variable file (.env) and put in your crendentials (DB_NAME='mvc_tech_blog_db' DB_USER='yourusername' DB_PW='yourpassword'). Make sure to include this file(.env) in your .gitignore file, so that your credentials are hidden from public.
- Create your database using MySQl Shell Command 'mysql -u username -p, enter your password'. Then run 'source db/schema.sql' to create the local database.
- Check if the database has been created successfully by entering the following in the command line - 'SHOW DATABASES;'
- Quit MySQl Shell Command - quit;
- Seed the tables data to your database so you can test your application locally - 'npm run seed'
- Start the server - 'npm start'
- Use of local host or Heroku to host the application

## Usage 
After the installation, please test scenarios in Insomnia, local host browser or Heroku to make sure the application works as expected.

## License

This project is using the MIT License.

## Contributing

Please feel free to contribute to this project - please find our info at the [Questions](#questions) section and contact us for more infomation.

## Tests

Please refer to [Usage](#usage) section.

## Questions

Please reach me using:

<a href = "mailto:khanhlam1990@yahoo.com"> My Email </a>

[My Github Account](https://github.com/khanhlam90)

## Project Links:

* [Deployed Application](https://just-techblog.herokuapp.com/)
* [Github Repository](https://github.com/khanhlam90/mvc-tech-blog.git)