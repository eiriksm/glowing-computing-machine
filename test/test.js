require('should');
var a = require('..');


describe('App functionality', function() {
  it('Should return the expected value', function(done) {
    a(1.050, 1.010).toFixed(2).should.equal('5.24');
    done();
  });
  it('Should complain', function(done) {
    (function() {a()}).should.throw();
    done();
  });
})  ;
