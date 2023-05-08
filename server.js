!#/usr/bin/env node

import minimist from 'minimist';
import express, { JSON, URLencoded } from 'express';
import { rps,rpsls } from './lib/rpsls.js';

const argv = minimist(process.argv.slice(2));
const app = express();
const port = argv.port || 5000;

app.use(JSON());
app.use(URLencoded({extended: true}));

// root endpoint
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

// get
// rps no opp
app.get('/app/rps', (req, res) => {
	res.status(200).send(rps());
});

// rps opp
app.get('/app/rps', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

// rps urlencoded
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

// rps parameter endpoint
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
});

// rpsls no opp
app.get('/app/rpsls', (req, res) => {
	res.status(200).send(rpsls());
});

// rpsls opp
app.get('/app/rpsls', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

// rpsls urlencoded
app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

// rpsls parameter endpoint
app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
});

// rps json post
app.post('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body.shot));
});

// rpsls json post
app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
});

// nonexistent endpoint
app.get('*', (req, res) => {
	res.status(400).send("404 NOT FOUND");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});