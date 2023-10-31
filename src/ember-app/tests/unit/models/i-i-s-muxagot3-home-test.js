import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-muxagot3-home', 'Unit | Model | i-i-s-muxagot3-home', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
