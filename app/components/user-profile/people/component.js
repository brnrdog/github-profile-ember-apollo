import GraphqlConnectionComponent from '../../graphql-connection/component';
import query from './query.graphql';

export default class UserProfilePeopleComponent extends GraphqlConnectionComponent {
  setup() {
    this.query = query;
    this.path = 'organization.people';
  }

  get people() {
    return this.nodes;
  }
}
