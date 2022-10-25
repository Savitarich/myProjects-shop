let ArrToBasket;
if (JSON.parse(localStorage.getItem('ArrToBasket')) == null) {
	ArrToBasket = [];
} else {
	ArrToBasket = JSON.parse(localStorage.getItem('ArrToBasket'));
}

//SLider on first screen;
const sliderItem = document.querySelectorAll('.header__slider-item'),
	hidden = document.querySelector('.hidden'),
	btnSliderContent = document.querySelectorAll('.header__content-slide-btn');

for (let i = 0; i < btnSliderContent.length; i++){
	btnSliderContent[i].addEventListener('click', () => {
		for (let k = 0; k < btnSliderContent.length; k++){
			btnSliderContent[k].classList.remove('header__content-slide-btn_active');
		}
		btnSliderContent[i].classList.add('header__content-slide-btn_active');
		for (let k = 0; k < sliderItem.length; k++){
			sliderItem[k].classList.add('hidden');
			sliderItem[i].classList.remove('hidden');
		}
	});
}
// Смена позы модели при наведении (на слайдере)
const sliderImages = document.querySelectorAll('.header__slider-img');
for (let i = 0; i < sliderImages.length; i++){
	sliderImages[i].addEventListener('mouseover', () => {
		sliderImages[i].src = `img/slider/0${i + 1}/0${i + 1}2.png`;
	});
	sliderImages[i].addEventListener('mouseout', () => {
		sliderImages[i].src = `img/slider/0${i + 1}/0${i + 1}1.png`;
	});
}
// range
function rangeAdd() {
	catalog.forEach((elem, index) => {
		function AddRangeFromCatalog() {
			let rangeItem = document.createElement('div');
			rangeItem.classList.add('catalog__range-box');
			rangeItem.classList.add(`catalog__range-box${elem.id}`);
			rangeItem.innerHTML = `
			<a href="product.html"> <img src="img/Catalog/${elem.id}/${String(elem.id)+'1'}.webp" alt="" class="catalog__range-img"></a>
				<div class="catalog__range-info">
					<div class="catalog__range-price">
						<p class="catalog__range-oldprice">${elem.oldPrice} UAH</p>
						<p class="catalog__range-newprice"><span>${elem.newPrice}</span> UAH</p>
					</div>
					<button class="catalog__range-tobasket">В КОРЗИНУ</button>
				</div>
				<p class="catalog__range-name">${elem.name}</p>
				<ul class="catalog__size-list"></ul>
				<p class="catalog__range-id hidden">${elem.id}</p>
			`
			document.querySelector('.catalog__range').appendChild(rangeItem);

			const catalogSizeList = document.querySelectorAll('.catalog__size-list');
			for (let k = 0; k < catalogSizeList.length; k++){
				if (k == index) {
					for (i = 0; i < elem.size.length; i++){
						catalogSizeList[k].innerHTML += `
						<li class="catalog__size-item catalog__size-item${elem.id}">${elem.size[i]}</li>
						`
					}
				}
			}
			function openProductInfo() {
				const rangeCard = document.querySelectorAll('.catalog__range-box');
	
				for (let i = 0; i < rangeCard.length; i++) {
					rangeCard[i].addEventListener('click', () => {
						for (let k = 0; k < rangeCard.length; k++){
							rangeCard[k].classList.remove('catalog__range-box-active');
						}
						rangeCard[i].classList.add('catalog__range-box-active');
						let rangeId = document.querySelector('.catalog__range-box-active .catalog__range-id');
						localStorage.setItem('productId', JSON.stringify(rangeId.textContent));
					})
				}
		}
		openProductInfo();
		}AddRangeFromCatalog()
	})
	choiceSize()
	toBasketAdd()
}
rangeAdd();
	


