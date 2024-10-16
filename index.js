window.addEventListener("DOMContentLoaded", function(){
    $("h1").hide().slideDown(1000);
    $("#portfolio-title").hide();
    $("#arrow").hide();
    setTimeout(function() {
        $("#portfolio-title").css("opacity", 0).slideDown(1000).animate({ opacity: 1 },{queue: false, duration: 3000});
}, 500);
    setTimeout(function() {
        $("#arrow").fadeIn("slow").animate({bottom: 40}).animate({bottom: 20}).animate({bottom: 40}).animate({bottom: 20});
    }, 4000);
});



$(window).on('mousemove', function(e){
    if(e.offsetY > $(this).height() - 200){      
      $("#arrow").animate({bottom: 40}).animate({bottom: 20});
    } else {
    $("#arrow").stop(true, true);
    }
  });





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
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "<span>Thank you for your email!<span>";
            } else {
                console.log(response);
                result.innerHTML = "<span>Thank you for your email!<span>";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 8000);
        });
});




$( document ).ready(function () {

    function updateContent() {
    if($(window).width()<900)
        {
           $("#website-project").html("<a href='https://www.malloryphillipsviolin.com' target='_blank'><img src='./website.png' alt='Screenshot of MalloryPhillipsViolin.com'></a>");
           $("#honeyBearPizza").html("<a href='https://www.honeybearpizza.com' target='_blank'><img src='./honeyBearPizza.png' alt='Screenshot of HoneyBearPizza.com'></a>");
           $("#cat-quiz").html("<a href='https://musicnotes93.github.io/CatQuiz/' target='_blank'><img src='./catquiz.png' alt='Screenshot of the Cat Quiz Project'></a>");
           $("#simon-game").html("<a href='https://musicnotes93.github.io/SimonGameMobileFriendly/' target='_blank'><img src='./simon.png' alt='Screenshot of the Simon Game'></a>");
           $("#library").html("<a href='https://musicnotes93.github.io/InteractiveLibrary/' target='_blank'><img src='./library.png' alt='Screenshot of the Library Website'></a>");
           $("#planner").html("<a href='https://musicnotes93.github.io/DailyPlanner/' target='_blank'><img src='./reactplanner.png' alt='Screenshot of the Planner App'></a>");
        } else {
            $("#website-project").html('<a href="https://www.malloryphillipsviolin.com" target="_blank"><video poster="./website.png" id="video1" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./phillips.mov">Your browser does not support the video tag.</video></a>');
            $("#honeyBearPizza").html('<a href="https://www.honeybearpizza.com" target="_blank"><video poster="./honeyBearPizza.png" id="video2" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./honeyBearVideo.mp4">Your browser does not support the video tag.</video></a>');
            $("#cat-quiz").html('<a href="https://musicnotes93.github.io/CatQuiz/" target="_blank"><video poster="./catquiz.png" id="video2" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./catquiz2.mov">Your browser does not support the video tag.</video></a>');
            $("#simon-game").html('<a href="https://musicnotes93.github.io/SimonGameMobileFriendly/" target="_blank"><video poster="./simon.png" id="video3" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./simongame2.mov">Your browser does not support the video tag.</video></a>');
            $("#library").html('<a href="https://musicnotes93.github.io/InteractiveLibrary/" target="_blank"><video poster="./library.png" id="video4" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./libraryvid.mov">Your browser does not support the video tag.</video></a>');
            $("#planner").html('<a href="https://musicnotes93.github.io/DailyPlanner/" target="_blank"><video poster="./reactplanner.png" id="video5" muted loop preload="auto" onmouseover="this.play()"><source type="video/mp4" src="./reactvid.mov">Your browser does not support the video tag.</video></a>');
            
            for (let i=1; i<=6; i++) {
                $("#video" + i).on("mouseleave", function() {
                    this.pause();
                    this.currentTime = 0;
                    this.load(); 
                });
            }
        }
    
    }
    updateContent();
    
    $(window).resize(function() {
        updateContent();
    });
    });
    
    
    
       
      
    
    
        
        
        
        
        
