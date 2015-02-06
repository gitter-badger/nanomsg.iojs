var nano    = require('..')
var should  = require('should')
var semver  = require('semver')

describe('nanomsg.sockopt', function() {

  var req = nano.socket('req')
  var rep = nano.socket('rep')

  req.bind('tcp://127.0.0.1:44449')
  rep.connect('tcp://127.0.0.1:44449')

  it('should set tcp nodelay', function (done){

    req.setsockopt('NN_TCP','NN_TCP_NODELAY',1).should.equal(0)

    done()
  })

  it('should get tcp nodelay setting', function (done){

    req.getsockopt('NN_TCP','NN_TCP_NODELAY').should.equal(1)

    done()
  })
})
