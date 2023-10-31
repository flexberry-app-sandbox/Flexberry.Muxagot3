import { Serializer as XranSerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxagot3-xran';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(XranSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
