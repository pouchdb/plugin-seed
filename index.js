'use strict';

var utils = require('pouchdb-utils');
var sqltomango = require('sqltomango');

exports.sql = utils.toPromise(function(query, callback) {

  if (typeof query !== 'string') {
    throw('query must be a string');
  }

  var cq = sqltomango.parse(query);

  // if this is a "SELECT * from cats" query
  if (Object.keys(cq).length === 0 || !cq.selector) {
    cq.selector = { _id: { "$gt": 0 }};
  }

  // var pouch = this;
  // var PouchDB = pouch.constructor;
  this.find(cq, callback)
});

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}
