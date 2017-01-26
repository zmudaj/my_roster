var Player = function(name, position, number){
    this.name = name,
    this.position = position,
    this.number = number
}

var playerRoster = [];

var russellWilson = new Player("Russell Wilson", "Quarter Back", 3);

playerRoster.push(russellWilson);

function addPlayer(event){
    event.preventDefault();
    var form = event.target;
    var newPlayer = new Player(form['player-name'].value, form['player-position'].value, form['player-number'].value);
    playerRoster.push(newPlayer);
    displayPlayers(playerRoster);
}

function displayPlayers(players){
    var template = ``;
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        template += 
            `
            <div class="player-card">
                <img src="darkFBPlayer.png">
                <p>${player.name}</p><p>${player.position}</p><p>${player.number}</p>
            </div>
            `
    }
    document.getElementById("players").innerHTML = template;
}

displayPlayers(playerRoster);