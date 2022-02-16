import GraphqlConnectionBaseComponent from '../base/component';
import query from './query.graphql';

export default class GraphqlConnectionPackagesComponent extends GraphqlConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.packages';
    this.variables = this.args.variables;
  }

  get packages() {
    return this.nodes;
  }
}
