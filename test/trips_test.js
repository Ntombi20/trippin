var assert = require("assert");
var capeTownTrips = require('../capeTownTrips');
var minimum = require('../minimum');
var records = require('../records');
var tripsMade = require('../tripsMade');




var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];

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

describe("Cape Town Taxis and Durban Taxis", function(){

  it("should find the totally trips all the taxis made in Cape Town", function() {

    var capeTrips = capeTownTrips(capeTownTaxis);

    assert.equal(capeTrips, 54);
  });

  it("should find the totally trips all the taxis made in Durban", function() {

    var capeTrips = capeTownTrips(durbanTaxis);

    assert.equal(capeTrips, 117);
  });


  it("should find the lowest number of trips that any taxi in Cape Town made", function() {

    var min = minimum(capeTownTaxis);

    assert.equal(min, 9);
  });

  it("should find the lowest number of trips that any taxi in Durban made", function() {

    var min = minimum(durbanTaxis);

    assert.equal(min, 9);
  });


  it("should find the records for CA 123 456", function() {

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

  it("should find the records for  ND 123 456", function() {

    var record = records(durbanTaxis);

    var expectedRecords = [
      {
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - University of KZN",
        "Fare": 7,
        "Trips": 14
      },
      {
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - Umbilo",
        "Fare": 8,
        "Trips": 15
      }
    ]
    assert.deepEqual(record, expectedRecords);
  });


  it("should return trips made by CA 234 567", function() {

    var trip = tripsMade(capeTownTaxis);

    assert.equal(trip, 11);
  });

  it("should return trips made by ND 234 567", function() {

    var trip = tripsMade(durbanTaxis);

    assert.equal(trip, 36);
  });
  
});
