$("#search-icon").on('click',function(){
	console.log("Hi!");
	$(".search-results").css("display","block");
	$('html, body').animate({
        scrollTop: $("#search-results").offset().top
    }, 1000);
	$(".search-results").hide().fadeIn(1000);
});

$(".container").on('click', 'a.btn', function(e){
	e.preventDefault();
	var hotel_url = this.href;
	console.log(hotel_url);
	$('html, body').animate({
        scrollTop: $(".load-page").offset().top
    }, 1000);
	$(".load-page").load(hotel_url).hide().fadeIn(1000);
});

