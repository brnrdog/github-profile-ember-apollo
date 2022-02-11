import ConnectionBaseComponent from '../base/component';
import query from './query.graphql';
import Repository from '../../../models/repository';

export default class GraphqlConnectionRepositoriesComponent extends ConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.repositories';
    this.variables = { organization: this.args.organization };
  }

  get repositories() {
    return this.nodes.map((n) => new Repository(n));
  }
}
