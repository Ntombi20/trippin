module.exports = function(record, regNo){
  var records = []

  record.forEach(function(allRecords){
   if(allRecords.RegistrationNumber == regNo) {
      var record = allRecords;
     records.push(record);
    };

  });

 return records;
};
