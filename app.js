$(document).ready(function(){
	//votre code
	console.log('qq bonjour !');
	var counter = 0;

	$('.counter span').click(function(){
		counter++;
		$(this).text(counter);
	});


});