const test = require('tape')
const showdown = require('showdown')
const sdIcon = require('../showdown-icon')

test('extension exists', function (t) {
  t.plan(1)
  const converter = new showdown.Converter({extensions: ['icon']})
  t.ok(converter, 'Converter should be instantiated without errors')
})

test('generate icons', function (t) {
  t.plan(2)
  const converter = new showdown.Converter({extensions: ['icon']})
  t.equal(converter.makeHtml('@glyphicon-envelope'), '<p><span class="glyphicon glyphicon-envelope"></span></p>', 'Generates glyphicon')
  t.equal(converter.makeHtml('@fa-envelope'), '<p><i class="fa fa-envelope"></i></p>', 'Generates FontAwesome icon')
})
