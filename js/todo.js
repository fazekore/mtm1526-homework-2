$(document).ready(function() {
	// All your jquery codes goes inside the document ready event
	
	/*
	
		Everything we do in jQuery goes through the $() function:
		1.We Slect an element using a css selector
		2.We dom something to that element
		We can write any CSS you can think up in the $() function
		
		$('#thing')-->get by iD
		$('.thing') --> get by class
		$('div p') -> get by tags all the <P> elements inside <div> elements
		$('div p:first-child') -> the first <p> element inside a <div> element
		etc.
	*/
	
	$('a').on('click', function (ev) {
		
			/* 
				'.preventDefault()' will stop html elements from doing what they normally do
				- for links it will stop them from going to another page
				-for forms it will stop them from submitting
			
			*/
			
		
		ev.preventDefault();
		console.log('Hello');
	
	
			/*
				'$(this)' gives us reference to the element this event listener is attached to 
				'.attr()' let us get and set element attributes
			*/
			
			console.log($(this).attr('href'));
			
			/*
			with '.css()' we can get and set CSS properties
			The CSS property name (the 1st argument) is identical to how youd write it in css
			*/
						
			$(this).css('background-coolor', '#f33');	
	});
			$('form').on('submit', function (ev) {
				ev.preventDefault();
				
				var newLi = $(document.createElement('li'));
				
				if ($('#item').val() !='') {
					newLi.html($('#item').val());
					$('ul').append(newLi);
					$('#item').val('');
			}
	});

	$('ul').on('click', 'li', function (ev) {
		//$(this).addClass('done')
		$(this).toggleClass('done');
	});
});