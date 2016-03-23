var expect = chai.expect;
var should = chai.should();


describe('getShipping()', function() {
  it('should return correct shipping for under 100 units', function() {
    expect(calcShipping(2, 50)).to.equal(100);
  });
  it('should return correct shipping for over 100 units', function() {
    expect(calcShipping(2, 150)).to.equal(200);
  });
  it('should return correct shipping for under 100 large units', function() {
    expect(calcShipping(4, 50)).to.equal(200);
  });
  it('should return correct shipping for over 100 large units', function() {
    expect(calcShipping(4, 150)).to.equal(600);
  });
});
