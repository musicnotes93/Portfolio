window.addEventListener("DOMContentLoaded", function(){
    $("h1").hide().slideDown(1000);
    $("#portfolio-title").hide();
    $("#arrow").hide();
    setTimeout(function() {
        $("#portfolio-title").css("opacity", 0).slideDown(1000).animate({ opacity: 1 },{queue: false, duration: 3000});
}, 500);
    setTimeout(function() {
        $("#arrow").fadeIn("slow").animate({bottom: 110}).animate({bottom: 100}).animate({bottom: 110}).animate({bottom: 100});
    }, 4000);
    
});



$(window).on('mousemove', function(e){
    if(e.offsetY > $(this).height() - 200){      
      $("#arrow").animate({bottom: 110}).animate({bottom: 100});
    } else {
    $("#arrow").stop(true, true);
    }
  });


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('#intro').css({
        'opacity': ((height - scrollTop) / height)
    }); 
});

$("#video").mouseout(function() {
    $("#video").get(0).currentTime = 0;
})

$("#video2").mouseout(function() {
    $("#video2").get(0).currentTime = 0;
})

$("#video3").mouseout(function() {
    $("#video3").get(0).currentTime = 0;
})

document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});


	const allAnimatedElements = document.querySelectorAll('.animate');


	allAnimatedElements.forEach((element) => observer.observe(element));

});






