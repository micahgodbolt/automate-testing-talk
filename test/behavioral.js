describe("Shopping Cart", function() {
	it("should return the correct size and quantity", function() {
		return browser
      .url('http://localhost:8000')
      .click('[href="/our-product.html"]')
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
