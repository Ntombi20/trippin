module.exports = function(capeTownTaxis){

  var records = []

  capeTownTaxis.forEach(function(allRecords){
    if (allRecords.RegistrationNumber == "CA 123 456") {
        var record = allRecords;

        records.push(record);
    };
  });

  return records;
};
