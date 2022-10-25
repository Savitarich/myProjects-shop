// burger
const burgerMenuBtn = document.querySelector('.burger-menu__icon'),
	burgerMenuBody = document.querySelector('.burger__menu-body');
burgerMenuBtn.addEventListener('click', () => {
	burgerMenuBtn.classList.toggle('burger-menu__icon_active');
	burgerMenuBody.classList.toggle('burger__menu-body_active');
	if (document.querySelector('.catalog')) {
		subFiltersAddBtn('.burger__range-item .nav__range-man', 'man');
		subFiltersAddBtn('.burger__range-item .nav__range-woman', 'woman');
		subFiltersAddBtn('.burger__range-item .nav__range-boy', 'boy');
		subFiltersAddBtn('.burger__range-item .nav__range-girl', 'girl');
	}
})