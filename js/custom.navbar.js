
	$(document).ready(function() {
		$(".dropdown-menu a").click(function(e) {
			e.preventDefault();
			if( $(this).hasClass("dropdown-menu") === true){
				return false;
			}

else {
		var tama  = $(this).attr('rel');
			$('.content-container').hide(); 
			$('#' + tama).load(tama + '.html').fadeIn("slow");
			
			}
		});
	});





	$(document).ready(function() {
		$(".navbar-nav a").click(function(e) {
			e.preventDefault();
			if( $(this).hasClass("nav") === true || $(this).hasClass("dropdown-toggle") === true ){
				return;
			}

else {
		var tama  = $(this).attr('rel');
			$('.content-container').hide(); 
			$('#' + tama).load(tama + '.html').fadeIn("slow");
			
			}
		});
	});








