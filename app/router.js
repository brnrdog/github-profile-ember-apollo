import EmberRouter from '@ember/routing/router';
import config from 'github-profile/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route(
    'organizations',
    { path: 'organizations/:organization' },
    function () {
      this.route('repositories');
      this.route('packages');
      this.route('people');
    }
  );
});
