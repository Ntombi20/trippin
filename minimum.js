module.exports = function(capeTownTaxis){
// lowest number of trips that any taxi in Cape Town made
  var lowest = 100;

  capeTownTaxis.forEach(function(low){
    if (lowest > low.Trips) {
      lowest = low.Trips;
    };
  });
   return lowest;
};
