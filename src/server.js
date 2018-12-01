import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import config from 'config';
import template from 'public';
import graphqlHTTP from 'express-graphql';
import schema from '../graphQL/schema';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: global,
    graphiql: true // Если true, то отображает GraphiQL
}));

// server.use('/registration', routesRegistration);

server.get('/', renderController);
server.get('/dashboard', renderController);
server.get('/registration', renderController);
server.post('/user-add', function (req, res) {
  console.log(req.body, req.body.name);
  res.send(JSON.stringify(req.body));
});

function renderController(req, res) {
  const appString = '';

  res.send(template({
    body: appString,
    title: 'Gosapis социальная сеть для пчеловодов',
    initialState: JSON.stringify({})
  }));
}

server.use(express.static('../src/public'));
server.use('/assets', express.static('assets'));

// server.use(function(err, req, res, next) {
//   if(server.get('env') === 'development') {
//     let errorHandler = express.errorHandler();
//     errorHandler(err, req, res, next)
//   } else {
//     res.send(500);
//   }
//   //res.send(404, 'Страница не найдена');
// });
// server.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   //res.status(err.status || 500);
//   res.send(JSON.stringify(err));
//   //res.render('error');
// });

server.listen(config.port);