'use strict';

var utils = require('./pouch-utils');

exports.sayHello = utils.toPromise(function (callback) {
  //
  // Use this to get the db or PouchDB objects
  //
  // var db = this;
  // var PouchDB = db.constructor;

  callback(null, 'hello');
});

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}
