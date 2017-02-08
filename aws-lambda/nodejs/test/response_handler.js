

function ResponseHandler(){}

ResponseHandler.prototype.successResponse = function(reponseData){
  console.log(reponseData);
}

ResponseHandler.prototype.errorResponse = function(operation, errorData){
  console.error(operation, errorData);
}

module.exports = ResponseHandler;
