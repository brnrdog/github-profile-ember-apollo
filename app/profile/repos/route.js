import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { getObservable } from 'ember-apollo-client';
import query from './query.graphql';

export default class ProfileReposRoute extends Route {
  @service graphql;

  @action
  loadMore() {
    const { fetchMore } = getObservable(this.query);
    const endCursor = this.query?.organization.repositories.pageInfo.endCursor;
    const options = {
      variables: { endCursor },
      updateQuery(previousResult, { fetchMoreResult }) {
        console.log(previousResult, fetchMoreResult);
      },
    };
    fetchMore(options);
  }

  async model() {
    const result = await this.graphql.watchQuery({ query });
    this.query = this.result;
    const repos =
      result?.organization.repositories.edges.map(({ node }) => node) ?? [];

    return { pinnedRepos: [], repos };
  }
}
