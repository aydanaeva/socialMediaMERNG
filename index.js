const { ApolloServer } =  require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDef');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
})
.then((res) => {
        console.log(`Server running at ${res.url}`)
})
.catch(() => {
    console.log('Oopsie..')
});
    