// FILTERS   catalog__filters-list
function filterOption() {
	const filltersList = document.querySelectorAll('.catalog__filters-list li');
	const filltersItem = document.querySelectorAll('.catalog__filters-list ul');
	let addOrDelete = 'add';
	for (let i = 0; i < filltersList.length; i++) {
		filltersList[i].addEventListener('click', () => {

			filltersList.forEach(elem => {
				elem.classList.remove('catalog__filters-item_active');
			})
			filltersList[i].classList.add('catalog__filters-item_active');
			if (addOrDelete == 'add') {
				for (let k = 0; k < filltersItem.length; k++){
					filltersItem[k].remove();
				}
				const subList = document.createElement('ul');
				subList.classList.add('catalog__filters-sublist');
				subList.innerHTML = `
				<li class="catalog__filters-subitem cursor-pointer">Всё<span class:"catalog__filters-subitem-hidden">all</span></li>
				<li class="catalog__filters-subitem cursor-pointer">Верх<span class:"catalog__filters-subitem-hidden">top</span></li>
				<li class="catalog__filters-subitem cursor-pointer">Низ<span class:"catalog__filters-subitem-hidden">bottom</span></li>
				<li class="catalog__filters-subitem cursor-pointer">Обувь<span class:"catalog__filters-subitem-hidden">foot</span></li>
				`
				filltersList[i].after(subList);
				addOrDelete = 'delete';
				filtersAdd(); //filters!!!!
			} else if (addOrDelete == 'delete') {
				const filltersItem = document.querySelectorAll('.catalog__filters-list ul');
				for (let k = 0; k < filltersItem.length; k++){
					filltersItem[k].remove();
				}
				
				addOrDelete = 'add';
			}
		})
		
	}
}

filterOption();
function rangeRemove() {
	const catalogBox = document.querySelectorAll('.catalog__range-box');
	catalogBox.forEach(item => {
		item.remove();
	})
}
//filters !!!
function filtersAdd() {
	const filtersSubItem = document.querySelectorAll('.catalog__filters-subitem');
	filtersSubItem.forEach(elem => {
		elem.addEventListener('click', () => {
			rangeRemove()
			rangeAdd()
			const catalogBox = document.querySelectorAll('.catalog__range-box');
			filtersSubItem.forEach(item => {
				item.classList.remove('catalog__filters-subitem_active');
			})
			elem.classList.add('catalog__filters-subitem_active');
			let filterAffiliation = document.querySelector('.catalog__filters-item_active .catalog__filters-secret').textContent,
				filterWhereType = document.querySelector('.catalog__filters-subitem_active span').textContent;
			const catalogBoxGetId = document.querySelectorAll('.catalog__range-box .catalog__range-id');
			let catalogBoxId;
			for (let i = 0; i < catalogBox.length; i++){
				for (let k = 0; k < catalogBoxGetId.length; k++){
					if (i == k) {
						catalogBoxId = catalogBoxGetId[k].textContent;
						catalog.forEach(item => {
							if (filterWhereType != 'all') {
								if (item.id == catalogBoxId && (item.affiliation != filterAffiliation || item.whereType != filterWhereType)) {
									catalogBox[i].remove();
								}
							} else {
								if (item.id == catalogBoxId && item.affiliation != filterAffiliation) {
									catalogBox[i].remove();
								}
							}
							
						})
					}
				}
			}
			sortBtnAll = document.querySelectorAll('.catalog__sort-btn');
		sortBtnAll.forEach(item => {
		item.classList.remove('catalog__sort-btn_active');
	})
			
		})
	})
}
function subFiltersAdd(affiliation) {
	const catalogBox = document.querySelectorAll('.catalog__range-box');
	let filterAffiliation = affiliation;
	filterWhereType = 'all';
	const catalogBoxGetId = document.querySelectorAll('.catalog__range-box .catalog__range-id');
	let catalogBoxId;
	for (let i = 0; i < catalogBox.length; i++) {
		for (let k = 0; k < catalogBoxGetId.length; k++) {
			if (i == k) {
				catalogBoxId = catalogBoxGetId[k].textContent;
				catalog.forEach(item => {
					if (filterWhereType != 'all') {
						if (item.id == catalogBoxId && (item.affiliation != filterAffiliation || item.whereType != filterWhereType)) {
							catalogBox[i].remove();
						}
					} else {
						if (item.id == catalogBoxId && item.affiliation != filterAffiliation) {
							catalogBox[i].remove();
						}
					}
					
				})
			}
		}
	}
}
function subFiltersAddBtn (btn, who) {
	document.querySelector(btn).addEventListener('click', () => {
		rangeRemove()
		rangeAdd()
		subFiltersAdd(who);
		sortBtnAll = document.querySelectorAll('.catalog__sort-btn');
		sortBtnAll.forEach(item => {
		item.classList.remove('catalog__sort-btn_active');
	})
	})
}
subFiltersAddBtn('.filter-sex__btn-man', 'man');
subFiltersAddBtn('.filter-sex__btn-woman', 'woman');
subFiltersAddBtn('.nav__range-man', 'man');
subFiltersAddBtn('.nav__range-woman', 'woman');
subFiltersAddBtn('.nav__range-boy', 'boy');
subFiltersAddBtn('.nav__range-girl', 'girl');

