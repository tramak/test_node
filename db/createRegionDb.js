let KladrApi = require('../libs/kladrapi');
let alphabet = require('../libs/alphabet');
let Region = require('../models/Region');

function createRegionDb() {
  const Kladr = new KladrApi();
  const alp = alphabet();

  Region.deleteMany({}, function(err) {
    if(err) throw err;
  });

  let q = {query: '', contentType: 'region'};
  alp.forEach(function(val) {
    q.query = val;
    Kladr.getData(q, (err, result)=> {
      result['result'].forEach(function(item) {
        if(item.typeShort === 'Респ' || item.typeShort === 'г') {
          item.label = item.type + ' ' + item.name;
        } else if(parseInt(item.id, 10) === 8600000000000) {
          item.label = item.name;
        } else {
          item.label = item.name + ' ' + item.type;
        }

        delete item.contentType;
        let region = new Region(item);
        region.save(function(err) {
          //if(err) throw err;
        });
      });
    });
  });
}
/*
function createRegionDb() {
  const Kladr = new KladrApi();
  const alp = alphabet();

  let q = {query: '', contentType: 'region'};
  MongoClient.connect('mongodb://127.0.0.1:27017/', function(err, db) {
    if(err) throw err;

    let dbo = db.db("gosapis");
    let regions = dbo.collection('regions');
    regions.remove({}, function(err, affected) {
      if(err) throw err;

      alp.forEach(function(val) {
        q.query = val;
        Kladr.getData(q, (err, result)=> {
          result['result'].forEach(function(item) {
            regions.insertOne(item, function(err, docs) {
              if(err) throw err;
            });
          });
        });
      });
    });
  });
}
*/

createRegionDb();