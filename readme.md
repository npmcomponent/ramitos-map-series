*This repository is a mirror of the [component](http://component.io) module [ramitos/map-series](http://github.com/ramitos/map-series). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-map-series`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# map-series

[![NPM version](https://badge.fury.io/js/map-series.png)](http://badge.fury.io/js/map-series)
[![Build Status](https://secure.travis-ci.org/ramitos/map-series.png)](http://travis-ci.org/ramitos/map-series)
[![Dependency Status](https://gemnasium.com/ramitos/map-series.png)](https://gemnasium.com/ramitos/map-series)
[![Coverage Status](https://coveralls.io/repos/ramitos/map-series/badge.png?branch=master)](https://coveralls.io/r/ramitos/map-series?branch=master)
[![Code Climate](https://codeclimate.com/github/ramitos/map-series.png)](https://codeclimate.com/github/ramitos/map-series)

## install

```bash
npm install [--save/--save-dev] map-series
```

```bash
component install ramitos/map-series
```

## api

```js
var map = require('map-series')

map([1, 3, 2], function (x, callback) {
  setTimeout(function(){
    callback(null, x*2)
  }, x*25)
}, function (err, results){
  if(err) throw err
  console.log(results) //=> [2, 6, 4]
})
```

## license

MIT