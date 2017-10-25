var db = require('../config/db');



exports.create = function (price, stripetransactionid) {
    return db.row('addNewPurchase', [price, stripetransactionid]);
}

