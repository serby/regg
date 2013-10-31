var regg = require('../')

describe('regg', function () {

  describe('#init()', function () {

    it('should return a object with a register function', function () {
      var registry = regg()
      registry.register.should.be.type('function')
    })

    describe('#register()', function () {

      it('should throw error if no name is given', function () {
        var registry = regg();
        (function () {
          registry.register()
        }).should.throwError('You must provide a valid name for this entry.')
      })

      it('should return regg', function () {
        var registry = regg()
        registry.register('foo', 'bar').register.should.be.type('function')
      })

      it('should throw error if no entry is given', function () {
        var registry = regg();
        (function () {
          registry.register('Test')
        }).should.throwError('You must provide something to register as \'Test\'')
      })

      it('should throw error if entry is already defined', function () {
        var registry = regg()
        registry.register('Test', {});

        (function () {
          registry.register('Test', {})
        }).should.throwError('\'Test\' already registered')
      })

      it('should allow function entries', function () {
        var registry = regg()

        registry.register('createDog', function () {
          return {
            name: 'Dog'
          }
        })

        registry.get('createDog').should.be.type('function')
        registry.get('createDog')().name.should.equal('Dog')
      })

    })

  })

  describe('#get()', function () {

    it('should throw if name not found', function () {
      var registry = regg();
      (function () {
        registry.get('nope')
      }).should.throwError('No such entry \'nope\'')
    })

    it('should get registered items', function () {
      var registry = regg()
      registry.register('foo', 'bar')
      registry.get('foo').should.equal('bar')
    })

  })

  it('should be able to iterate through entries', function () {
    var registry = regg()
    registry.register('test', 'hello')
    registry.list().should.eql(['test'])
  })

  describe('Registered Entries', function () {

    it('should be as defined', function () {
      var registry = regg()
      var foo = 'bar'
      registry.register('foobar', foo)
      registry.get('foobar').should.equal('bar')
    })

  })
})