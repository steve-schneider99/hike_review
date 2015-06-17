import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true}),
  rating: null
});
