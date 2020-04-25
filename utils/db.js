const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const config = require('config');

const db = config.get('mongoURI');

const connectDB  = async () => {
    try{
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });
        console.log('MongoDB connected');

    } catch(e){
        console.log('Could not connect to db..')
        console.error(e.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;

