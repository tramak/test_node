const Regions = require('../models/Region');

let regionItems = new Promise(function(resolve, reject) {
  Regions.find({}).exec(function(err, items) {
    console.log('items', items);
  });
});

//console.log('regionItems', regionItems);