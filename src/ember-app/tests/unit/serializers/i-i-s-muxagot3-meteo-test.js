import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-muxagot3-meteo', 'Unit | Serializer | i-i-s-muxagot3-meteo', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-muxagot3-meteo',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-muxagot3-city',
    'model:i-i-s-muxagot3-home',
    'model:i-i-s-muxagot3-meteo',
    'model:i-i-s-muxagot3-xran',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
