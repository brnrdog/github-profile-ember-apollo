import GraphqlConnectionBaseComponent from '../base/component';
import query from './query.graphql';

export default class GrpahqlConnectionPeopleComponent extends GraphqlConnectionBaseComponent {
  setup() {
    this.query = query;
    this.path = 'organization.people';
    this.variables = { organization: this.args.organization };
  }

  get people() {
    return this.nodes;
  }
}
