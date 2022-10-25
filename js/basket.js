function addToBasket() {
	let ArrToBasket = JSON.parse(localStorage.getItem('ArrToBasket'));
	function changeIconBasket() {
		const basketTotal = document.querySelector('.nav__basket-total');
		basketTotal.textContent = JSON.parse(localStorage.getItem('ArrToBasket')).length;
	}
	changeIconBasket()
	ArrToBasket.forEach(e => {

	let productId = e.id,
		size = e.size,
		productInBasket = document.querySelectorAll('.basket__products-box-id'),
		productsInfoSize = document.querySelectorAll('.basket__products-info-size span'),
			basketProductsRow = document.querySelector('.basket__products');
			function AddProduct() {
				catalog.forEach(item => {
					if (item.id == productId) {
						let totalAmount = 1;
						basketProductsRow.innerHTML += `
									<div class="basket__products-box">
										<span class="basket__products-box-id hidden">${productId}</span>
										<div class="basket__products-info">
											<img src="img/Catalog/${item.id}/${String(item.id) + '1'}.webp" alt="" class="basket__products-info-img">
											<div class="basket__products-info-text">
												<p class="basket__products-info-name">${item.name}</p>
												<p class="basket__products-info-size">Размер: <span>${size}</span></p>
											</div>
										</div>
										<ul class="basket__products-list">
											<li class="basket__products-item basket__products-item-amount">
												<button class="basket__products-amount-btn basket__products-amount-minus">-</button>
												<p class="basket__products-amount-total"><span>${totalAmount}</span></p>
												<button class="basket__products-amount-btn  basket__products-amount-plus">+</button>
											</li>
											<li class="basket__products-item basket__products-item-cost">
											<span>${item.newPrice}</span> UAH
											</li>
											<li class="basket__products-item basket__products-item-total"> <span>${item.newPrice * totalAmount}</span> UAH</li>
											<li class="basket__products-item basket__products-item-delete"><img class=" basket__delete cursor-pointer" src="img/basket/icon.svg" alt=""></li>
										</ul>
									</div>
						`
					}
				})
			}
	if (basketProductsRow.textContent.trim() == '') {
		AddProduct()
		
	} else {
		let AddOrNote = true;
		for (let i = 0; i < productInBasket.length; i++){
			for (let j = 0; j < productsInfoSize.length; j++){
				if (productId == productInBasket[i].textContent) {
					if (productsInfoSize[j].textContent != size) {
						AddOrNote = true;
					} else {
						AddOrNote = false
					}
				}else{
					AddOrNote = true;
				}
			}
		}
		if (AddOrNote == true) {
			AddProduct()
		}
				
			
	}
	function btnsOnProductCard() {
		const basketMinus = document.querySelectorAll('.basket__products-amount-minus'),
			basketBox = document.querySelectorAll('.basket__products-box'),
			basketDeleteBtn = document.querySelectorAll('.basket__delete'),
			basketPlus = document.querySelectorAll('.basket__products-amount-plus'),
			basketTotalCost = document.querySelectorAll('.basket__products-item-total span'),
			basketCost = document.querySelectorAll('.basket__products-item-cost span'),
			basketTotalAmount = document.querySelectorAll('.basket__products-amount-total span');
		for (let i = 0; i < basketPlus.length; i++){
			basketPlus[i].addEventListener('click', () => {
				for (let k = 0; k < basketTotalAmount.length; k++){
					if (k == i) {
						basketTotalAmount[k].textContent++;
						basketTotalCost[k].textContent = basketTotalAmount[k].textContent * basketCost[k].textContent;
					}
					fullPriceCalc();
				}
			})
			basketMinus[i].addEventListener('click', () => {
				for (let k = 0; k < basketTotalAmount.length; k++){
					if (k == i && basketTotalAmount[k].textContent != 0) {
						basketTotalAmount[k].textContent--;
						basketTotalCost[k].textContent = basketTotalAmount[k].textContent * basketCost[k].textContent;
					}
					fullPriceCalc();
				}
			})
			basketDeleteBtn[i].addEventListener('click', () => {
				let subArrToBasket = [];
				for (let k = 0; k < basketBox.length; k++){
					for (let j = 0; j < ArrToBasket.length; j++){
						if (k == i && k != j) {
							subArrToBasket.push(ArrToBasket[j]);
						}
						fullPriceCalc();
					}
				}
				basketBox.forEach(e => {
					e.remove();
				})
				ArrToBasket = subArrToBasket;
				localStorage.setItem('ArrToBasket', JSON.stringify(ArrToBasket));
				ArrToBasket = JSON.parse(localStorage.getItem('ArrToBasket'));
				fullPriceCalc();
				AddProduct()
				document.location.reload(true);
			})
		}
		fullPriceCalc();
	}
	function fullPriceCalc () {
		const basketTotalCost = document.querySelectorAll('.basket__products-item-total span'),
			fullPrice = document.querySelector('.bakset__create-application-cost span');
		fullPrice.textContent = 0;
		let subOut = 0;
		basketTotalCost.forEach(elem => {
			subOut += Number(elem.textContent);
		});
			fullPrice.textContent = subOut;
	}
		btnsOnProductCard();
	})

}
addToBasket();