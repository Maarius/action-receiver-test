import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  didReceiveAttrs() {
    Ember.Logger.info('didReceiveAttrs');
  },

  willRender() {
    Ember.Logger.info('willRender');
  },

  didInsertElement() {
    Ember.Logger.info('didInsertElement');
  },

  didRender() {
    Ember.Logger.info('didRender');
  },

  didUpdateAttrs() {
    Ember.Logger.info('didUpdateAttrs');
  },

  willUpdate() {
    Ember.Logger.info('willUpdate');
  },

  didUpdate() {
    Ember.Logger.info('didUpdate');
  },

  willDestroyElement() {
    Ember.Logger.info('willDestroyElement');
  },

  willClearRender() {
    Ember.Logger.info('willClearRender');
  },

  didDestroyElement() {
    Ember.Logger.info('didDestroyElement');
  },
});
