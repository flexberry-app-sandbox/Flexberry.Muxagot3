import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-muxagot3-city-l');
  this.route('i-i-s-muxagot3-city-e',
  { path: 'i-i-s-muxagot3-city-e/:id' });
  this.route('i-i-s-muxagot3-city-e.new',
  { path: 'i-i-s-muxagot3-city-e/new' });
  this.route('i-i-s-muxagot3-home-l');
  this.route('i-i-s-muxagot3-home-e',
  { path: 'i-i-s-muxagot3-home-e/:id' });
  this.route('i-i-s-muxagot3-home-e.new',
  { path: 'i-i-s-muxagot3-home-e/new' });
  this.route('i-i-s-muxagot3-meteo-l');
  this.route('i-i-s-muxagot3-meteo-e',
  { path: 'i-i-s-muxagot3-meteo-e/:id' });
  this.route('i-i-s-muxagot3-meteo-e.new',
  { path: 'i-i-s-muxagot3-meteo-e/new' });
  this.route('i-i-s-muxagot3-xran-l');
  this.route('i-i-s-muxagot3-xran-e',
  { path: 'i-i-s-muxagot3-xran-e/:id' });
  this.route('i-i-s-muxagot3-xran-e.new',
  { path: 'i-i-s-muxagot3-xran-e/new' });
});

export default Router;
