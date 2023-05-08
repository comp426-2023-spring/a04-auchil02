#!/usr/bin/env node

import { rps } from '../lib/rpsls.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const helpMenu = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

const rules = `Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`

if (argv.help || argv.h) {
	console.log(helpMenu);
	process.exit(0);
}

if (argv.r || argv.rules) {
	console.log(rules);
	process.exit(0);
}

const playerShot = argv._[0];

try {
	console.log(JSON.stringify(rps(playerShot)))
} catch (error) {
	console.log(helpMenu);
	console.log(rules);
	process.exit(1);
}