///<reference path="../typings/tsd.d.ts"/>


function add (a, b) { return a + b; };
function fn(){ throw('err')}


var expect = require('expect.js');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('some examle', function () {
      expect([1,2,3].indexOf(5)).to.be(-1);
      expect([1,2,3]).to.contain(1);
      expect('hello world').to.contain('world');
      expect([]).to.be.an('array');
      expect(1).to.eql('1');
      expect({ a: 'b' }).to.eql({ a: 'b' });
      expect([]).to.be.an('object'); // works too, since it uses `typeof`
      expect('4.3.4').to.match(/[0-9]+\.[0-9]+\.[0-9]+/);

      // constructors
      expect([]).to.be.an(Array);

    });

    it('should throwException', function () {
      expect(fn).to.throwError();
    });

    it('should expose a function', function () {
      expect(add).to.be.a('function');
    });

    it('should do math', function () {
      expect(add(1, 3)).to.equal(4);
    });

  });
});

