#!/usr/bin/env node

import { rpsls } from '../lib/rpsls.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const helpMenu = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
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
	console.log(JSON.stringify(rpsls(playerShot)))
} catch (error) {
	console.log(helpMenu);
	console.log(rules);
	process.exit(1);
}