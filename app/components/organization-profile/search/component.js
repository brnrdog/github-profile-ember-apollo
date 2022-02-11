import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class OrganizatinoProfileSearchComponent extends Component {
  @tracked term = this.args.term;
  @service router;

  @action
  onChange(event) {
    this.term = event.target.value;
  }

  @action
  onSubmit(event) {
    event.preventDefault();
    this.router.transitionTo('organizations', this.term || 'github');
  }
}