// to basket
function choiceSize() {
	catalog.forEach(elem => {
		const catalogSizeItemInd = document.querySelectorAll(`.catalog__size-item${elem.id}`),
			catalogSizeItem = document.querySelectorAll('.catalog__size-item');
		for (let i = 0; i < catalogSizeItemInd.length; i++){
			catalogSizeItemInd[i].addEventListener('click', () => {
				for (let k = 0; k < catalogSizeItem.length; k++){
					catalogSizeItem[k].classList.remove('catalog__size-item_active');
				}
				catalogSizeItemInd[i].classList.add('catalog__size-item_active');
			})
		}
	})
}
function toBasketAdd() {
	const rangeId = document.querySelectorAll('.catalog__range-id'),
		catalogTobasketBtn = document.querySelectorAll('.catalog__range-tobasket');
	for (let i = 0; i < catalogTobasketBtn.length; i++) {
		catalogTobasketBtn[i].addEventListener('click', () => {
			for (let k = 0; k < rangeId.length; k++){
				if (k == i) {
					const catalogSizeActive = document.querySelector('.catalog__size-item_active');
					if (catalogSizeActive == null) {
						alert('Выберите размер!')
					} else {
						let itemArrToBasket = {
							id: rangeId[k].textContent,
							size: catalogSizeActive.textContent
						}
						if (ArrToBasket.length == 0) {
							ArrToBasket.push(itemArrToBasket)
							alert('Товар добавлен в корзину')
							catalogSizeActive.classList.remove('catalog__size-item_active');
							localStorage.setItem('ArrToBasket', JSON.stringify(ArrToBasket));
							changeIconBasket()
						} else {
							let examination = true;
							for (let j = 0; j < ArrToBasket.length; j++){
								if (itemArrToBasket.size == ArrToBasket[j].size && itemArrToBasket.id == ArrToBasket[j].id) {
									alert('Товар уже добавлен в корзину');
									examination = false;
									catalogSizeActive.classList.remove('catalog__size-item_active');
								}
							}
							if (examination == true) {
								ArrToBasket.push(itemArrToBasket);
								alert('Товар добавлен в корзину')
								catalogSizeActive.classList.remove('catalog__size-item_active');
								localStorage.setItem('ArrToBasket', JSON.stringify(ArrToBasket));
								changeIconBasket()
							}
						}
						
					}
					
				}
			}
		})
	}
	
	
}
function changeIconBasket() {
	const basketTotal = document.querySelector('.nav__basket-total');
	basketTotal.textContent = JSON.parse(localStorage.getItem('ArrToBasket')).length;
}
changeIconBasket()
// ************sort
function doSort() {
	sortBtnAll = document.querySelectorAll('.catalog__sort-btn');
	sortBtnAll.forEach(e => {
		e.addEventListener('click', () => {
			sortBtnAll.forEach(item => {
				item.classList.remove('catalog__sort-btn_active');
			})
			e.classList.add('catalog__sort-btn_active');
			const sortBtnSpan = document.querySelector('.catalog__sort-btn_active span');
			choiceBtn = sortBtnSpan.textContent;

			const rangeId = document.querySelectorAll('.catalog__range-id');
			let = newArrWithCards = [];
			rangeId.forEach(item => {
				catalog.forEach(elem => {
					if (item.textContent == elem.id) {
						newArrWithCards.push({
							id: elem.id,
							newPrice: elem.newPrice
						})
					}
				})
				subNewArrWithCards = newArrWithCards;
			})
			let indexSub;
			switch (choiceBtn) {
				case 'up':
					rangeRemove()
					newArrWithCards.sort((a, b) => a.newPrice > b.newPrice ? 1 : -1);
					indexSub = 0;
					newArrWithCards.forEach(item => {
						catalog.forEach((elem, index) => {
							if (elem.id == item.id) {
								function AddRangeFromCatalog() {
									let rangeItem = document.createElement('div');
									rangeItem.classList.add('catalog__range-box');
									rangeItem.classList.add(`catalog__range-box${elem.id}`);
									rangeItem.innerHTML = `
									<a href="product.html"> <img src="img/Catalog/${elem.id}/${String(elem.id)+'1'}.webp" alt="" class="catalog__range-img"></a>
										<div class="catalog__range-info">
											<div class="catalog__range-price">
												<p class="catalog__range-oldprice">${elem.oldPrice} UAH</p>
												<p class="catalog__range-newprice"><span>${elem.newPrice}</span> UAH</p>
											</div>
											<button class="catalog__range-tobasket">В КОРЗИНУ</button>
										</div>
										<p class="catalog__range-name">${elem.name}</p>
										<ul class="catalog__size-list"></ul>
										<p class="catalog__range-id hidden">${elem.id}</p>
									`
									document.querySelector('.catalog__range').appendChild(rangeItem);
						
									const catalogSizeList = document.querySelectorAll('.catalog__size-list');
									for (let k = 0; k < catalogSizeList.length; k++){
										if (k == indexSub) {
											for (i = 0; i < elem.size.length; i++){
												catalogSizeList[k].innerHTML += `
												<li class="catalog__size-item catalog__size-item${elem.id}">${elem.size[i]}</li>
												`
											}
										}
									}
									function openProductInfo() {
										const rangeCard = document.querySelectorAll('.catalog__range-box');
							
										for (let i = 0; i < rangeCard.length; i++) {
											rangeCard[i].addEventListener('click', () => {
												for (let k = 0; k < rangeCard.length; k++){
													rangeCard[k].classList.remove('catalog__range-box-active');
												}
												rangeCard[i].classList.add('catalog__range-box-active');
												let rangeId = document.querySelector('.catalog__range-box-active .catalog__range-id');
												localStorage.setItem('productId', JSON.stringify(rangeId.textContent));
											})
										}
									}
									
									indexSub++;
								openProductInfo();
								}
								AddRangeFromCatalog()
							}
						})
					})
					choiceSize()
					toBasketAdd()
					break;
				case 'down':
					rangeRemove()
					newArrWithCards.sort((a, b) => a.newPrice > b.newPrice ? -1 : 1);
					indexSub = 0;
					newArrWithCards.forEach(item => {
						catalog.forEach((elem, index) => {
							if (elem.id == item.id) {
								function AddRangeFromCatalog() {
									let rangeItem = document.createElement('div');
									rangeItem.classList.add('catalog__range-box');
									rangeItem.classList.add(`catalog__range-box${elem.id}`);
									rangeItem.innerHTML = `
									<a href="product.html"> <img src="img/Catalog/${elem.id}/${String(elem.id)+'1'}.webp" alt="" class="catalog__range-img"></a>
										<div class="catalog__range-info">
											<div class="catalog__range-price">
												<p class="catalog__range-oldprice">${elem.oldPrice} UAH</p>
												<p class="catalog__range-newprice"><span>${elem.newPrice}</span> UAH</p>
											</div>
											<button class="catalog__range-tobasket">В КОРЗИНУ</button>
										</div>
										<p class="catalog__range-name">${elem.name}</p>
										<ul class="catalog__size-list"></ul>
										<p class="catalog__range-id hidden">${elem.id}</p>
									`
									document.querySelector('.catalog__range').appendChild(rangeItem);
						
									const catalogSizeList = document.querySelectorAll('.catalog__size-list');
									for (let k = 0; k < catalogSizeList.length; k++){
										if (k == indexSub) {
											for (i = 0; i < elem.size.length; i++){
												catalogSizeList[k].innerHTML += `
												<li class="catalog__size-item catalog__size-item${elem.id}">${elem.size[i]}</li>
												`
											}
										}
									}
									function openProductInfo() {
										const rangeCard = document.querySelectorAll('.catalog__range-box');
							
										for (let i = 0; i < rangeCard.length; i++) {
											rangeCard[i].addEventListener('click', () => {
												for (let k = 0; k < rangeCard.length; k++){
													rangeCard[k].classList.remove('catalog__range-box-active');
												}
												rangeCard[i].classList.add('catalog__range-box-active');
												let rangeId = document.querySelector('.catalog__range-box-active .catalog__range-id');
												localStorage.setItem('productId', JSON.stringify(rangeId.textContent));
											})
										}
									}
									
									indexSub++;
								openProductInfo();
								}
								AddRangeFromCatalog()
							}
						})
					})
					choiceSize()
					toBasketAdd()
					break;
			}
		})
	})
}
doSort()
