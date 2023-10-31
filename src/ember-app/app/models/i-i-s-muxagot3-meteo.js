import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as meteoMixin
} from '../mixins/regenerated/models/i-i-s-muxagot3-meteo';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(meteoMixin, Validations, {
});

defineProjections(Model);

export default Model;
