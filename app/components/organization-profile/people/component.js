import GraphqlConnectinoPeopleComponent from '../../graphql-connection/people/component';

export default class OrganizationProfilePeopleComponent extends GraphqlConnectinoPeopleComponent {
  variables = { organization: this.args.organization };
}
