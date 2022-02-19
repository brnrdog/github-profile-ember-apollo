import Component from '@glimmer/component';
import { action } from '@ember/object';
import starMutation from './star-repository-mutation.graphql';
import unstarMutation from './unstar-repository-mutation.graphql';
import { inject as service } from '@ember/service';

export default class OrganizationProfileRepositoriesListItemComponent extends Component {
  @service graphql;

  @action
  async onStarClick() {
    const variables = { repositoryId: this.args.repository.id };
    await this.graphql.mutate(
      { mutation: starMutation, variables },
      'repository'
    );
  }
  a;

  @action
  async onUnstarClick() {
    const variables = { repositoryId: this.args.repository.id };
    await this.graphql.mutate(
      { mutation: unstarMutation, variables },
      'repository'
    );
  }
}
