$(document).ready(function(){
	
	var slider = $('.gallery');
	var count = $('.gallery section').children.length;
	var width = count * 100;

	slider.css('width', width + '%');

	var prev = $('.prev');
	var next = $('.next');

	next.on('click',function(){
		$('.gallery .img:first').insertAfter('.gallery .img:last');
		slider.css('margin-left', '-' + 100 + '%')

		$('.gallery .img2:first').insertAfter('.gallery .img2:last');
		slider.css('margin-left', '-' + 100 + '%')	
	});
	prev.on('click',function(){
		speed: 1,
		$('.gallery .img:last').insertBefore('.gallery .img:first');
		slider.css('margin-left', '-' + 100 + '%');

		$('.gallery .img2:last').insertBefore('.gallery .img2:first');
		slider.css('margin-left', '-' + 100 + '%');
	});
});
