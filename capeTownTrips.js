module.exports = function(capeTrips){
    //trips did all the taxis made...
    var total = 0;

    capeTrips.forEach(function(town){
      total = total + town.Trips;
    });

    return total;
};
