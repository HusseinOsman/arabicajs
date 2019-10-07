# [<img title="Arabica.js" src="https://github.com/HusseinOsman/arabicajs/blob/master/public/images/arabica.png" width="610px" height="300px" alt="Arabica logo"/>](https://arabicajs.com)

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
# [<img title="waterline-logo" src="http://i.imgur.com/3Xqh6Mz.png" width="610px" alt="Waterline logo"/>](http://waterlinejs.org)

[![Master Branch Build Status](https://travis-ci.org/balderdashy/waterline.svg?branch=master)](https://travis-ci.org/balderdashy/waterline)
[![Master Branch Build Status (Windows)](https://ci.appveyor.com/api/projects/status/tdu70ax32iymvyq3?svg=true)](https://ci.appveyor.com/project/mikermcneil/waterline)
[![StackOverflow (waterline)](https://img.shields.io/badge/stackoverflow-waterline-blue.svg)]( http://stackoverflow.com/questions/tagged/waterline)
[![StackOverflow (sails)](https://img.shields.io/badge/stackoverflow-sails.js-blue.svg)]( http://stackoverflow.com/questions/tagged/sails.js)

Waterline is a next-generation storage and retrieval engine, and the default ORM used in the [Sails framework](https://sailsjs.com).

It provides a uniform API for accessing stuff from different kinds of [databases and protocols](https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters). That means you write the same code to get and store things like users, whether they live in MySQL, MongoDB, neDB, or Postgres.

Waterline strives to inherit the best parts of ORMs like ActiveRecord, Hibernate, and Mongoose, but with a fresh perspective and emphasis on modularity, testability, and consistency across adapters.

## No more callbacks

Starting with v0.13, Waterline takes full advantage of ECMAScript & Node 8's `await` keyword.

**In other words, [no more callbacks](https://gist.github.com/mikermcneil/c1028d000cc0cc8bce995a2a82b29245).**

```js
var newOrg = await Organization.create({
  slug: 'foo'
})
.fetch();
```

check following list of available adapters

## Waterline adapters

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
    <!-- MongoDB -->
    <tr>
      <td><a href="http://www.mongodb.org"><img width="16" height="16" src="https://www.mongodb.com/assets/images/global/favicon.ico" alt="MongoDB" /></a> MongoDB</td>
      <td><a href="https://github.com/balderdashy/sails-mongo">sails-mongo</a></td>
      <td><a href="https://github.com/mikermcneil">Mike McNeil</a></td>
      <td><a href="https://travis-ci.org/balderdashy/waterline"><img src="https://travis-ci.org/balderdashy/waterline.svg?branch=master" alt="Build Status" /></a></td>
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