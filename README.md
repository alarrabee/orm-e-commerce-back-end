
Boot Camp Module 13 Challenge

# Description
This is the week 13 Module Challenge for the U of M Coding Bootcamp

#  Object-Relational Mapping: E-Commerce Back End
The challenge was to build the back end for an e-commerce site by modifying starter code and configure a working Express.js API to use Sequelize to interact with a PostgreSQL database.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Application Screenshot

![image](https://github.com/alarrabee/orm-e-commerce-back-end/assets/149320486/ae03af88-c139-44f7-9ce0-f2a0c8aea845)


## Installation Instructions
Prerequisites
- Node.js
- npm
- PostgreSQL

1. Clone the repository
    ```bash
   https://github.com/alarrabee/orm-e-commerce-back-end.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create database in postgreSQL
4. Run seeds
   ```bash
   npm run seed
   ```
5. Invoke Application
   ```bash
   npm start
   ```

## Demo
[View a video demonstration of the application using Insomnia](https://drive.google.com/file/d/1vuB3rO4FHo6sX1uc2JCTEDQFpISY33rw/view?usp=sharing)


## Acknowledgments
Guidance provided by edX Web Development Tutor Team (Megan Meyers)
