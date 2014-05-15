PouchDB Plugin Seed
=====

Fork this project to build your first PouchDB plugin.  It contains everything you need to test in Node,
WebSQL (via PhantomJS), and IndexedDB (via Firefox).  It also includes a Travis config file so you
can automatically run the tests in Travis.

Building
----
    npm install
    npm run build

Testing
----

### In Node

Run tests with `npm test` and coverage of tests with `npm run coverage`.

If you have mocha installed globally you can run single test with:
```
TEST_DB=local mocha --reporter spec --grep search_phrase
```
In TEST_DB environment variable specify database that PouchDB should use (see package.json)

### In the browser

Run `npm run dev` and then point your favorite browser to [http://127.0.0.1:8001/test/index.html](http://127.0.0.1:8001/test/index.html).

The query param `?grep=mysearch` will search for tests matching `mysearch`.

### Automated browser tests

You can run e.g.

    CLIENT=selenium:firefox npm test
    CLIENT=selenium:phantomjs npm test

