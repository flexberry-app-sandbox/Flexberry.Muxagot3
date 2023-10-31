import { Serializer as homeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxagot3-home';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(homeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
