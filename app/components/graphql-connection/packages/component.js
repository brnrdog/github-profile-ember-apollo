import GraphqlConnectionBaseComponent from '../base/component';
import query from './query.graphql';

export default class GraphqlConnectionPackagesComponent extends GraphqlConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.packages';
  }

  get packages() {
    return this.nodes;
  }
}
