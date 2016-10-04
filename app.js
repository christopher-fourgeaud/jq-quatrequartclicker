$(document).ready(function(){
	//votre code
	console.log('qq bonjour !');
	var counter = 0;

	$('.counter span').click(function(){
		counter++;
		$(this).text(counter);

		var mod20 = counter%3;
		if(mod20 == 0){
			alert('Trouve une activité plus productive et va lire Eloquent Js');
		}
	});


});