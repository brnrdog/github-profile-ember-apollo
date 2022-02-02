import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { loadMoreFactory, mapEdges } from '../../graphql';
import query from './query.graphql';

export default class ReposComponent extends Component {
  @service graphql;
  @tracked data;

  constructor() {
    super(...arguments);
    this.fetchData.perform();
  }

  @task
  *fetchData() {
    this.data = yield this.graphql.watchQuery({ query });
  }

  @task
  *loadMore() {
    const path = 'organization.repositories';
    const loadMore = loadMoreFactory(this.data, { path });
    yield loadMore();
  }

  get repositories() {
    return mapEdges(this.data, { path: 'organization.repositories' });
  }

  get loading() {
    return this.fetchData.isRunning || this.loadMore.isRunning;
  }
}
