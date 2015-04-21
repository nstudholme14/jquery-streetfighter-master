$(document).ready(function(){
	
	$('.ryu').mouseenter(function() {
		console.log ('hello');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		console.log ('bye');
		$('.ryu-ready').hide(); 
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken(); 
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();	
		$('.hadouken').finish().show().animate(
			{'left': '1000px'}, 
			500, 
			function () {
				$(this).hide();
				$(this).css('left', '500px');
			}
			);
		})

	.mouseup (function(){
			$('.ryu-throwing').hide();
			$('.ryu-ready').show(); 
		});

	
	function playHadouken() {
		$('#hadouken-sound') [0].volume=0.5;
		$('#hadouken-sound') [0].load();
		$('#hadouken-sound') [0].play(); 
			}
		
});




 $(document).keydown(function(e) {
    if (e.keyCode == 88) {
    	console.log ('test');
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }   
  })

 .keyup(function(e) {
    if (e.keyCode == 88) {
    	console.log ('test2');
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }
  });






