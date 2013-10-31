/**
 * Paul Serby <paul@serby.net>
 *
 * New BSD Licensed
 *
 * Sunday 31 March 2013
 *
 */
module.exports = function regg() {

  var registry = {}
    , self =
      { register: register
      , list: list
      , get: get
      }

  /**
   * Registers a entry and make it read only
   * @param {String} name To get the entry by
   * @param {Object} entry What you want to register
   */
  function register(name, entry) {

    if (!name) {
      throw new Error('You must provide a valid name for this entry.')
    }

    if (registry[name] !== undefined) {
      throw new Error('\'' + name + '\' already registered')
    }

    if (!entry) {
      throw new Error('You must provide something to register as \'' + name + '\'')
    }

    registry[name] = entry

    return self
  }

  function get(name) {

    if (!registry.hasOwnProperty(name)) {
      throw new Error('No such entry \'' + name + '\'')
    }
    return registry[name]
  }

  function list() {
    return Object.keys(registry)
  }

  return self
}