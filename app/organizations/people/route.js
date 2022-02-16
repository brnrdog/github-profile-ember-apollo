import Route from '@ember/routing/route';
export default class ProfilePeopleRoute extends Route {
  model() {
    const { organization } = this.paramsFor('organizations');
    const variables = { organization };

    return variables;
  }
}
