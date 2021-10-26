import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from './query.graphql';

export default class ProfilePeopleRoute extends Route {
  @service graphql;

  async model() {
    const data = await this.graphql.query({ query });
    const people =
      data?.organization.people.edges.map(({ node }) => node) ?? [];
    return people;
  }
}
