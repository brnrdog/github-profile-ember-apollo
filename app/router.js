import EmberRouter from '@ember/routing/router';
import config from 'github-profile/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('profile', { path: '/' }, function () {
    this.route('repos', { path: '/ ' });
    this.route('packages');
    this.route('people');
  });
});
