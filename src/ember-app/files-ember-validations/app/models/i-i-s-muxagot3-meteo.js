import {
  defineNamespace,
  defineProjections,
  Model as meteoMixin
} from '../mixins/regenerated/models/i-i-s-muxagot3-meteo';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(meteoMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
