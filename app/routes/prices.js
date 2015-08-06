import Ember from "ember";

export default Ember.Route.extend({
  queryParams: {
    symbol: {
      refreshModel: true
    }
  },
  model(params) {
    if (!params["symbol"]) {
      return [];
    }
    return this.store.find('price', { symbol: params["symbol"] });
  }
});
