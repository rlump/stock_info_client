import Ember from "ember";


export default Ember.Controller.extend({
  queryParams: ['name'],
  name: null,

  actions: {
    search : function() {
      var searchItem = this.get('search_item');
      this.transitionToRoute('/?name='+searchItem);
    }
  }


});
