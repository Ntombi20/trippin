var assert = require("assert");
var capeTownTrips = require('../capeTownTrips');
var minimum = require('../minimum');
var records = require('../records');
var tripsMade = require('../tripsMade');
var routes = require('../routes');
var earn = require('../earn');
var all_earning = require('../all_earning');

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

    var regNo = "CA 123 456";
    var record = records(capeTownTaxis, regNo);

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

    var regNo = "ND 123 456";
    var record = records(durbanTaxis, regNo);

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

    var regNo = "CA 234 567"

    var trip = tripsMade(capeTownTaxis, regNo);

    assert.equal(trip, 11);
  });

  it("should return trips made by ND 234 567", function() {

    var regNo = "ND 234 567"

    var trip = tripsMade(durbanTaxis, regNo);

    assert.equal(trip, 36);
  });


  it("should return the names of all the routes that CA 345 678 took", function() {

    var regNo = "CA 345 678";

    var route = routes(capeTownTaxis, regNo);

    var expectedRoutes = [
      {
        "Route": "Cape Town - Langa"
      },
      {
        "Route": "Cape Town - Cape Town"
      }
    ];

    assert.deepEqual(route, expectedRoutes);
  });

  it("should return the names of all the routes that ND 345 678 took", function() {

    var regNo = "ND 345 678"

    var route = routes(durbanTaxis, regNo);

    var expectedRoutes = [
      {
        "Route": "Durban - Umbilo"
      },
      {
        "Route": "Durban - University of KZN"
      },
      {
        "Route": "Durban - Umlazi Station"
      }
    ];

    assert.deepEqual(route, expectedRoutes);
  });


  it("should return the total earnings for CA 234 567", function() {

    var regNo = "CA 234 567"

    var fare = earn(capeTownTaxis, regNo);

    assert.equal(fare, 132);
  });

  it("should return the total earnings for ND 234 567", function() {

    var regNo = "ND 234 567"

    var fare = earn(durbanTaxis, regNo);

    assert.equal(fare, 72);
  });


  it("should return the total earnings for the taxis in Cape Town", function() {

  //  var regNo = capeTownTaxis.RegistrationNumber;

    var fare = all_earning(capeTownTaxis);

    assert.equal(fare, 615);
  });

  it("should return the total earnings for the taxis in Durban", function() {

    //var regNo = durbanTaxis.RegistrationNumber;

    var fare = all_earning(durbanTaxis);

    assert.equal(fare, 1123);
  });


});
