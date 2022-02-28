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

function cookie()
{
	cookies = document.getElementById("cookie-count");
	cookies.innerHTML = int(cookies) + 1;
}


