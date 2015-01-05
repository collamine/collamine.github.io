$(function() {
 
	//	wrap all thumbs in a <div> for the 3x3 grid
	$div = null;
	$('#thumbs').children().each(function(i) {
		if ( i % 9 == 0) {
			$div = $( '<div />' );
			$div.appendTo( '#thumbs' );
		}
		$(this).appendTo( $div );
		$(this).addClass( 'itm'+i );
		$(this).click(function() {
			$('#images').trigger( 'slideTo', [i, 0, true] );
		});
	});
	$('#thumbs img.itm0').addClass( 'selected' );
 
	//	the big-image carousel
	$('#images').carouFredSel({
		direction: 'up',
		circular: false,
		infinite: false,
		width: 350,
		height: 350,
		items: 1,
		auto: false,
		prev: '#prev .images',
		next: '#next .images',
		scroll: {
			fx: 'directscroll',
			onBefore: function() {
				var pos = $(this).triggerHandler( 'currentPosition' );
				$('#thumbs img').removeClass( 'selected' );
				$('#thumbs img.itm'+pos).addClass( 'selected' );
				
				var page = Math.floor( pos / 9 );
				$('#thumbs').trigger( 'slideToPage', page );
			}
		}
	});
 
	//	the thumbnail-carousel
	$('#thumbs').carouFredSel({
		direction: 'up',
		circular: false,
		infinite: false,
		width: 350,
		height: 350,
		items: 1,
		align: false,
		auto: false,
		prev: '#prev .thumbs',
		next: '#next .thumbs'
	});
});