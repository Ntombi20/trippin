module.exports = function(record){

  var records = []

  record.forEach(function(allRecords){
    if (allRecords.RegistrationNumber == "CA 123 456") {
        var record = allRecords;
        records.push(record);
    };

    if (allRecords.RegistrationNumber == "ND 123 456") {
        var record = allRecords;
        records.push(record);
    };
  });

  return records;
};
