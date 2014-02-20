var series = require('component-array-series'),
    map = require('ianstormtaylor-map')

module.exports = function (array, iterator, callback) {
  var results = [];
  var stack = map(array, function (val){
    return function (callback) {
      iterator(val, function (err, new_value){
        results.push(new_value)
        callback(err)
      })
    }
  })

  series(stack, function (err) {
    callback(err, results)
  })
}