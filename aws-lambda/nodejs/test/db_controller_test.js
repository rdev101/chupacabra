var  DB_CONNECTION = require('../lib/props/const.js').DB_CONNECTION;
var ResponseHandler = require('./response_handler.js');
var DBController = require('../lib/controllers/db_controller.js');

var dbController = new DBController(DB_CONNECTION);

var responseHandler = new ResponseHandler();

function testFetchAllClients(){
  dbController.fetchAllClients(responseHandler);
}


testFetchAllClients();
