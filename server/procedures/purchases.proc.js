var db = require('../congig/db');



exports.create = function(productid, price, stripetransactionid) {
    return db.row('', [productid, price, stripetransactionid]);
} 

