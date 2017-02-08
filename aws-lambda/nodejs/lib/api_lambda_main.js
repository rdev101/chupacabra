var DB_CONNECTION = require('./props/const.js').DB_CONNECTION;
var ResponseHandler = require('./utils/response_handler.js');
var DBController = require('./controllers/db_controller.js');
var dbController = new DBController(DB_CONNECTION);


//handler for fetch all clients
exports.fetchClientData = function(event, context, callback) {
  console.log("fetchClient requested");
  var responseHandler = new ResponseHandler(callback);
  dbController.fetchAllClients(responseHandler);
}
