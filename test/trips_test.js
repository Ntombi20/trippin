var assert = require("assert");
var capeTownTrips = require('../capeTownTrips');
var minimum = require('../minimum');
var records = require('../records');



var capeTownTaxis = [
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  },
  {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
  }
];

describe("Cape Town Taxis", function(){

  it("should find the totally trips all the taxis made", function() {

    var capeTrips = capeTownTrips(capeTownTaxis);

    assert.equal(capeTrips, 54);
  });


  it("should find the lowest number of trips that any taxi in Cape Town made", function() {

    var min = minimum(capeTownTaxis);

    assert.equal(min, 9);
  });


  it("should find the records for CA 123 456?", function() {

    var record = records(capeTownTaxis);

    var expectedRecords = [
      {
        "RegistrationNumber": "CA 123 456",
        "Route": "Cape Town - Bellville",
        "Fare": 13,
        "Trips": 9
      },
      {
        "RegistrationNumber": "CA 123 456",
        "Route": "Cape Town - Gugulethu",
        "Fare": 12,
        "Trips": 11
      }
    ]
    assert.deepEqual(record, expectedRecords);
  });

});
