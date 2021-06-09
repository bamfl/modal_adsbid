const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	
		navigation: {
			nextEl: '.next__btn',
			prevEl: '.prev__btn',
		}
});