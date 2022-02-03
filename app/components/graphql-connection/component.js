import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { loadMoreFactory, mapEdges } from '../../graphql';

export default class GraphqlConnectionComponent extends Component {
  @service graphql;
  @tracked data;

  constructor() {
    super(...arguments);
    this.fetchData.perform();
  }

  @task
  *fetchData() {
    this.data = yield this.graphql.watchQuery({ query: this.query });
  }

  @task
  *loadMore() {
    const loadMore = loadMoreFactory(this.data, { path: this.path });
    yield loadMore();
  }

  get nodes() {
    return mapEdges(this.data, { path: this.path });
  }

  get loading() {
    return this.fetchData.isRunning || this.loadMore.isRunning;
  }
}
