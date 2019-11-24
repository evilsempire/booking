import 'dotenv/config';
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import schema from './schema'
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send({ node: "deployment" })
})

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models
    },
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app, path: '/graphql' });
const PORT = process.env.PORT || 8000;
sequelize.sync().then(async () => {

    app.listen({ port: PORT }, () => {
        console.log("Apollo server on http://localhost:8000/graphql")
    });
});