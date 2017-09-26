const express = require('express');

const app = express();
let port = 8080;

// Make available static files
app.use('/', express.static(__dirname + '/examples'));
app.use('/dist', express.static(__dirname + '/dist'));

app.get('example1', (req, res) => {
	res.sendFile(__dirname + 'examples/example1/index.html');
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
})