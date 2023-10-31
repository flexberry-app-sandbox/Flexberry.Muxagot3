import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  данные: DS.attr('string'),
  метеостанцияID: DS.attr('number'),
  настройки: DS.attr('string'),
  meteo: DS.belongsTo('i-i-s-muxagot3-meteo', { inverse: 'xran', async: false })
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-muxagot3-xran.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  данные: {
    descriptionKey: 'models.i-i-s-muxagot3-xran.validations.данные.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  метеостанцияID: {
    descriptionKey: 'models.i-i-s-muxagot3-xran.validations.метеостанцияID.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-muxagot3-xran.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  meteo: {
    descriptionKey: 'models.i-i-s-muxagot3-xran.validations.meteo.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('XranE', 'i-i-s-muxagot3-xran', {
    метеостанцияID: attr('Метеостанция ID', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    iDИдентификатор: attr('I d идентификатор', { index: 2 }),
    данные: attr('Данные', { index: 3 })
  });

  modelClass.defineProjection('XranL', 'i-i-s-muxagot3-xran', {
    iDИдентификатор: attr('', { index: 0 }),
    данные: attr('', { index: 1 }),
    метеостанцияID: attr('', { index: 2 }),
    настройки: attr('', { index: 3 })
  });
};
