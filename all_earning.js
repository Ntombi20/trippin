module.exports = function(fare, regNo){

var allCost = 0;

  fare.forEach(function(moneyMade){

        allCost = allCost + moneyMade.Trips * moneyMade.Fare;


  })

return allCost;
};
