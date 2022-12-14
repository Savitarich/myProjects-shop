const catalog = [
	{
		id: 10001,
		affiliation: 'woman',
		name: 'Черное платье-свитшот KASTA',
		type: 'dress',
		whereType: 'top',
		description: 'Платье-свитшот Kasta Design прямого кроя с круглым вырезом горловины и длинными рукавами. Карманы в боковых швах, рукава и низ платья на манжетах.',
		imgUrl: ['img/Catalog/10001/100011.webp', 'img/Catalog/10001/100012.webp', 'img/Catalog/10001/100013.webp'],
		oldPrice: 900,
		newPrice: 779,
		size: ['XS', 'S', 'L'],
		characteristics: {
			affiliation: 'Женщинам',
			compound: '94% полиэстер, 6% эластан',
			seasonality: 'Демисезон',
			color: 'Черный',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10002,
		affiliation: 'woman',
		name: 'Серое платье ISSA PLUS с цветочным принтом',
		type: 'dress',
		whereType: 'top',
		description: 'Классическое офисное платье выполненное из легкого софта с цветочным принтом. Модель приталена резинкой на талии и оснащена застежкой-пуговицей на горловине. Платье миди длины с длинными рукавами на манжетах.',
		imgUrl: ['img/Catalog/10002/100021.webp', 'img/Catalog/10002/100022.webp', 'img/Catalog/10002/100023.webp'],
		oldPrice: 600,
		newPrice: 449,
		size: ['XS', 'S', 'L'],
		characteristics: {
			affiliation: 'Женщинам',
			compound: '59%, полиестр, 21%, еластан, 20%, хлопок',
			seasonality: 'Всесезон',
			color: 'Серый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10010,
		affiliation: 'woman',
		name: 'Синие демисезонные регюлар фит джинсы Colin',
		type: 'jeans',
		whereType: 'bottom',
		description: 'Regular Fit.',
		imgUrl: ['img/Catalog/10010/100101.webp', 'img/Catalog/10010/100102.webp', 'img/Catalog/10010/100103.webp'],
		oldPrice: 300,
		newPrice: 189,
		size: ['W25L32','W26L32', 'W27L34'],
		characteristics: {
			affiliation: 'Женщинам',
			compound: '99% хлопок, 1% эластан',
			seasonality: 'Демисезон',
			color: 'Cиний',
			countryOfOrigin: 'Бангладеш',
		}
	},
	{
		id: 10012,
		affiliation: 'woman',
		name: 'Коричневая кэжуал однотонная юбка Garne',
		type: 'skirt',
		whereType: 'bottom',
		description: 'Материал:шерсть костюмная.',
		imgUrl: ['img/Catalog/10012/100121.webp', 'img/Catalog/10012/100122.webp', 'img/Catalog/10012/100123.webp'],
		oldPrice: 1199,
		newPrice: 749,
		size: [44, 46, 48, 50, 52],
		characteristics: {
			affiliation: 'Женщинам',
			compound: '60% шерсть 35% полиэстер 5% эластан',
			seasonality: 'Демисезон',
			color: 'Коричневый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10013,
		affiliation: 'man',
		name: 'Серое демисезонное Пальто Миа-Стиль',
		type: 'coat',
		whereType: 'top',
		description: '',
		imgUrl: ['img/Catalog/10013/100131.webp', 'img/Catalog/10013/100132.webp', 'img/Catalog/10013/100133.webp'],
		oldPrice: 799,
		newPrice: 549,
		size: [52, 58],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: '100% хлопок/подкладка: искусственный мех',
			seasonality: 'Демисезон',
			color: 'Серый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10014,
		affiliation: 'man',
		name: 'Светло-синяя зимняя куртка Colin',
		type: 'jacket',
		whereType: 'top',
		description: 'Замеры размера XLширина в плечах - 50 см, длина рукава - 67 см, длина по спинке - 65 см, ширина в груди - 59 см, Длину рукава от шва воротника - 82 см.',
		imgUrl: ['img/Catalog/10014/100141.webp', 'img/Catalog/10014/100142.webp', 'img/Catalog/10014/100143.webp'],
		oldPrice: 1399,
		newPrice: 999,
		size: ['S', 'M', 'L'],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: '100% хлопок/подкладка: искусственный мех',
			seasonality: 'Зима',
			color: 'Светло-синий',
			countryOfOrigin: 'Бангладеш',
		}
	},
	{
		id: 10016,
		affiliation: 'man',
		name: 'Черные кэжуал демисезонные карго брюки Feel and Fly',
		type: 'pants',
		whereType: 'bottom',
		description: 'Штаны карго с карманами по бокам, сзади, а также косыми карманами для рук, выделяются среди аналогичных моделей: плотная ткань хорошо держит форму; манжеты на штанинах обработаны резинкой для лучшей посадки; зауженные книзу, данные брюки отлично садятся; логотип, нанесенный на нашивку, украшает карман брюк и служит доказательством оригинальности изделия.Даже при интенсивной носке изделие сохранит свою форму и цвет. Это отличный выбор для пополнения повседневного гардероба.Купить брюки карго стоит каждому молодому человеку, предпочитающему носить удобную и красивую одежду. В них вы всегда будете в тренде!',
		imgUrl: ['img/Catalog/10016/100161.webp', 'img/Catalog/10016/100162.webp', 'img/Catalog/10016/100163.webp'],
		oldPrice: 950,
		newPrice: 719,
		size: [46, 48, 50,],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: '100% хлопок',
			seasonality: 'Демисезон',
			color: 'Черный',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10017,
		affiliation: 'man',
		name: 'Серые кэжуал демисезонные брюки Feel and Fly',
		type: 'pants',
		whereType: 'bottom',
		description: 'Базовые мужские спортивные штаны без манжетов - musthave в гардеробе каждого мужчины. Свободная модель мужских спортивных штанов для повседневного образа имеет не только приятный внешний вид, но и высокую износостойкость.Предлагаем дополнить образ стильными худи Bruno или бомбером Olaf.',
		imgUrl: ['img/Catalog/10017/100171.webp', 'img/Catalog/10017/100172.webp', 'img/Catalog/10017/100173.webp'],
		oldPrice: 900,
		newPrice: 699,
		size: [46, 48, 52,],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: '70% коттон; 30% эластан',
			seasonality: 'Всесезон',
			color: 'Серый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10019,
		affiliation: 'man',
		name: 'Черные зимние ботинки Keddo',
		type: 'boots',
		whereType: 'foot',
		description: 'Черные зимние ботинки Keddo',
		imgUrl: ['img/Catalog/10019/100191.webp', 'img/Catalog/10019/100192.webp', 'img/Catalog/10019/100193.webp'],
		oldPrice: 1999,
		newPrice: 999,
		size: [41, 42, 43, 46],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: 'верх: искусственная кожа/подкладка: шерсть/стелька: шерсть/подошва: ТЭП',
			seasonality: 'Зима',
			color: 'Черный',
			countryOfOrigin: 'Китай',
		}
	},
	{
		id: 10020,
		affiliation: 'man',
		name: 'Ботинки Under Armour логотипы жёлтые спортивные',
		type: 'boots',
		whereType: 'foot',
		description: 'Ботинки Under Armour логотипы жёлтые спортивные',
		imgUrl: ['img/Catalog/10020/100201.webp', 'img/Catalog/10020/100202.webp', 'img/Catalog/10020/100203.webp'],
		oldPrice: 3999,
		newPrice: 2199,
		size: [41, 43, 46],
		characteristics: {
			affiliation: 'Мужчинам',
			compound: 'верх: текстиль/подкладка: текстиль/стелька: текстиль/подошва: резина',
			seasonality: 'Зима',
			color: 'Желтый',
			countryOfOrigin: 'Китай',
		}
	},
	{
		id: 10022,
		affiliation: 'woman',
		name: 'Зимние сапоги No Brand',
		type: 'boots',
		whereType: 'foot',
		description: 'Эта пара обуви не оставит безразличным никого. Удобная, легкая, практичная - все, что нужно, чтобы чувствовать комфорт в каждом шаге.',
		imgUrl: ['img/Catalog/10022/100221.webp', 'img/Catalog/10022/100222.webp', 'img/Catalog/10022/100223.webp'],
		oldPrice: 1699,
		newPrice: 1099,
		size: [36, 37, 38, 39, 40],
		characteristics: {
			affiliation: 'Женщинам',
			compound: 'Текстиль',
			seasonality: 'Зима',
			color: 'Черный',
			countryOfOrigin: 'Китай',
		}
	},
	{
		id: 10024,
		affiliation: 'woman',
		name: 'Осенние сапоги LanKars с бахромой',
		type: 'boots',
		whereType: 'foot',
		description: 'Высота голенища: 35 см, полуобхват: 18 см (на размер 36).',
		imgUrl: ['img/Catalog/10024/100241.webp', 'img/Catalog/10024/100242.webp', 'img/Catalog/10024/100243.webp'],
		oldPrice: 1999,
		newPrice: 1399,
		size: [36, 37, 39, 40],
		characteristics: {
			affiliation: 'Женщинам',
			compound: 'Натуральная замша',
			seasonality: 'Демисезон',
			color: 'Бордовый',
			countryOfOrigin: 'Польша',
		}
	},
	{
		id: 10025,
		affiliation: 'girl',
		name: 'Черное кэжуал платье для девочки Носи своє однотонное',
		type: 'dress',
		whereType: 'top',
		description: 'Полотно: ангора-альпака. Состав полотна: 45% шерсть, 35% вискоза, 20% полиэстер. Рост: 134-164.',
		imgUrl: ['img/Catalog/10025/100251.webp', 'img/Catalog/10025/100252.webp', 'img/Catalog/10025/100253.webp'],
		oldPrice: 649,
		newPrice: 499,
		size: ['134см', '140см', '146см', '152см', '158см', '164см'],
		characteristics: {
			affiliation: 'Девочкам',
			compound: '45% шерсть, 35% вискоза, 20% полиэстер',
			seasonality: 'Демисезон',
			color: 'Черный',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10026,
		affiliation: 'girl',
		name: 'Черное кэжуал платье для девочки Носи своє однотонное',
		type: 'dress',
		whereType: 'top',
		description: 'Теплое трикотажное платье с фатином и капюшоном. Для девочек от 5 до 15 лет. Детали: Платье черно-красного цвета. Накладные карманы спереди. Подол платья украшен фатином. Глубокий капюшон. Белая тесьма с принтом "Yumster".',
		imgUrl: ['img/Catalog/10026/100261.webp', 'img/Catalog/10026/100262.webp', 'img/Catalog/10026/100263.webp'],
		oldPrice: 749,
		newPrice: 399,
		size: ['110см', '116см', '146см', '152см'],
		characteristics: {
			affiliation: 'Девочкам',
			compound: '90% хлопок, 10% полиэстер',
			seasonality: 'Зима',
			color: 'Красный',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10028,
		affiliation: 'girl',
		name: 'Черные демисезонные зауженные джинсы A-yugi',
		type: 'jeans',
		whereType: 'bottom',
		description: 'Черные демисезонные зауженные джинсы A-yugi',
		imgUrl: ['img/Catalog/10028/100281.webp', 'img/Catalog/10028/100282.webp', 'img/Catalog/10028/100283.webp'],
		oldPrice: 900,
		newPrice: 679,
		size: ['140см', '146см', '152см'],
		characteristics: {
			affiliation: 'Девочкам',
			compound: '95% хлопок, 5% эластан',
			seasonality: 'Демисезон',
			color: 'Черный',
			countryOfOrigin: 'Турция',
		}
	},
	{
		id: 10030,
		affiliation: 'girl',
		name: 'Темно-синие демисезонные скинни джинсы A-yugi',
		type: 'jeans',
		whereType: 'bottom',
		description: 'Практичные джинсы являются универсальным предметом гардероба, поскольку отлично сочетаются с разнообразной обувью и одеждой. Джинсовые изделия удобны в использовании, подходят для теплой и прохладной погоды, хорошо носятся и гармонично дополняют как повседневный, так и праздничный образ. Популярный турецкий производитель детской одежды A-yugi выпустил для девочек стильные демисезонные джинсы. Они пошиты из прочного коттона высокого качества. Надежный материал не растягивается, хорошо переносит стирку, не линяет. Он приятный на ощупь, не раздражает и не натирает кожу. Джинсы обладают хорошим фасоном и удобной посадкой. Материал плотно облегает фигуру, подчеркивая ее достоинства. При этом изделие не сковывает движений, ребенок будет чувствовать себя комфортно. Брюки застегиваются на талии с помощью молнии и кнопки, не пережимают. Декоративная строчка и легкие потертости придают джинсам оригинальный и стильный внешний вид.',
		imgUrl: ['img/Catalog/10030/100301.webp', 'img/Catalog/10030/100302.webp', 'img/Catalog/10030/100303.webp'],
		oldPrice: 760,
		newPrice: 599,
		size: ['164см', '170см'],
		characteristics: {
			affiliation: 'Девочкам',
			compound: '95% хлопок, 5% эластан',
			seasonality: 'Демисезон',
			color: 'Темно-синий',
			countryOfOrigin: 'Турция',
		}
	},
	{
		id: 10032,
		affiliation: 'girl',
		name: 'Черные кэжуал осенние кожаные ботинки на девочку Tutubi',
		type: 'boots',
		whereType: 'foot',
		description: 'Подростковая обувь TUTUBI изготовлена из натуральной кожи, высокого качества. Обувь прекрасно подойдет для школы или повседневных прогулок.Модель ортопедическая: ботинки имеют жесткий задник, хорошо фиксирующий ногу и стельку с супинатором для профилактики плоскостопии.Обувь Tutubi в стильном дизайне - это комфорт и удобство на каждый день. Состав Натуральная кожа.',
		imgUrl: ['img/Catalog/10032/100321.webp', 'img/Catalog/10032/100322.webp', 'img/Catalog/10032/100323.webp'],
		oldPrice: 3999,
		newPrice: 2199,
		size: [26, 27, 29, 31],
		characteristics: {
			affiliation: 'Девочкам',
			compound: 'Экозамша',
			seasonality: 'Демисезон',
			color: 'Черный',
			countryOfOrigin: 'Турция',
		}
	},
	{
		id: 10033,
		affiliation: 'girl',
		name: 'Черные кэжуал зимние ботинки зимние Tutubi',
		type: 'boots',
		whereType: 'foot',
		description: 'Практичные и удобные ортопедические зимние ботинки фирмы Tutubi. Ботинки выполнены из кожи и нубука, внутри- натуральный мех. Удобная фиксациямолнией позволяет подобрать обувь на ногу разной полноты и высоты свода. Анатомическая стелька с супинатором поддержит свод стопы и поспособствует здоровому развитию мышц.О фиксации щиколотки позаботится жесткий задник. Подошва ребристая из термокаучука не скользит и хорошо амортизирует при походке. Не отказывайте своему сокровищу носить правильную ортопедическую обувь класса премиум+.',
		imgUrl: ['img/Catalog/10033/100331.webp', 'img/Catalog/10033/100332.webp', 'img/Catalog/10033/100333.webp'],
		oldPrice: 2600,
		newPrice: 1299,
		size: [26, 27, 29, 31],
		characteristics: {
			affiliation: 'Девочкам',
			compound: '	Натуральная кожа',
			seasonality: 'Зима',
			color: 'Черный',
			countryOfOrigin: 'Турция',
		}
	},
	{
		id: 10035,
		affiliation: 'boy',
		name: 'Худи для мальчика Носи своє 6338 серые повседневные',
		type: 'sweater',
		whereType: 'top',
		description: 'Худи для мальчика Носи своє 6338 серые повседневные',
		imgUrl: ['img/Catalog/10035/100351.webp', 'img/Catalog/10035/100352.webp', 'img/Catalog/10035/100353.webp'],
		oldPrice: 599,
		newPrice: 419,
		size: ['134см', '140см', '146см', '170см'],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: '	80% хлопок, 20% полиэстер',
			seasonality: 'Демисезон',
			color: 'Серый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10036,
		affiliation: 'boy',
		name: 'Черная зимняя зимняя куртка на эко-пухе Tiaren Gary',
		type: 'jacket',
		whereType: 'top',
		description: 'Стильная комфортная зимняя куртка с наполнителем на экопухе для мальчиков-подростков. Куртка из высококачественной плащевки и подкладки.',
		imgUrl: ['img/Catalog/10036/100361.webp', 'img/Catalog/10036/100362.webp', 'img/Catalog/10036/100363.webp'],
		oldPrice: 3300,
		newPrice: 2799,
		size: ['140см', '146см', '158см'],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: '100 % полиэстер',
			seasonality: 'Зима',
			color: 'Черный',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10038,
		affiliation: 'boy',
		name: 'Коричневые кэжуал демисезонные брюки джоггеры Yumster',
		type: 'pants',
		whereType: 'bottom',
		description: 'Тонкие детские штаны на лето. Модель - унисекс. Размерный ряд: на рост от 122 см до 164 см.  Детали модели: Основной цвет - коричневый. Брюки полуприлегающего силуэта со смещенным боковыми швами. Есть два боковых кармана. В поясе и по низу брюк вставлена резинка. Декор - фирменный принт Say Cheese.Состав: 100% полиэстерРекомендации по уходу: машинная стирка при температуре 30 градусов.',
		imgUrl: ['img/Catalog/10038/100381.webp', 'img/Catalog/10038/100382.webp', 'img/Catalog/10038/100383.webp'],
		oldPrice: 380,
		newPrice: 269,
		size: ['122см', '128см', '140см', '164см'],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: '100% полиэстер',
			seasonality: 'Демисезон',
			color: 'Коричневый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10039,
		affiliation: 'boy',
		name: 'Коричневые кэжуал демисезонные брюки джоггеры Yumster',
		type: 'pants',
		whereType: 'bottom',
		description: 'Крутые серые штаны с резинкой внизу. Для мальчиков и подростков от 5 до 16 лет. Детали: штаны серого цвета. Брендированная молния на боковых карманах. Брендированные лампасы. Пояс выполнен из прочной рибаны. Завязка на шнурке. Материал - трехнитка. Состав: 90% хлопок, 10% эластан.',
		imgUrl: ['img/Catalog/10039/100391.webp', 'img/Catalog/10039/100392.webp', 'img/Catalog/10039/100393.webp'],
		oldPrice: 459,
		newPrice: 379,
		size: ['140см', '164см'],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: '	90% хлопок, 10% эластан',
			seasonality: 'Демисезон',
			color: 'Светло-серый',
			countryOfOrigin: 'Украина',
		}
	},
	{
		id: 10041,
		affiliation: 'boy',
		name: 'Серые кэжуал осенние ботинки из на мальчика Tutubi',
		type: 'boots',
		whereType: 'foot',
		description: 'Подростковая обувь TUTUBI изготовлена из натуральной кожи, высокого качества. Обувь прекрасно подойдет для школы или повседневных прогулок.Модель ортопедическая: ботинки имеют жесткий задник, хорошо фиксирующий ногу и стельку с супинатором для профилактики плоскостопии.Обувь Tutubi в стильном дизайне - это комфорт и удобство на каждый день.Состав Нубук',
		imgUrl: ['img/Catalog/10041/100411.webp', 'img/Catalog/10041/100412.webp', 'img/Catalog/10041/100413.webp'],
		oldPrice: 3000,
		newPrice: 2299,
		size: [34, 36, 37],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: 'Натуральный нубук',
			seasonality: 'Демисезон',
			color: 'Серый',
			countryOfOrigin: 'Турция',
		}
	},
	{
		id: 10042,
		affiliation: 'boy',
		name: 'Серые кэжуал осенние ботинки Tutubi',
		type: 'boots',
		whereType: 'foot',
		description: 'Стильные демисезонные ботинки серого цвета созданы для активных мальчиков. Верх - натуральны нубуксерого цвета, внутри ботинки утепленные байкой, стелька с профилактикой . В качестве застежки используется широкая липучка из вставками кожи тогожецвета. Подошва из качественной термопластичной резины. Демисезонные ботинки на мальчика созданы с учетом важных ортопедических составляющих: ортопедическая стелька, жесткий задник и супинатор. Легкие и практические демисезонные ботинки станут прекрасной парой демисезонной обуви за счет использования исключительно натуральных материалов',
		imgUrl: ['img/Catalog/10042/100421.webp', 'img/Catalog/10042/100422.webp', 'img/Catalog/10042/100423.webp'],
		oldPrice: 3800,
		newPrice: 2599,
		size: [34, 36, 37, 38, 39],
		characteristics: {
			affiliation: 'Мальчикам',
			compound: 'Натуральная кожа',
			seasonality: 'Демисезон',
			color: 'Серый',
			countryOfOrigin: 'Турция',
		}
	},
]