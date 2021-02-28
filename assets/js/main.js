// TASK

var teamName = 'Red Starts';
var teamLogo = 'https://img.favpng.com/9/20/15/red-star-clip-art-png-favpng-t1thQBw1T2NPXK3h1xKz84aWF.jpg';
var team = [
    {
        first_name: 'Hector',
        last_name: 'Bellerin',
        team: 'Red Starts',
        number: '1'
    },
    {
        first_name: 'Petr',
        last_name: 'Cech',
        team: 'Red Starts',
        number: '2'
    },
    {
        first_name: 'Olivier',
        last_name: 'Giroud',
        team: 'Red Starts',
        number: '3'
    },
    {
        first_name: 'Alex',
        last_name: 'Iwobi',
        team: 'Red Starts',
        number: '4'
    },
    {
        first_name: 'Laurent',
        last_name: 'Koscielny',
        team: 'Red Starts',
        number: '5'
    },
    {
        first_name: 'Mesut',
        last_name: 'Ozil',
        team: 'Red Starts',
        number: '6'
    },
    {
        first_name: 'Alexis',
        last_name: 'Sanchez',
        team: 'Red Starts',
        number: '7'
    },
    {
        first_name: 'Theo',
        last_name: 'Walcott',
        team: 'Red Starts',
        number: '8'
    },
    {
        first_name: 'Marcos',
        last_name: 'Alonso',
        team: 'Red Starts',
        number: '9'
    },
    {
        first_name: 'Cesar',
        last_name: 'Azpilicueta',
        team: 'Red Starts',
        number: '10'
    },
    {
        first_name: 'Gary',
        last_name: 'Cahill',
        team: 'Red Starts',
        number: '11'
    },
    {
        first_name: 'Diego',
        last_name: 'Costa',
        team: 'Red Starts',
        number: '12'
    },
    {
        first_name: 'Thibaut',
        last_name: 'Courtois',
        team: 'Red Starts',
        number: '13'
    },
    {
        first_name: 'Eden',
        last_name: 'Hazard',
        team: 'Red Starts',
        number: '14'
    },
    {
        first_name: 'Nemanja',
        last_name: 'Matic',
        team: 'Red Starts',
        number: '15'
    }
];

var players = shuffleTeam(team);
var firstSquadPlayers = players.slice(0, 11);
var substitutePlayers = players.slice(11);

function shuffleTeam(team) {
    for (var c = team.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = team[c];
        team[c] = team[b];
        team[b] = a;
    }
    return team;
};

function createPageStructure() {
    var main = document.createElement('main');
    document.body.prepend(main);

    var firstSquad = document.createElement('section');
    var secondSquad = document.createElement('section');
    firstSquad.setAttribute('id', 'first-squad');
    secondSquad.setAttribute('id', 'substite-squad');

    main.appendChild(firstSquad);
    main.appendChild(secondSquad);

    const header = document.createElement('header');
    document.body.prepend(header);
}

function createPageTitle(team) {
    var header = document.querySelector('header');
    header.innerHTML = '<h1>' + team + '</h1>'
    document.title = team;
}

function displayTeamLogo(logoImage) {
    var header = document.querySelector('header');
    var logo = document.createElement('img');
    logo.setAttribute('src', logoImage);
    header.appendChild(logo);
}

function createPlayers(team, element) {
    var element = document.getElementById(element);
    for (var i = 0; i < team.length; i++) {
        var player = '<div data-player="' + i + '" class="column"><div class="card"><div class="container"><div class="number">' + team[i].number + '</div><h2>' + team[i].first_name + ' ' + team[i].last_name + '</h2></div></div></div>';
        element.innerHTML = element.innerHTML + player;
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max - 0 + 1) + 0);
}

function changePlayers() {
    var firstSquad = document.getElementById('first-squad');
    var randomFirstPlayer = '[data-player="' + getRandomNumber(10) + '"]';
    var firstSquadPlayer = firstSquad.querySelector(randomFirstPlayer);
    var currentFirstPlayer = firstSquadPlayer.innerHTML;

    var substiteSquad = document.getElementById('substite-squad');
    var randomSubstitutePlayer = '[data-player="' + getRandomNumber(3) + '"]';
    var substituteSquadPlayer = substiteSquad.querySelector(randomSubstitutePlayer);

    firstSquadPlayer.innerHTML = substituteSquadPlayer.innerHTML;
    substituteSquadPlayer.innerHTML = currentFirstPlayer;
}

createPageStructure();
createPageTitle(teamName);
displayTeamLogo(teamLogo);
createPlayers(firstSquadPlayers, 'first-squad');
createPlayers(substitutePlayers, 'substite-squad');
setInterval(changePlayers, 60000);