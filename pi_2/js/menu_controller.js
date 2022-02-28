function start_game()
{
	name = prompt("User name");
	loadpage("./html/game.html");
}

function exit()
{
	if (name != "")
	{
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../"); // Return to Practiques menu
}

function options()
{
	// TODO: Open options menu
	console.log("Options menu button");
}

var count = 0;

function ck()
{
	cookies = document.getElementById("cookie-count");
	count += 1;
	cookies.innerHTML = count;
}


