describe("Home Page", function() {
  before(function() {
		browser.url("/index.html");
		return browser;
	});

	it("callout should look like baseline", function() {
		return browser
			.webdrivercss("callout",[
        {
			  	name: "callout",
			  	elem: ".callout",
			  	screenWidth: [320, 800]
			  }
      ],function(err, res) {
        expect(err).to.not.exist;
        expect(res.callout[0].isWithinMisMatchTolerance).to.equal(true);
        expect(res.callout[1].isWithinMisMatchTolerance).to.equal(true);
    })
	});

  it("our_agency should look like baseline", function() {
		return browser
			.webdrivercss("our_agency",[
        {
          name: "our_agency",
          elem: ".our-agency",
          screenWidth: [320, 800, 1200]
        }
      ],function(err, res) {
        expect(err).to.not.exist;
        expect(res.our_agency[0].isWithinMisMatchTolerance).to.equal(true);
        expect(res.our_agency[1].isWithinMisMatchTolerance).to.equal(true);
        expect(res.our_agency[2].isWithinMisMatchTolerance).to.equal(true);
    })
	});
});
