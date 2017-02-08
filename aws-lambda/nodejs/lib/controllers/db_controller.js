var promise = require('promise');
var options = {
    promiseLib: promise
};
var pgp = require('pg-promise')(options);


function DBController(dbConnection){
  this.dbConnection = dbConnection;
  this.db = pgp(dbConnection);
}

DBController.prototype.fetchAllClients = function(responseHandler){
  this.db.any("SELECT id, first_name, last_name, street_address, city, postal_code from clients")
    .then(function(data){
      responseHandler.successResponse(data);
    })
    .catch(function(error){
      responseHandler.errorResponse("fetchAllClients",error);
    }).finally(function(){
      pgp.end();
    });
}


module.exports = DBController;
