describe('numToWords', function(){
  it('should work for single digit numbers', function() {
    numToWords(1).should.equal("one");
  });
  it('work for double digit numbers below twenty', function(){
    numToWords(13).should.equal("thirteen");
  });
  it('should work for double digit numbers above twenty', function() {
    numToWords(21).should.equal("twenty one");
  });
  it('should work for double digit numbers ending in 0', function() {
    numToWords(30).should.equal("thirty");
  });
  it("should work for triple digit numbers", function() {
    numToWords(111).should.equal("one hundred eleven");
  });
  it("should work for exact hundreds", function() {
    numToWords(100).should.equal("one hundred");
  });
  it("should work for large numbers", function() {
    numToWords(56201).should.equal("fifty six thousand two hundred one");
  })
  it("should work for really large numbers", function() {
    numToWords(21458794720025).should.equal("twenty one trillion four hundred fifty eight billion seven hundred ninety four million seven hundred twenty thousand twenty five")
  })
});

  
