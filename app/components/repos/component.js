import GraphqlConnectionComponent from '../graphql-connection/component';
import query from './query.graphql';

export default class ReposComponent extends GraphqlConnectionComponent {
  get path() {
    return 'organization.repositories';
  }

  get query() {
    return query;
  }

  get repositories() {
    return this.nodes;
  }
}
