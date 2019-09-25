# [![Arabica.js logo](https://github.com/HusseinOsman/arabicajs/blob/master/public/images/arabica.png "Arabica.js")]

Arabica.js is a web framework that makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app & API development. 


## Installation By Docker-compose RECOMENDED &nbsp;
**With [docker](https://www.docker.com/) [installed](https://docs.docker.com/install/) [compose](https://docs.docker.com/compose/install/):**
```sh
# clone the latest stable release of arabicajs
$ git clone https://github.com/HusseinOsman/arabicajs.git
# enter to arabicajs clonned folder
$ cd arabicajs
# copy default .env.dev to .env and set your Environment variables
$ cp .env.dev .env
# build docker-compose image and run container for api for backend & db for mongo
$ docker-compose up -d --build
```



## Installation &nbsp;
**With [node](http://nodejs.org) [installed](http://nodejs.org/en/download):**
```sh
# clone the latest stable release of arabicajs
$ git clone https://github.com/HusseinOsman/arabicajs.git
# enter to arabicajs clonned folder
$ cd arabicajs
# install node packges
$ npm install
# for development mode and watch changing files by nodemon
$ npm run watch 
# for production mode 
$ npm run prod 
```

## Compatibility

Arabica is built on [Node.js](http://nodejs.org/), [Express](http://expressjs.com/) with [ES6](https://www.w3schools.com/js/js_es6.asp) support


The ORM, 
[JugglingDB](http://1602.github.io/jugglingdb/) is cross-db ORM for nodejs, providing
**common interface** to access most popular database formats.  Currently
supported are: mysql, sqlite3, postgres, mongodb, redis and
js-memory-storage (yep, self-written engine for test-usage only). You can add
your favorite database adapter, checkout one of the existing adapters to learn
how.

Jugglingdb also works on client-side (using WebService and Memory adapters),
which allows to write rich client-side apps talking to server using JSON API.

check following list of available adapters

## JugglingDB adapters

<table>
  <thead>
    <tr>
      <th>Database type</th>
      <th>Package name</th>
      <th>Maintainer</th>
      <th>Build status / coverage</th>
    </tr>
  </thead>
  <tbody>
    <!-- ArangoDB -->
    <tr>
      <td><a href="http://www.arangodb.org/"><img width="16" height="16" src="https://www.arangodb.com/wp-content/uploads/2016/03/small-1.png" style="vertical-align:middle" alt="ArangoDB" /></a> ArangoDB</td>
      <td><a href="https://github.com/m0ppers/jugglingdb-arango">jugglingdb-arango</a></td>
      <td><a href="https://github.com/m0ppers">Andreas Streichardt</a></td>
      <td><a href="https://travis-ci.org/m0ppers/jugglingdb-arango"><img src="https://travis-ci.org/m0ppers/jugglingdb-arango.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- Firebird -->
    <tr>
      <td><a href="http://firebirdsql.org"><img src="http://firebirdsql.org/favicon.ico" alt="Firebird"/></a> Firebird</td>
      <td><a href="http://github.com/hgourvest/jugglingdb-firebird">jugglingdb-firebird</a></td>
      <td><a href="http://github.com/hgourvest">Henri Gourvest</a></td>
    </tr>
    <!-- MongoDB -->
    <tr>
      <td><a href="http://www.mongodb.org"><img width="16" height="16" src="https://www.mongodb.com/assets/images/global/favicon.ico" alt="MongoDB" /></a> MongoDB</td>
      <td><a href="https://github.com/jugglingdb/mongodb-adapter">jugglingdb-mongodb</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/mongodb-adapter"><img src="https://circleci.com/gh/jugglingdb/mongodb-adapter.svg?&style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/mongodb-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/mongodb-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- MySQL -->
    <tr>
      <td><a href="http://www.mysql.com/"><img width="16" height="16" src="http://www.mysql.com/common/themes/sakila/favicon.ico" style="vertical-align:middle"" alt="MySQL" /></a> MySQL</td>
      <td><a href="https://github.com/jugglingdb/mysql-adapter">jugglingdb-mysql</a></td>
      <td><a href="https://github.com/dgsan">dgsan</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/mysql-adapter"><img src="https://circleci.com/gh/jugglingdb/mysql-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/mysql-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/mysql-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- CouchDB / nano -->
    <tr>
      <td><a href="http://couchdb.apache.org/"><img width="16" src="http://couchdb.apache.org/favicon.ico" style="vertical-align:middle"" alt="CouchDB" /></a> CouchDB / nano</td>
      <td><a href="https://github.com/jugglingdb/nano-adapter">jugglingdb-nano</a></td>
      <td><a href="https://github.com/nrw">Nicholas Westlake</a></td>
      <td><a href="https://travis-ci.org/jugglingdb/nano-adapter"><img src="https://travis-ci.org/jugglingdb/nano-adapter.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- PostgreSQL -->
    <tr>
      <td><a href="http://www.postgresql.org/"><img src="http://www.postgresql.org/favicon.ico" style="vertical-align:middle"" alt="PostgreSQL" /></a> PostgreSQL</td>
      <td><a href="https://github.com/jugglingdb/postgres-adapter">jugglingdb-postgres</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/postgres-adapter"><img src="https://circleci.com/gh/jugglingdb/postgres-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/postgres-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/postgres-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- Redis -->
    <tr>
      <td><a href="http://redis.io/"><img src="http://redis.io/images/favicon.png" alt="Redis" /></a> Redis</td>
      <td><a href="https://github.com/jugglingdb/redis-hq-adapter">jugglingdb-redis-hq</a></td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/redis-hq-adapter"><img src="https://circleci.com/gh/jugglingdb/redis-hq-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/redis-hq-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/redis-hq-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <!-- RethinkDB -->
    <tr>
      <td><a href="http://www.rethinkdb.com/"><img src="http://www.rethinkdb.com/favicon.ico" alt="RethinkDB" width="16" height="16" /></a> RethinkDB</td>
      <td><a href="https://github.com/fuwaneko/jugglingdb-rethink">jugglingdb-rethink</a></td>
      <td><a href="https://github.com/fuwaneko">Tewi Inaba</a></td>
      <td><a href="https://travis-ci.org/fuwaneko/jugglingdb-rethink"><img src="https://travis-ci.org/fuwaneko/jugglingdb-rethink.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <!-- SQLite 3 -->
    <tr>
      <td><a href="http://www.sqlite.org/"><img width="16" src="https://www.sqlmaestro.com/data/181/1249905374-32x32.gif" style="vertical-align:middle" alt="SQLite" /></a> SQLite</td>
      <td><a href="https://github.com/jugglingdb/sqlite3-adapter">jugglingdb-sqlite3</a></td>
      <td><a href="https://github.com/anatoliychakkaev">Anatoliy Chakkaev</a></td>
      <td><a href="https://circleci.com/gh/jugglingdb/sqlite3-adapter"><img src="https://circleci.com/gh/jugglingdb/sqlite3-adapter.svg?style=shield" alt="Build Status" /></a> <a href='https://coveralls.io/github/jugglingdb/sqlite3-adapter?branch=master'><img src='https://coveralls.io/repos/github/jugglingdb/sqlite3-adapter/badge.svg?branch=master' alt='Coverage Status' /></a></td>
    </tr>
    <tr>
      <td>WebService</td>
      <td>built-in</td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>Memory (bogus)</td>
      <td>built-in</td>
      <td><a href="https://github.com/1602">Anatoliy Chakkaev</a></td>
      <td>n/a</td>
    </tr>
    <!-- DynamoDB -->
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Amazon_DynamoDB"> DynamoDB </a></td>
      <td><a href="https://github.com/tmpaul/jugglingdb-dynamodb">jugglingdb-dynamodb</a></td>
      <td><a href="https://github.com/tmpaul">tmpaul</a></td>
      <td><a href="https://travis-ci.org/tmpaul/jugglingdb-dynamodb"><img src="https://travis-ci.org/tmpaul/jugglingdb-dynamodb.svg?branch=master" alt="Build Status" /></a></td>
    </tr>
    <tr>
      <td><a href="http://www.microsoft.com/en-ca/server-cloud/products/sql-server/">SQL Server<a></td>
      <td><a href="https://github.com/Quadrus/jugglingdb-mssql">jugglingdb-mssql</a></td>
      <td><a href="https://github.com/Quadrus">Quadrus</a></td>
      <td>n/a</td>
    </tr>
    <tr>
      <td><a href="https://msdn.microsoft.com/en-us/library/azure/jj553018.aspx">Azure Table Storage<a></td>
      <td><a href="https://github.com/yads/jugglingdb-azure-tablestorage">jugglingdb-azure-tablestorage</a></td>
      <td><a href="https://github.com/yads">Vadim Kazakov</a></td>
      <td>n/a</td>
    </tr>

  </tbody>
</table>


## Support
Need help or have a question?
- [Contact me](mailto:hussein.mostafa.osman@gmail.com?Subject=Arabicajs)

## Contribute

## Team
[![Hussein Osman](https://s.gravatar.com/avatar/621333958991bfd79d943adda71acabb)](https://www.linkedin.com/in/husseinosman86/) |   |   |   |   |  
:---:|:---:|:---:|:---:|:---:
[Hussein Osman](http://github.com/HusseinOsman) | |  |  |  |
 | | |
 | | |
 | | |


## License
[MIT License](https://opensource.org/licenses/MIT)  Copyright © 2019-present