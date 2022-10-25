function createPage() {
	function changeIconBasket() {
		const basketTotal = document.querySelector('.nav__basket-total');
		basketTotal.textContent = JSON.parse(localStorage.getItem('ArrToBasket')).length;
	}
	changeIconBasket()
	let productId = JSON.parse(localStorage.getItem('productId'));
// slider
catalog.forEach(elem => {
	if (elem.id == productId) {
		function productSliderImgAdd() {
			const productSliderRow = document.querySelector('.product__slider-row');
			for (let i = 0; i < elem.imgUrl.length; i++){
				productSliderRow.innerHTML += `
				<img class="product__main-img" src="img/Catalog/${productId}/${String(productId) + (i + 1) }.webp" alt="">
				`
			}
		}
		productSliderImgAdd();

		document.querySelector('.product__info-name').textContent = elem.name;
		document.querySelector('.product__price-new').textContent = `${elem.newPrice} UAH`;
		document.querySelector('.product__price-old').textContent = `${elem.oldPrice} UAH`;
		for (i = 0; i < elem.size.length; i++){
			let productSizeElem = document.createElement('div');
			productSizeElem.classList.add('product__size-item');
			productSizeElem.classList.add('cursor-pointer');
			productSizeElem.textContent = `${elem.size[i]}`;
			document.querySelector('.product__size-box').appendChild(productSizeElem);
		}
		document.querySelector('.product__description-text').textContent = elem.description;
		function productCharacteristicsAdd () {
			let id = 1,
				productCharacteristicsColumn = document.querySelectorAll('.product__characteristics-column');
			for (let key in elem.characteristics) {
				for (let i = 0; i < productCharacteristicsColumn.length; i++){
					if (i == id) {
						productCharacteristicsColumn[i].textContent = elem.characteristics[key];
					}
				}
				id = id + 2;
			}
		}
		productCharacteristicsAdd();
	}
})



$('.product__slider-row').slick({
	dots: true,
	arrows: false
});
let slickSlideControl = document.querySelectorAll('.slick-dots li button');
for (let i = 0; i < slickSlideControl.length; i++){
	slickSlideControl[i].innerHTML = `
		<img class="product__slider-img" src="img/Catalog/${productId}/${String(productId) + (i + 1) }.webp" alt="">
	`
	}
	
}
createPage();
function cardToBasketAdd() {
	const sizeItem = document.querySelectorAll('.product__size-item'),
		toBasketBtn = document.querySelector('.product__btn-tobasket'),
		productId = JSON.parse(localStorage.getItem('productId'));
	sizeItem.forEach(elem => {
		elem.addEventListener('click', () => {
			sizeItem.forEach(e => {
				e.classList.remove('product__size-item_active');
			})
			elem.classList.add('product__size-item_active');
		})
	})
	toBasketBtn.addEventListener('click', () => {
		let ArrToBasket = JSON.parse(localStorage.getItem('ArrToBasket'));
		const sizeActive = document.querySelector('.product__size-item_active');
		if (sizeActive == null) {
			alert('Выберите размер!')
		} else {
			let itemArrToBasket = {
				id: productId,
				size: sizeActive.textContent
			}
			if (ArrToBasket.length == 0) {
				ArrToBasket.push(itemArrToBasket)
				alert('Товар добавлен в корзину')
				sizeActive.classList.remove('product__size-item_active');
				localStorage.setItem('ArrToBasket', JSON.stringify(ArrToBasket));
				changeIconBasket()
			} else {
				let examination = true;
				for (let j = 0; j < ArrToBasket.length; j++){
					if (itemArrToBasket.size == ArrToBasket[j].size && itemArrToBasket.id == ArrToBasket[j].id) {
						alert('Товар уже добавлен в корзину');
						examination = false;
						sizeActive.classList.remove('product__size-item_active');
					}
				}
				if (examination == true) {
					ArrToBasket.push(itemArrToBasket);
					alert('Товар добавлен в корзину')
					sizeActive.classList.remove('product__size-item_active');
					localStorage.setItem('ArrToBasket', JSON.stringify(ArrToBasket));
					const basketTotal = document.querySelector('.nav__basket-total');
					basketTotal.textContent = JSON.parse(localStorage.getItem('ArrToBasket')).length;
				}
			}
			
		}
		
	})
}
cardToBasketAdd()



/// !!!!!!!!!!!!!!! ОСТАНОВИЛСЯ НА ТОМ ЧТО НАСТРОИЛ ЛОКАЛ СТОРЕЙДЖ. ДАЛЬШЕ НУЖНО ПРИНИМАТЬ ЭТИ ДАННЫЕ ЧЕРЕЗ ЛОКАЛ СТОРЕЙДЖ И ДОБАВЛЯТЬ ТОВАРЫ В КОРЗИНУ
