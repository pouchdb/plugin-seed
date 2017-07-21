/*jshint expr:true */
'use strict';

var PouchDB = require('pouchdb');

//
// your plugin goes here
//
var thePlugin = require('../');
PouchDB.plugin(thePlugin);

var chai = require('chai');
chai.should();

var dbs;
if (process.browser) {
  dbs = 'testdb' + Math.random() +
    ',http://localhost:5984/testdb' + Math.round(Math.random() * 100000);
} else {
  dbs = process.env.TEST_DB;
}

dbs.split(',').forEach(function (db) {
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

  describe(dbType + ': silverlining test suite', function () {
    it('should run sql query', function () {
      return db.query("SELECT a,b,c FROM cats WHERE color='black' OR color='white'").then(function (response) {
        response.should.equal({docs:[]});
      });
    });
  });
}
