describe("Shopping Cart", function() {

	before(function() {
		browser.url("/index.html");
		return browser;
	});

	it("should return the correct size and quantity", function() {
		return browser
      .click('.learn-more')
      .click('//*[@id="size-select"]/option[2]')
      .setValue('#quantity-select', 23)
      .click('#buy-now')
      .getCookie('quantity').then(function(quantity) {
        quantity.value.should.be.equal('23');
        console.log("Quantity Value:", quantity.value);
      })
      .getCookie('size').then(function(size) {
        size.value.should.be.equal('2');
        console.log("Size Value:", size.value);
      })
	});
});
