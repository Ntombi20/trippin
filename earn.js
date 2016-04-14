module.exports = function(fare, regNo){

var cost = 0;

  fare.forEach(function(prices){
    if (prices.RegistrationNumber == regNo) {
      cost = prices.Fare * prices.Trips;
    };
  });

return cost; 
};
