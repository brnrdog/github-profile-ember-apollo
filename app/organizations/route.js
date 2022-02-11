import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from './query.graphql';
import { task } from 'ember-concurrency';

export default class OrganizationRoute extends Route {
  @service graphql;

  model(params) {
    const term = params.organization;

    return {
      data: this.fetchData.perform(term),
      term,
    };
  }

  @task *fetchData(organization) {
    return yield this.graphql.watchQuery({
      query,
      variables: { organization },
    });
  }

  beforeModel() {
    this.transitionTo('organizations.repositories', this.term);
  }
}
