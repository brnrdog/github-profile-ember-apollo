import GraphqlConnectionComponent from '../../graphql-connection/component';
import query from './query.graphql';

export default class RepositoriesComponent extends GraphqlConnectionComponent {
  setup() {
    this.query = query;
    this.path = 'organization.repositories';
  }

  get repositories() {
    return this.nodes;
  }
}