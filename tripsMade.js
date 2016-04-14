module.exports = function(trip){

  var specific = 0;

  trip.forEach(function(specificTrips){
    if(specificTrips.RegistrationNumber == "CA 234 567"){
      specific = specific + specificTrips.Trips;
    }

    if(specificTrips.RegistrationNumber == "ND 234 567"){
      specific = specific + specificTrips.Trips;
    }
  });

  return specific;
};
