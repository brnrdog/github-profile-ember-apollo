import Component from '@glimmer/component';

export default class Avatar extends Component {
  get sizeClass() {
    switch (this.args.size) {
      case 'sm':
        return 'small';
      case 'lg':
        return 'large';
      default:
        return 'medium';
    }
  }
}
