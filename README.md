# socialMediaMERNG

## To run the project:
1. create config file (for database connection)
2. run "npm install apollo-server graphql mongoose"
3. run "npm i -D nodemon "
4. run "npm start"

## models folder:
Describes model for each database class. For example: user should have username, email and password. Connection to database.
1. Post.js
2. User.js 

## graphql folder:
Fetch the data. Requires models.
1. resolvers - resolve the fetch
    1. posts.js (for example: getPosts())
2. typeDef.js


