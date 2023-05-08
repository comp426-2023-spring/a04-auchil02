export {rps,rpsls};

function rps(shot) {
	// assign opponent shot
	let oppShot = Math.floor(Math.random(3));
	if (oppShot == 0) {
		oppShot = "rock"
	} else if (oppShot == 1) {
		oppShot = "paper"
	} else {
		oppShot = "scissors"
	}
	
	// if called without argument, return only the shot for one player
	if (shot == undefined) {
		return {
			player: oppShot
		}
	}
	
	// match playerShot argument to oppShot formatting for comparisons
	let playerShot = shot.toLowerCase();
	
	// make sure it's not lizard or spock
	if (playerShot == "lizard" || playerShot == "spock") {
		console.error("Range error: wrong game, use rock, paper, or scissors!");
	}
	
	// make sure it's rock, paper, or scissors
	if (playerShot != "rock" && playerShot != "paper" && playerShot != "scissors") {
		console.error("Range error: use rock, paper, or scissors!");
		throw new RangeError();
	}
	
	let result;
	if ((playerShot == "rock" && oppShot == "scissors") || (playerShot == "paper" && oppShot == "rock") ||(playerShot == "scissors" && oppShot == "paper")) {
		result = "win";
	} else if (playerShot == oppShot) {
		result = "tie";
	} else {
		result = "lose";
	}
	
	return {
		player: playerShot,
		opponent: oppShot,
		result: result
	}
}

function rpsls(shot) {
	// assign oppShot
	let oppShot = Math.floor(Math.random(5));
	if (oppShot == 0) {
		oppShot = "rock";
	} else if (oppShot == 1) {
		oppShot = "paper";
	}else if (oppShot == 2) {
		oppShot = "scissors";
	}else if (oppShot == 3) {
		oppShot = "lizard";
	}else {
		oppShot = "spock";
	}
	
	// return oppshot if no argument
	if (shot == undefined) {
		return {
			player: oppShot
		}
	}
	
	let playerShot = shot.toLowerCase();
	
	if (playerShot != "rock" && playerShot != "paper" && playerShot != "scissors" && playerShot != "lizard" && playerShot != "spock") {
		console.error("Range error: use rock, paper, scissors, lizard, or spock!");
		throw new RangeError();
	}
	
	let result;
	if ((playerShot == "scissors" && oppShot == "paper") || (playerShot == "paper" && oppShot == "rock") || (playerShot == "rock" && oppShot == "lizard") ||
		(playerShot == "lizard" && oppShot == "spock") || (playerShot == "spock" && oppShot == "scissors") || (playerShot == "scissors" && oppShot == "lizard") ||
		(playerShot == "lizard" && oppShot == "paper") || (playerShot == "paper" && oppShot == "spock") || (playerShot == "spock" && oppShot == "rock") ||
		(playerShot == "rock" && oppShot == "scissors")) {
		result = "win";
	} else if (playerShot == oppShot) {
		result = "tie";
	} else {
		result = "lose";
	}
	
	return {
		player: playerShot,
		opponent: oppShot,
		result: result
	}
}