import Route from '@ember/routing/route';

export default class ProfileIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('profile.repos');
  }
}
