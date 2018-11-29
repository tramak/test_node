import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
//import App from './app';
import template from 'public';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import schema from '../graphQL/schema';

const server = express();

server.use('/assets', express.static('assets'));
server.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: global,
    graphiql: true // Если true, то отображает GraphiQL
}));
server.get('/', renderController);
server.get('/dashboard', renderController);
server.get('/registation', renderController);

function renderController(req, res) {
  const isMobile = true; // assume it's mobile
  const initialState = { isMobile };
  // const appString = renderToString(<App isMobile={isMobile} />);
  const appString = '';

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
}

server.listen(3000);