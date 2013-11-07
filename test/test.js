var assert = require("assert")


describe('String', function(){
    var name;
    beforeEach(function() {
      name = "Brendan McGarrett"
    })

    it('should return Brendan McGarrett', function(){
        assert.equal(name,"Brendan McGarrett")
    })

    it('should have first name Brendan', function(){
        var nameSplit = name.split(' ');
        assert.equal(nameSplit[0],"Brendan");
    })

    it('should have last name McGarrett', function(){
        var nameSplit = name.split(' ');
        assert.equal(nameSplit[1],"McGarrett");
    })


})
