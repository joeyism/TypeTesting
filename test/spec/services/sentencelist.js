'use strict';

describe('Service: sentenceList', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var sentenceList;
  beforeEach(inject(function (_sentenceList_) {
    sentenceList = _sentenceList_;
  }));

  it('should do something', function () {
    expect(!!sentenceList).toBe(true);
  });

});
