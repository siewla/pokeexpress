const express = require ('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

require('./router/routes')(app);

app.listen(port, () => {
    console.log('Listening to PORT', port);
});