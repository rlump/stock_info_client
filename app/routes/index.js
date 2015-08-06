import Ember from "ember";

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },
  model(params) {

    if (!params["name"])
      return [];

    var stocks = this.store.find('stock', { name: params["name"] });

    return stocks;
    // return [{"symbol":"GOOG","name":"Google Inc."}];
    //return [{"id":1241,"symbol":"GOOG","name":"Google Inc.","created_at":"2015-08-04T15:26:01.756Z","updated_at":"2015-08-04T15:26:01.756Z"},{"id":1242,"symbol":"GOOGL","name":"Google Inc.","created_at":"2015-08-04T15:26:01.758Z","updated_at":"2015-08-04T15:26:01.758Z"}]

    // return [{"id":199,"symbol":"APPF","name":"AppFolio, Inc.","created_at":"2015-08-04T15:25:59.103Z","updated_at":"2015-08-04T15:25:59.103Z"},{"id":200,"symbol":"AAPL","name":"Apple Inc.","created_at":"2015-08-04T15:25:59.105Z","updated_at":"2015-08-04T15:25:59.105Z"},{"id":201,"symbol":"ARCI","name":"Appliance Recycling Centers of America, Inc.","created_at":"2015-08-04T15:25:59.107Z","updated_at":"2015-08-04T15:25:59.107Z"},{"id":202,"symbol":"APDN","name":"Applied DNA Sciences Inc","created_at":"2015-08-04T15:25:59.109Z","updated_at":"2015-08-04T15:25:59.109Z"},{"id":203,"symbol":"APDNW","name":"Applied DNA Sciences Inc","created_at":"2015-08-04T15:25:59.111Z","updated_at":"2015-08-04T15:25:59.111Z"},{"id":204,"symbol":"AGTC","name":"Applied Genetic Technologies Corporation","created_at":"2015-08-04T15:25:59.112Z","updated_at":"2015-08-04T15:25:59.112Z"},{"id":205,"symbol":"AMAT","name":"Applied Materials, Inc.","created_at":"2015-08-04T15:25:59.115Z","updated_at":"2015-08-04T15:25:59.115Z"},{"id":206,"symbol":"AMCC","name":"Applied Micro Circuits Corporation","created_at":"2015-08-04T15:25:59.117Z","updated_at":"2015-08-04T15:25:59.117Z"},{"id":207,"symbol":"AAOI","name":"Applied Optoelectronics, Inc.","created_at":"2015-08-04T15:25:59.119Z","updated_at":"2015-08-04T15:25:59.119Z"},{"id":208,"symbol":"AREX","name":"Approach Resources Inc.","created_at":"2015-08-04T15:25:59.121Z","updated_at":"2015-08-04T15:25:59.121Z"},{"id":3278,"symbol":"APLE","name":"Apple Hospitality REIT, Inc.","created_at":"2015-08-04T15:26:07.542Z","updated_at":"2015-08-04T15:26:07.542Z"},{"id":3279,"symbol":"AIT","name":"Applied Industrial Technologies, Inc.","created_at":"2015-08-04T15:26:07.545Z","updated_at":"2015-08-04T15:26:07.545Z"}]
  }
});
