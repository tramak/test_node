import React from 'react';
import { render } from 'react-dom';
import Dashboard from '../dashboard';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from '../../config';

const httpLink = {
  uri: config.graphQl.url
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});

function ApolloWrapper() {
  return (
    <ApolloProvider client={client}><Dashboard /></ApolloProvider>
  );
}

export default ApolloWrapper;