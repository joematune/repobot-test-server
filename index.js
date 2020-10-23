const { ApolloServer, gql } = require('apollo-server')
// Instance of RESTDataSource with Chuck Norris endpoints
const RESTWrapper = require('./datasource')

// Type definitions for Joke & Query that receives and argument
const typeDefs = gql`
  type Joke {
    categories: [String!]
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    url: String!
    value: String!
  }
  type Query {
    joke(category: String!): Joke
    categories: [String]
  }
`

// Resolver function defining how data will be fetched and how 
// it will be returned
const resolvers = {
  Query: {
    joke: (root, { category }, { dataSources }) => dataSources.restWrapper.getAJoke(category),
    categories: (root, args, { dataSources }) => dataSources.restWrapper.getAllCategories(),
  },
}

// Pass type definitions, resolver functions, and RESTWrapper
// data source to instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    restWrapper: new RESTWrapper()
  })
})

// Run server, on port 4000 by default
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
