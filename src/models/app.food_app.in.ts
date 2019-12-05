import { express } from 'express';
var bodyParser = require('body-parser')

const app = new express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(8080, () => {
    console.log('listening');

})


