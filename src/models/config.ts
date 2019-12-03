import { mongoose } from 'mongoose';

const connectionUrl = "mongodb + srv://bharaths:<bharaths143>@cluster0-o9ide.mongodb.net/test?retryWrites=true&w=majority";


var db = mongoose.connection;
mongoose.connect(connectionUrl, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connection");

    // we're connected!
});