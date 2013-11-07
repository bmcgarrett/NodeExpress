var assert = require("assert")


describe('String', function(){
    var name;
    beforeEach(function() {
      name = "Brendan McGarrett"
    })

    it('should return Brendan McGarrett', function(){
        assert.equal(name,"Brendan McGarrett")
    })
})
