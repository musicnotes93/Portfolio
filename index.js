window.addEventListener("DOMContentLoaded", function(){
    $("h1").hide().slideDown(1000);
    $("h2").hide();
    setTimeout(function() {
        $("h2").css("opacity", 0).slideDown(1000).animate({ opacity: 1 },{queue: false, duration: 3000});
}, 500);
});
  
