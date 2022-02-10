import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from './query.graphql';
import { tracked } from '@glimmer/tracking';
export default class ProfileRoute extends Route {
  @service graphql;
  @tracked organization = 'github';

  async model() {
    return this.graphql.watchQuery({ query });
  }
}
