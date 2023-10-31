import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  влажность: DS.attr('decimal'),
  данные: DS.attr('string'),
  долгота: DS.attr('decimal'),
  местоположение: DS.attr('string'),
  метеостанцияID: DS.attr('number'),
  метостанция: DS.attr('string'),
  настройки: DS.attr('string'),
  текущаяТемп: DS.attr('decimal'),
  широта: DS.attr('decimal'),
  city: DS.belongsTo('i-i-s-muxagot3-city', { inverse: null, async: false }),
  xran: DS.hasMany('i-i-s-muxagot3-xran', { inverse: 'meteo', async: false })
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  влажность: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.влажность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  данные: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.данные.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  местоположение: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.местоположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  метеостанцияID: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.метеостанцияID.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  метостанция: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.метостанция.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  текущаяТемп: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.текущаяТемп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  xran: {
    descriptionKey: 'models.i-i-s-muxagot3-meteo.validations.xran.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('meteoE', 'i-i-s-muxagot3-meteo', {
    широта: attr('Широта', { index: 0 }),
    местоположение: attr('Местоположение', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    текущаяТемп: attr('Текущая темп', { index: 3 }),
    влажность: attr('Влажность', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 }),
    данные: attr('Данные', { index: 6 }),
    метеостанцияID: attr('Метеостанция ID', { index: 7 }),
    city: belongsTo('i-i-s-muxagot3-city', '', {
      название: attr('', { index: 8 })
    }, { index: -1, hidden: true }),
    xran: hasMany('i-i-s-muxagot3-xran', 'Xran', {
      метеостанцияID: attr('Метеостанция ID', { index: 0 }),
      настройки: attr('Настройки', { index: 1 }),
      iDИдентификатор: attr('I d идентификатор', { index: 2 }),
      данные: attr('Данные', { index: 3 })
    })
  });

  modelClass.defineProjection('meteoL', 'i-i-s-muxagot3-meteo', {
    широта: attr('Широта', { index: 0 }),
    местоположение: attr('Местоположение', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    текущаяТемп: attr('Текущая темп', { index: 3 }),
    влажность: attr('Влажность', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 }),
    данные: attr('Данные', { index: 6 }),
    метеостанцияID: attr('Метеостанция ID', { index: 7 }),
    city: belongsTo('i-i-s-muxagot3-city', '', {
      название: attr('', { index: 8 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('МетеостанцияE', 'i-i-s-muxagot3-meteo', {
    iDИдентификатор: attr('I d идентификатор', { index: 0 }),
    местоположение: attr('Местоположение', { index: 1 }),
    широта: attr('Широта', { index: 2 }),
    долгота: attr('Долгота', { index: 3 }),
    влажность: attr('Влажность', { index: 4 })
  });

  modelClass.defineProjection('МетеостанцияL', 'i-i-s-muxagot3-meteo', {
    iDИдентификатор: attr('I d идентификатор', { index: 0 }),
    местоположение: attr('Местоположение', { index: 1 }),
    широта: attr('Широта', { index: 2 }),
    долгота: attr('Долгота', { index: 3 }),
    влажность: attr('Влажность', { index: 4 })
  });
};
