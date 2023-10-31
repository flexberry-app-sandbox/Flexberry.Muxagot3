import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  долгота: DS.attr('decimal'),
  имя: DS.attr('string'),
  широта: DS.attr('decimal'),
  city: DS.belongsTo('i-i-s-muxagot3-city', { inverse: null, async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-muxagot3-home.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-muxagot3-home.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-muxagot3-home.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-muxagot3-home.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-muxagot3-home.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('homeE', 'i-i-s-muxagot3-home', {
    адрес: attr('Адрес', { index: 0 }),
    долгота: attr('Долгота', { index: 1 }),
    широта: attr('Широта', { index: 2 }),
    city: belongsTo('i-i-s-muxagot3-city', '', {

    }, { index: 3 })
  });

  modelClass.defineProjection('homeL', 'i-i-s-muxagot3-home', {
    адрес: attr('Адрес', { index: 0 }),
    долгота: attr('Долгота', { index: 1 }),
    широта: attr('Широта', { index: 2 }),
    city: belongsTo('i-i-s-muxagot3-city', '', {
      название: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗданиеE', 'i-i-s-muxagot3-home', {
    адрес: attr('Адрес', { index: 0 }),
    долгота: attr('Долгота', { index: 1 }),
    широта: attr('Широта', { index: 2 })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-muxagot3-home', {
    адрес: attr('Адрес', { index: 0 }),
    долгота: attr('Долгота', { index: 1 }),
    широта: attr('Широта', { index: 2 }),
    city: belongsTo('i-i-s-muxagot3-city', '', {

    }, { index: 3 })
  });
};
