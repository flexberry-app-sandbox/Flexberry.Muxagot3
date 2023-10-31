import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Muxagot3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Muxagot3',
          title: 'Muxagot3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
