const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/usuarios';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('connected', function() {
    console.log("mongoose default connection done");
});

db.on('error', function(err) {
    console.log('Mongoose default connection error');
});