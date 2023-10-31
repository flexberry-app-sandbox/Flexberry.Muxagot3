import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as XranMixin
} from '../mixins/regenerated/models/i-i-s-muxagot3-xran';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(XranMixin, Validations, {
});

defineProjections(Model);

export default Model;
