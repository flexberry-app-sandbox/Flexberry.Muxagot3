import { Serializer as meteoSerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxagot3-meteo';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(meteoSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
