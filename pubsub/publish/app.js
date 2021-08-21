const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const daprPort = 3500;
const topicName = process.env.TOPIC_NAME || "sampleTopic";
const publishURL = `http://localhost:${daprPort}/v1.0/publish/pubsub-servicebus/${topicName}`;
const timer = ms => new Promise(res => setTimeout(res, ms)); // Keep the container alive

var counter = 0;

//Constantly publish to the URL+METHOD+SERVCE above
var publishLoop = setInterval(() => {
		axios.post(publishURL, {
			operation: counter
	})
	.then((response) => {
		console.log('Message posted. Status = ' + response.status);
	})
	.catch((error) => {
		console.log('ERROR' + error.errno);
	})

	console.log("wait 5 seconds");
	counter++;
}, 15000);
