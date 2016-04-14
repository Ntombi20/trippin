module.exports = function(trip, regNo){

  var specific = 0;

  trip.forEach(function(specificTrips){
    if(specificTrips.RegistrationNumber == regNo){
      specific = specific + specificTrips.Trips;
    }
  });

  return specific;
};
