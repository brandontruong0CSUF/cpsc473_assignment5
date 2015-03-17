var http = require("http");
var server;
var playerScore = 0;
var cpuScore = 0;
var ties = 0;


server = http.createServer(function (req, res) {

    var cpuChoice = Math.floor((Math.random() * 5) + 1);
    var playerChoice = 0;
    var playerWin = "";
    
    if (req.url === "/play/rock") {
        playerChoice = 1;
    }
    else if (req.url === "/play/paper") {
        playerChoice = 2;
    }
    else if (req.url === "/play/scissors") {
        playerChoice = 3;
    }
    else if (req.url === "/play/lizards") {
        playerChoice = 4;
    }
    else if (req.url === "/play/spock") {
        playerChoice = 5;
    }
    
    if (playerChoice === cpuChoice) {       // change to == later to test
        playerWin = "tie";
    }
    else if (playerChoice === 1) {
        if (cpuChoice === 2 || cpuChoice === 5) {
            playerWin = "lose";
        }
        else {
            playerWin = "win";
        }
    }
    else if (playerChoice === 2) {
        if (cpuChoice === 3 || cpuChoice === 4) {
            playerWin = "lose";
        }
        else {
            playerWin = "win";
        }
    }
    else if (playerChoice === 3) {
        if (cpuChoice === 1 || cpuChoice === 5) {
            playerWin = "lose";
        }
        else {
            playerWin = "win";
        }
    }
    else if (playerChoice === 4) {
        if (cpuChoice === 1 || cpuChoice === 3) {
            playerWin = "lose";
        }
        else {
            playerWin = "win";
        }
    }
    else if (playerChoice === 5) {
        if (cpuChoice === 1 || cpuChoice === 4) {
            playerWin = "lose";
        }
        else {
            playerWin = "win";
        }
    }
    
    if (playerWin === "") {
        res.end("");
    }
    else if (playerWin === "win") {
        playerScore += 1;
    }
    else if (playerWin === "tie") {
        ties += 1;
    }
    else {
        cpuScore += 1;
    }
    
    // Send back JSON object
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end( JSON.stringify({ "outcome": playerWin, "wins": playerScore, "losses": cpuScore, "ties": ties }) );

        	
});

server.listen(3000);

console.log("Server running at http://localhost:3000/");