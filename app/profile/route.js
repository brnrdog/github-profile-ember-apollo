import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from './query.graphql';

export default class ProfileRoute extends Route {
  @service graphql;

  async model() {
    return this.graphql.watchQuery({ query });
  }
}
