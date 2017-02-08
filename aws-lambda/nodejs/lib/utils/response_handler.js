

function ResponseHandler(callback){
  this.callback = callback;
}

ResponseHandler.prototype.successResponse = function(responseData){
  console.log(JSON.stringify(responseData));
  var data = {
    data : responseData
  }
  this.callback(null, data);
}

ResponseHandler.prototype.errorResponse = function(operation, responseError){
  console.error(responseError);
  this.callback(new Error(operation + " Failed"));
}

module.exports = ResponseHandler;
