$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	var userag = navigator.userAgent.toLowerCase();
	var isAndroid = userag.indexOf("android") > -1; 
	if(isAndroid) {
		$('.menu').responsiveMenu({autoArrows:true});
	}
});

$(function(){$('.social-icons a')
	.mouseover(function(){$(this).stop().animate({marginTop:'-3px',paddingBottom:'3px'}, 100)})
	.mouseout(function(){$(this).stop().animate({marginTop:'0px',paddingBottom:'0px'}, 100)});
});

$(function(){
	$('.box').hover(
		function(){$(this).find('h5').addClass('color-1'); Cufon.refresh();},
		function(){$(this).find('h5').removeClass('color-1'); Cufon.refresh();}
	)
	$('.box.bg-color1').hover(
		function(){$(this).find('.button').css({borderColor: '#6a99ba'});},
		function(){$(this).find('.button').css({borderColor: '#d5d5d5'});}
	)
	$('.box.bg-color2').hover(
		function(){
			$(this).find('.button').css({borderColor: '#6dbbbe'});
			$(this).find('.circle').css({backgroundColor: '#6dbbbe'});
		},
		function(){
			$(this).find('.button').css({borderColor: '#d5d5d5'});
			$(this).find('.circle').css({backgroundColor: '#a1d3d5'});
		}
	)
	$('.box.bg-color3').hover(
		function(){
			$(this).find('.button').css({borderColor: '#a2be5c'});
			$(this).find('.circle').css({backgroundColor: '#a2be5c'});
		},
		function(){
			$(this).find('.button').css({borderColor: '#d5d5d5'});
			$(this).find('.circle').css({backgroundColor: '#cbe098'});
		}
	)
	$('.box.bg-color4').hover(
		function(){
			$(this).find('.button').css({borderColor: '#d8a0a3'});
			$(this).find('.circle').css({backgroundColor: '#d8a0a3'});
		},
		function(){
			$(this).find('.button').css({borderColor: '#d5d5d5'});
			$(this).find('.circle').css({backgroundColor: '#e0b3b5'});
		}
	)
	$('.box.bg-color5').hover(
		function(){$(this).find('.button').css({borderColor: '#dfb083'});},
		function(){$(this).find('.button').css({borderColor: '#d5d5d5'});}
	)
	$('.box.bg-color6').hover(
		function(){$(this).find('.button').css({borderColor: '#948D87'});},
		function(){$(this).find('.button').css({borderColor: '#d5d5d5'});}
	)
})

$(function(){$('.banners img')
	.mouseover(function(){$(this).stop().animate({opacity:0.8}, 300)})
	.mouseout(function(){$(this).stop().animate({opacity:1}, 300)});
});
