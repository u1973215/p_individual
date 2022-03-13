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

var numCookies = 0,
cookiesPerClick = 1,
upgradeRequirement = 25;

function ck()
{
    cookiesTxt = document.getElementById("cookie-count");
    numCookies += cookiesPerClick;
    cookiesTxt.textContent = numCookies;

	if (numCookies >= upgradeRequirement)
    {
		upgradeButton = document.getElementById("upgrade")
		upgradeButton.disabled = false;
	}
}

function upgrade()
{
	cookiesTxt = document.getElementById("cookie-count");
	cookiesPerClick *= 2;
	numCookies -= upgradeRequirement;
	cookiesTxt.textContent = numCookies;

	upgradeTxt = document.getElementById("upreq");
	upgradeRequirement *= 2;
	upgradeTxt.textContent = upgradeRequirement;

	upgradeButton = document.getElementById("upgrade")
	upgradeButton.disabled = true;
}


