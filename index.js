let resizeTimeout;

function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateParallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax-window').each(function() {
        var initY = $(this).offset().top;
        var height = $(this).height();
        var visible = isInViewport(this);
        if (visible) {
            var diff = scrolled - initY;
            var ratio = Math.round((diff / height) * 100);
            $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px');
        }
    });
}

$(window).scroll(function() {
    if ($(window).width() > 775) {
        updateParallax();
    } else {
        $('.parallax-window').css({
            'background-attachment': 'scroll',
            'background-position': 'center'
        });
    }
});

$(window).resize(function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if ($(window).width() > 775) {
            $('.parallax-window').css({
                'background-attachment': 'fixed', 
                'background-position': 'center'
            });
            updateParallax(); 
        } else {
            $('.parallax-window').css({
                'background-attachment': 'scroll',
                'background-position': 'center'
            });
        }
    }, 250);
});


document.addEventListener("DOMContentLoaded", () => {
    $("h1").hide();
    $("#portfolio-title").hide();
    $("#arrow").hide();
    setTimeout(function() {
        $("h1").slideDown(1500);
        $("#portfolio-title").css("opacity", 0).slideDown(1500).animate({ opacity: 1 },{queue: false, duration: 3000});
      }, 300);
    setTimeout(function() {
        if ($(window).width() > 775) {
        $("#arrow").fadeIn("slow").animate({bottom: 20}).animate({bottom: 10}).animate({bottom: 20}).animate({bottom: 10});
      } else{
      $("#arrow").fadeIn("slow").animate({bottom: -20}).animate({bottom: -40}).animate({bottom: -20}).animate({bottom: -40});
    }
}, 4000);

})

$(window).scroll(() => {
    $("#arrow").hide();
})


$("#dropdownItems").hide();
$("#dropdownIcon").click(function () {
    $("#dropdownItems").slideToggle(200);
})


const listItems = document.querySelectorAll(".listItems");
const closeMenu = () => {
    $("#dropdownItems").hide();
}

Array.from(listItems).forEach(function(listItem) {
    listItem.addEventListener('click', closeMenu);
  });




  $("#scrollUp").hide();
  const myButton = document.getElementById("scrollUp");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }



  
  


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


const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field");
        return;
    }

    e.preventDefault(); 

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
            result.innerHTML = "<span>Thank you for your email!<span>";
            form.reset(); 
        } else {
            console.log(response);
            result.innerHTML = "<span>There was a problem with your submission.<span>";
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "<span>Something went wrong!<span>";
    })
    .finally(() => {
        setTimeout(() => {
            result.style.display = "none";
        }, 8000);
    });
});




$( document ).ready(function () {

    function updateContent() {
    if($(window).width()<900)
        {
           $("#website-project").html("<a href='https://www.malloryphillipsviolin.com' target='_blank'><img src='./assets/website.png' alt='Screenshot of MalloryPhillipsViolin.com'></a>");
           $("#honeyBearPizza").html("<a href='https://www.honeybearpizza.com' target='_blank'><img src='./assets/honeyBearPizza.png' alt='Screenshot of HoneyBearPizza.com'></a>");
           $("#cat-quiz").html("<a href='https://musicnotes93.github.io/CatQuiz/' target='_blank'><img src='./assets/catquiz.png' alt='Screenshot of the Cat Quiz Project'></a>");
           $("#simon-game").html("<a href='https://musicnotes93.github.io/SimonGameMobileFriendly/' target='_blank'><img src='./assets/simon.png' alt='Screenshot of the Simon Game'></a>");
           $("#library").html("<a href='https://musicnotes93.github.io/InteractiveLibrary/' target='_blank'><img src='./assets/library.png' alt='Screenshot of the Library Website'></a>");
           $("#planner").html("<a href='https://musicnotes93.github.io/DailyPlanner/' target='_blank'><img src='./assets/reactplanner.png' alt='Screenshot of the Planner App'></a>");
        } else {
            $("#website-project").html('<a href="https://www.malloryphillipsviolin.com" target="_blank"><video poster="./assets/website.png" id="video1" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/phillips.mov">Your browser does not support the video tag.</video></a>');
            $("#honeyBearPizza").html('<a href="https://www.honeybearpizza.com" target="_blank"><video poster="./assets/honeyBearPizza.png" id="video2" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/honeyBearVideo.mp4">Your browser does not support the video tag.</video></a>');
            $("#cat-quiz").html('<a href="https://musicnotes93.github.io/CatQuiz/" target="_blank"><video poster="./assets/catquiz.png" id="video3" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/catquiz2.mov">Your browser does not support the video tag.</video></a>');
            $("#simon-game").html('<a href="https://musicnotes93.github.io/SimonGameMobileFriendly/" target="_blank"><video poster="./assets/simon.png" id="video4" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/simongame2.mov">Your browser does not support the video tag.</video></a>');
            $("#library").html('<a href="https://musicnotes93.github.io/InteractiveLibrary/" target="_blank"><video poster="./assets/library.png" id="video5" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/libraryvid.mov">Your browser does not support the video tag.</video></a>');
            $("#planner").html('<a href="https://musicnotes93.github.io/DailyPlanner/" target="_blank"><video poster="./assets/reactplanner.png" id="video6" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./assets/reactvid.mov">Your browser does not support the video tag.</video></a>');
            
            for (let i=1; i<=6; i++) {
                $("#video" + i).on("mouseover", function() {
                    this.play().then(() => {
                        $("#video" + i).on("mouseleave", function() {
                            this.pause();
                            this.currentTime = 0;
                            this.load(); 
                        });
                    })
                        .catch(error => {
                        if (error.name === 'AbortError') {
                          console.error('Playback was interrupted:', error);
                        } else {
                          console.error('Playback failed:', error);
                        }
                      });
                })
            }
        }
    
    }
    updateContent();
    



  


    $(window).resize(function() {
        updateContent();
    });
    });
    
    
    
       
      
    
    
        
        
        
        
        
