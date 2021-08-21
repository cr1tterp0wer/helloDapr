const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({type: 'application/*+json'}));

const port = 3000;

// Tell DAPR what we want to subscribe to
//Subscriber has to indicate what messages it wants
//Dapr registers this data from this subscriber
app.get('/dapr/subscribe', (_req, res) => {
	res.json([
		{
			"pubsubname": "pubsub-servicebus",
			"topic": "sampleTopic",
			"route": "/sampler"
		}
	]);
});

// Dapr will psot to this route '/sampler' when
// a new pubsub event is triggered so that
// the subscriber receives it
app.post('/sampler', (req, res) => {
	console.log(`message on SampleTopic: ${req.body}`);
	return res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`nodeJS Subscriber on ${port}`);
});
