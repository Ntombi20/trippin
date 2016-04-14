module.exports = function(route, regNo){

var journey = [];

  route.forEach(function(travel){
    if (travel.RegistrationNumber == regNo) {
      var jour =  travel.Route;

      journey.push({
        Route: jour
      });
    };

  });

return journey;
};
