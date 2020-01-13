$('.form-check').on('click','label', function(){
	//$('#room-images').show().fadeOut(777);
	console.log("Hi!");
	var roomType = $(this).text();
	var type = $(this).attr('for');
	var index = parseInt(type[type.length-1]);
	var src;
	if(index == 1) src="images/single.jpg";
	if(index == 2) src="images/double.jpg";
	if(index == 3) src="images/king-suite.jpg";
	var $img= '<img class="img-thumbnail" src="'+src+'" />'
	var $button1 = '<input type="button" value="Take a VR EXPERIENCE Part 1" >'; 
	var $button2 = '<input type="button" value="Take a VR EXPERIENCE Part 2" >'; 
	
	$('#room-images').html($img+$button1+$button2).hide().fadeIn(777);
	$('html, body').animate({
        scrollTop: $("#room-images").offset().top
    }, 1000);
	console.log($img);
	
	$('input[type="button"]').on('click', function(){
		console.log("Ji")
		var value = $(this).attr('value');
		var i= value[value.length-1];
		if(i == 1) $(this).html('<a href="Videos/VR-video-v1.mp4" target="_blank"></a>');
		if(i == 2) $(this).html('<a href="images/Vrr-360-p1.jpg"></a>'); 
	})
})
