$.get("./getProfil.php?name=senbonzakura38")
.done( function(data){
	profil = jQuery.parseJSON(data);
	$( "#ddragon" ).text(profil.name );
	$("#icon").attr("src", "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/"+profil.profileIconId+".png");

	//<if ("#icon ="ddragon.png.") {src ddragon.png};
	console.log(profil);
	console.log(profil.name);
});
/*
$.get("./getProfil.php?name=senbonzakura38")
.done( function(data){
	summonerLevel = jQuery.parseJSON(data);
	$( "#senbonzakura38" ).text(profil.name );
	$("#icon").attr("src", "NEJd0YVo0J_eiTWCIrt413_ufSg_4bpQC-OkPjZgPUjqw60"+profil.profileIconId+".png");

	//<if ("#icon ="ddragon.png.") {src ddragon.png};
	console.log(profil);
	console.log(profil.name);
});*/
$("#bouton").click (function (argument){
	pseudo= $("#name").val();
	console.log("pseudo:"+pseudo);
});