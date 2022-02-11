export default class Repository {
  constructor(attributes) {
    Object.assign(this, attributes);
  }

  get popularity() {
    return this.stargazers.totalCount > 100 ? 'hot' : 'cold';
  }
}
