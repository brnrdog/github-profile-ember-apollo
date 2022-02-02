import ApolloService from 'ember-apollo-client/services/apollo';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';

import ENV from 'github-profile/config/environment';

export default class GraphqlService extends ApolloService {
  options() {
    this.super(...arguments);
  }

  link() {
    const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });
    const authLink = setContext(async (_req, ctx) => {
      return {
        ...ctx,
        headers: {
          ...ctx.headers,
          authorization: `bearer ${ENV.GITHUB_API_TOKEN}`,
        },
      };
    });

    return authLink.concat(httpLink);
  }
}
