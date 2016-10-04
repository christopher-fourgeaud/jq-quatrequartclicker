$(document).ready(function(){
	//votre code
	console.log('qq bonjour !');
	var counter = 0;

	$('.counter span').click(function(){
		counter++;
		$(this).text(counter);

		var date = new Date().toISOString();
		var mod20 = counter%3;
		if(mod20 == 0){
			alert('Tu as cliqué ' + counter + ' fois. Il est ' +
				date + ', tu n\'as rien d\'autre à faire ?');
		}
	});


});