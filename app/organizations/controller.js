import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ProfileController extends Controller {
  @tracked
  name = 'github';

  queryParams = ['name'];
}
