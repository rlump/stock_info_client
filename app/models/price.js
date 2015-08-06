import DS from "ember-data";

export default DS.Model.extend({
  trade_date: DS.attr('string'),
  open: DS.attr('number'),
  high: DS.attr('number'),
  low: DS.attr('number'),
  close: DS.attr('number'),
  avg: Ember.computed('open', 'close', 'high', 'low', function() {
    return (this.get('open') + this.get('high') + this.get('low') + this.get('close'))/4;
  })
});
