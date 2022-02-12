import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from './query.graphql';
import { task } from 'ember-concurrency';

export default class OrganizationRoute extends Route {
  @service graphql;

  model(params) {
    const organization = params.organization;
    return {
      data: this.fetchData.perform(organization),
      term: organization,
    };
  }

  @task *fetchData(organization) {
    return yield this.graphql.watchQuery({
      query,
      variables: { organization },
    });
  }
}
