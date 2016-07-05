/*jshint expr:true */
'use strict';

var PouchDB = require('pouchdb-memory');

//
// your plugin goes here
//
var thePlugin = require('../');
PouchDB.plugin(thePlugin);

var chai = require('chai');
chai.should();

var dbs = ['testdb', 'http://localhost:5984/testdb'];

dbs.forEach(function (db) {
  var dbType = /^http/.test(db) ? 'http' : 'local';
  tests(db, dbType);
});

function tests(dbName, dbType) {

  var db;

  beforeEach(function () {
    db = new PouchDB(dbName);
    return db;
  });
  afterEach(function () {
    return db.destroy();
  });
  describe(dbType + ': hello test suite', function () {
    it('should say hello', function () {
      return db.sayHello().then(function (response) {
        response.should.equal('hello');
      });
    });
  });
}
