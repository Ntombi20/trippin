module.exports = function(min){
// lowest number of trips that any taxi in Cape Town made
  var lowest = Infinity;

  min.forEach(function(low){
    if (lowest > low.Trips) {
      lowest = low.Trips;
    };
  });
   return lowest;
};
