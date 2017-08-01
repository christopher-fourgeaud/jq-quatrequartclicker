

$(document).ready(function(){
	var compteur= 0;
	var tableau=["Fait un jeu de dames","Fait un jeu d'echec","Fait Starcraft 3"]

	

	$(".cake-is-a-lie").click(function(){

		compteur++;

		$(".counter").html(compteur);

		var index = Math.floor(Math.random() * 3);

		
		if (compteur%20 === 0) {

			alert(tableau[index]);
		}


	});
	
});

