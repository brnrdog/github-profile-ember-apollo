import Route from '@ember/routing/route';

export default class OrganizationRepositoriesRoute extends Route {
  model() {
    const { organization } = this.paramsFor('organizations');

    return {
      organization,
    };
  }
}
