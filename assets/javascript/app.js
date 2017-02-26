$(document).ready(function(){


//need a variable for time and answers
var time = 120;
var correct = 0;
var wrong = 0;
$('#gameboard').hide();
$('#finish').hide();



$('#startGame').click(function (){
	$('#start').hide();
	$('#gameboard').show();

		countDown();
		//have a timer count down from 120 seconds
	function countDown(){

		var setTime = setInterval(function() {
			if (time === 0){
				clearInterval(setTime);
				alert('Times UP!');
				checkAnswers();
			$('#gameboard').hide();	
			$('#correct').html(correct);
			$('#wrong').html(wrong);
			$('#finish').show();
			}else{
			time--;
			$('#time').html(time);}

		},1000);
	
	}

			//check to see if certain radio button is checked.
		function checkAnswers(){

			if ($('#23').is(':checked')){
				//alert('correct! MJ\'s number was 23!');
				correct++;

			} else{
				//alert('The correct answer was 23');
				wrong++;
			}


			if ($('#Killington').is(':checked')){
				//alert('correct! Killington, Vt is the "Beast of the East".');
				correct++;
			} else{
				//alert('The correct answer was Killington, Vt.');
				wrong++;
			}


			if ($('#ibsp').is(':checked')){
				//alert('correct! Island Beach State Park is the best beach in NJ!');
				correct++;
			} else{
				//alert('The correct answer was Island Beach State Park.');
				wrong++;

			}


			if ($('#web').is(':checked')){
				//alert('correct! Web Development is the best Job in the World!');
				correct++;
			} else{
				//alert('Awe comon\' you know the answer dumbass!');
				wrong++;
			}


		}
});



});