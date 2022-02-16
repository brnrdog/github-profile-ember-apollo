import Repository from '../../../models/repository';
import ConnectionBaseComponent from '../base/component';
import query from './query.graphql';

export default class GraphqlConnectionRepositoriesComponent extends ConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.repositories';
    this.variables = this.args.variables;
  }

  get repositories() {
    return this.nodes.map((node) => new Repository(node));
  }
}
