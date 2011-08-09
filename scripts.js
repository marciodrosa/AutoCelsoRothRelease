
var release;

$(document).ready(init);

function init()
{
	$("#header").hide();
	$("#header").slideToggle("400");
	
	release = $("#release").html();
}

function gremio()
{
	this.name = "Grêmio";
	this.usualName = "Grêmio";
	this.nickName = "gremista";
	this.rival = "Internacional";
	this.wick = "gremista";
}

function inter()
{
	this.name = "Internacional";
	this.usualName = "Inter";
	this.nickName = "colorado";
	this.rival = "Grêmio";
	this.wick = "colorada";
}

function replaceTagsWithTeamAttributes(text, team)
{
	text = text.replace(/#name/gi, team.name);
	text = text.replace(/#usualname/gi, team.usualName);
	text = text.replace(/#nickname/gi, team.nickName);
	text = text.replace(/#rival/gi, team.rival);
	text = text.replace(/#wick/gi, team.wick);
	return text;
}

function createGenericRelease(team)
{	
	var modifiedRelease = replaceTagsWithTeamAttributes(release, team);
	
	$("#release").html(modifiedRelease);
	$("#release").css("visibility", "visible");
	$("#release").hide();
	$("#release").fadeIn("slow");
}

function showGremioRelease()
{
	createGenericRelease(new gremio);
}

function showInternacionalRelease()
{
	createGenericRelease(new inter);
}
