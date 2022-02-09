import ConnectionBaseComponent from '../base/component';
import query from './query.graphql';

export default class GraphqlConnectionRepositoriesComponent extends ConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.repositories';
  }

  get repositories() {
    return this.nodes;
  }
}
