import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISMuxagot3CityLForm from './forms/i-i-s-muxagot3-city-l';
import IISMuxagot3homeLForm from './forms/i-i-s-muxagot3-home-l';
import IISMuxagot3meteoLForm from './forms/i-i-s-muxagot3-meteo-l';
import IISMuxagot3XranLForm from './forms/i-i-s-muxagot3-xran-l';
import IISMuxagot3CityEForm from './forms/i-i-s-muxagot3-city-e';
import IISMuxagot3homeEForm from './forms/i-i-s-muxagot3-home-e';
import IISMuxagot3meteoEForm from './forms/i-i-s-muxagot3-meteo-e';
import IISMuxagot3XranEForm from './forms/i-i-s-muxagot3-xran-e';
import IISMuxagot3CityModel from './models/i-i-s-muxagot3-city';
import IISMuxagot3homeModel from './models/i-i-s-muxagot3-home';
import IISMuxagot3meteoModel from './models/i-i-s-muxagot3-meteo';
import IISMuxagot3XranModel from './models/i-i-s-muxagot3-xran';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-muxagot3-city': IISMuxagot3CityModel,
    'i-i-s-muxagot3-home': IISMuxagot3homeModel,
    'i-i-s-muxagot3-meteo': IISMuxagot3meteoModel,
    'i-i-s-muxagot3-xran': IISMuxagot3XranModel
  },

  'application-name': 'Muxagot3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Muxagot3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Muxagot3',
          title: 'Muxagot3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        muxagot3: {
          caption: 'Muxagot3',
          title: 'Muxagot3',
          'i-i-s-muxagot3-city-l': {
            caption: 'City',
            title: ''
          },
          'i-i-s-muxagot3-meteo-l': {
            caption: 'Meteo',
            title: ''
          },
          'i-i-s-muxagot3-home-l': {
            caption: 'Home',
            title: ''
          },
          'i-i-s-muxagot3-xran-l': {
            caption: 'XranL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-muxagot3-city-l': IISMuxagot3CityLForm,
    'i-i-s-muxagot3-home-l': IISMuxagot3homeLForm,
    'i-i-s-muxagot3-meteo-l': IISMuxagot3meteoLForm,
    'i-i-s-muxagot3-xran-l': IISMuxagot3XranLForm,
    'i-i-s-muxagot3-city-e': IISMuxagot3CityEForm,
    'i-i-s-muxagot3-home-e': IISMuxagot3homeEForm,
    'i-i-s-muxagot3-meteo-e': IISMuxagot3meteoEForm,
    'i-i-s-muxagot3-xran-e': IISMuxagot3XranEForm
  },

});

export default translations;
