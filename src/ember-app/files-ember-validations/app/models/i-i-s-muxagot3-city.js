import {
  defineNamespace,
  defineProjections,
  Model as CityMixin
} from '../mixins/regenerated/models/i-i-s-muxagot3-city';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CityMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
