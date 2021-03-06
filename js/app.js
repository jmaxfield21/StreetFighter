$(document).ready( function() {
	$('.ryu').mouseenter( function() {
		$('.still').hide();
		$('.ready').show();
	})
	.mouseleave( function() {
		$('.ready').hide();
		$('.still').show();
	})
	.mousedown( function() {
		playHadouken();
		$('.ready').hide();
		$('.throwing').show();
		$('.hadouken').finish().show()
			.animate( {'left': '300px'}, 500,
				function() {
				    $(this).hide();
				    $(this).css('left', '-200px');
	  			}
			);
		})
	.mouseup( function() {
		$('.throwing').hide();
		$('.ready').show();
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}