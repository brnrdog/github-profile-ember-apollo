import Route from '@ember/routing/route';

export default class ProfilePackagesRoute extends Route {
  model() {
    return this.modelFor('organizations').term;
  }
}
