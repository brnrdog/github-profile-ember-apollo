import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import get from 'lodash/get';
import { loadMoreFactory, mapEdges } from '../../../graphql';

export default class hasNextPageGraphqlConnectionBaseComponent extends Component {
  @service graphql;
  @tracked data;
  @tracked variables;

  constructor() {
    super(...arguments);
    this.fetchData.perform();
  }

  @task
  *fetchData() {
    this.setup();
    this.data = yield this.graphql.watchQuery({
      query: this.query,
      variables: this.variables,
    });
  }

  @task
  *loadMore() {
    const loadMore = loadMoreFactory(this.data, { path: this.path });
    yield loadMore();
  }

  get hasNextPage() {
    console.log(get(this.data, `${this.path}.pageInfo.hasNextPage`));
    return get(this.data, `${this.path}.pageInfo.hasNextPage`);
  }

  get nodes() {
    return mapEdges(this.data, { path: this.path });
  }

  get isFirstLoading() {
    return this.fetchData.isRunning;
  }

  get isLoadingMore() {
    return this.loadMore.isRunning;
  }

  get loading() {
    return this.isFirstLoading || this.isLoadingMore;
  }

  get totalCount() {
    return get(this.data, `${this.path}.totalCount`);
  }
}
