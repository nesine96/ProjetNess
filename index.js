$.get("./getProfil.php?name=senbonzakura38")
.done( function(data){
	profil = jQuery.parseJSON(data);
	$( "#ddragon" ).text(profil.name );
	$("#icon").attr("src", "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/"+profil.profileIconId+".png");

	//<if ("#icon ="ddragon.png.") {src ddragon.png};
	console.log(profil);
	console.log(profil.name);
});