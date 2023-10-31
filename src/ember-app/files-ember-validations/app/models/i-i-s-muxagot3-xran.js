import {
  defineNamespace,
  defineProjections,
  Model as XranMixin
} from '../mixins/regenerated/models/i-i-s-muxagot3-xran';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(XranMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
