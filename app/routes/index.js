import Ember from "ember";

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },
  model(params) {
    if (!params["name"]) {
      return [];
    }
    return this.store.find('stock', { name: params["name"] });
  }
});
