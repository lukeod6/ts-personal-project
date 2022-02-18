import client from 'graphql-client';

export const gqlKoClient = client({
  url: 'https://api.thegraph.com/subgraphs/name/knownorigin/known-origin',
});
