# regg - Registry Pattern for JavaScript

[![NPM Details](https://nodei.co/npm/regg.png?stars&downloads)](https://npmjs.org/package/regg)

[![build status](https://api.travis-ci.org/serby/regg.png)](http://travis-ci.org/serby/regg) [![Greenkeeper badge](https://badges.greenkeeper.io/serby/regg.svg)](https://greenkeeper.io/)

**regg** helps keep your system decoupled by providing a central location where
your application information can be found by other parts of your application.

## Installation

     npm install regg

## Usage

Register your functions, objects, string etc using register().
Once registered with the service locator there is no way to change it.

```js
var regg = require('regg')()
var foo = 'bar'
regg.register('foobar', foo)

console.log(regg.get('foobar')) // bar

regg.register('logger', console.bind(console))

regg.logger.get('logger').info('Hello world') // Hello world
```

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)