import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.muxagot3.caption'),
          title: i18n.t('forms.application.sitemap.muxagot3.title'),
          children: [{
            link: 'i-i-s-muxagot3-city-l',
            caption: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-city-l.caption'),
            title: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-city-l.title'),
            children: null
          }, {
            link: 'i-i-s-muxagot3-meteo-l',
            caption: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-meteo-l.caption'),
            title: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-meteo-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-muxagot3-home-l',
            caption: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-home-l.caption'),
            title: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-home-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-muxagot3-xran-l',
            caption: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-xran-l.caption'),
            title: i18n.t('forms.application.sitemap.muxagot3.i-i-s-muxagot3-xran-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})