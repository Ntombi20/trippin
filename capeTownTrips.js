module.exports = function(capeTownTaxis){
    //trips did all the taxis made...
    var total = 0;

    capeTownTaxis.forEach(function(cape){
      total = total + cape.Trips;
    });

    return total;
};
