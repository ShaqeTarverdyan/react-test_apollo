import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import {InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link:new HttpLink({uri:'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex'}),
    cache:new InMemoryCache(),
})

export default client;