import type { BaseTranslation } from '../i18n-types'

const ru = {
	ogDescription: 'В наличии ⭐ Запчасти по доступной цене от лучших производителей. ➡️ Оригинал и аналоги ✈️ Быстрая доставка ❗ Гарантия',
	title: 'typesafe-i18n - Svelte Fall Summit {year:number}',
	titlePattern: '{name:string} - Купить недорого в Украине',
	descriptionPattern: 'В наличии ⭐️ {name:string}  ⭐️ по цене ✔️ {price:number} грн. ☝ 100% Оригинал ❗ Гарантия ✈️ Доставка',
	termTitlePattern: 'Запчасти {name:string} - Купить с доставкой в Украине',
	termDescriptionPattern: 'В наличии ⭐ Запчасти {name:string} ⭐ по доступной цене от лучших производителей. ➡️ Оригинал и аналоги ✈️ Быстрая доставка ❗ Гарантия',
	welcome: 'Вітаємо {year:number}',
	spectators: '{0} live spectator{{s}}',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `This log was called from '{fileName:string}'`,
	sku: 'Код товара:',
	addToCart: 'Заказать',
	addToCartOneClick: 'Купить в 1 клик',
	page404: '404. Страница не найдена',
	page500: '500. Ошибка сервера',
	returnToShop: 'Вернуться в магазин',
	total: 'Сумма',
	total2: 'Вместе:',
	checkoutBtn: 'Оформить заказ',
	cnt: 'Количество',
	product: 'Товар',
	price: 'Цена',
	cartTitle: 'Корзина',
	description: 'Краткое описание',
	cartTitleEmpty: 'Ваша корзина пуста',
	checkoutTitle: 'Оформление заказа',
	recommenderTitle: 'С этим товаром покупают',
	deliveryCost: 'По тарифам перевозчика',
	secure: 'Гарантия безопасной сделки',
	discounts: 'Акции',
	yourCabinet: 'Ваш кабинет',
	enter: 'Войти',
	allBrands: 'Все марки авто',
	checkout: {
		'reciever': 'Получатель',
		'surname': 'Фамилия',
		'name': 'Имя',
		'phone': 'Телефон',
		'email': 'E-mail',
		'delivery': 'Доставка',
		'novaDelivery': 'Новая почта',
		'city': 'Населенный пункт',
		'cityPlaceholder': 'Выберите населенный пункт',
		'cityPlaceholder2': 'Введите название населенного пункта',
		'cityEmpty': 'Не найдено адресов',
		'office': 'Отделение',
		'officePlaceholder': 'Выберите отделение',
		'officePlaceholder2': 'Введите номер или адрес отделения',
		'selfdelivery': 'Самовывоз',
		'payment': 'Оплата',
		'paymentAfter': 'При получении',
		'comment': 'Комментарий',
		'orderInfo': 'Информация про заказ',
		'orderInfoCnt': 'В вашей корзине {cnt:number} {product:string}:',
		'product': 'товар, товара, товаров',
		'total': 'Всего:',
		'deliveryCost': 'Стоимость доставки',
		'totalCost': 'К оплате',
		'delete': 'Удалить',
		'createOrder': 'Оформить заказ',
		'notification': 'Отправляя заявку, вы соглашаетесь на обработку персональных данных',
		'success': 'Спасибо за Ваш заказ'
	},
	checkoutErrors: {
		firstName: 'Введите имя',
		lastName: 'Введите фамилию',
		phone: 'Введите телефон',
		email: 'Введите E-mail',
		city: 'Обязательно поле',
		office: 'Обязательно поле',
	},
	ordering: {
		new: 'Новинки',
		priceASC: 'От дешевых к дорогим',
		priceDESC: 'От дорогих к дешевым'
	},
	terms: 'Категории',
	notifications: {
		addedToCart: 'Добавлено в корзину!',
		showCart: 'Посмотреть корзину',
		cnt: 'К-во'
	},
	oneClick: {
		header1: 'Введите номер телефона.',
		header2: 'Мы Вам перезвоним для оформления заказа.',
		errors: {
			phone: {
				required: 'Введите телефон'
			}
		},
		callToAction: 'Жду звонка',
		success1: 'Спасибо за Вашу заявку.',
		success2: 'Вскоре наш менеджер свяжется с Вами для уточнения деталей Вашего заказа.'
	},
	feadback: {
		title: 'Не нашли нужную деталь?',
		subtitle: 'Заполните форму и с Вами свяжется наш менеджер',
		name: 'Ваше имя',
		phone: 'Ваш телефон',
		callToAction: 'Получить консультацию',
		errors: {
			required: {
				name: 'Введите имя',
				phone: 'Введите телефон',
				email: 'Введите email'
			}
		},
		notification: {
			success: {
				header: 'Спасибо за Вашу заявку',
				p: 'Мы свяжемся с Вами в кратчайшие сроки'
			},
			error: {
				header: 'Ошибка отправки',
				p: 'К сожалению, мы не смогли отправить Ваше сообщение'
			}
		}
	},
	country: 'Страна',
	search: {
		title: 'Быстрый поиск:',
		title2: 'выберите марку',
		model: {
			title: 'Модель',
			empty: 'Выберите модель'
		},
		category: {
			title: 'Категория',
			empty: 'Выберите категорию'
		},
		show: 'Показать'
	},
	advantages: {
		a: 'Наши цены на уровне рыночных и ниже',
		b: 'Возможен безналичный расчет',
		c: 'Доставка во все точки Украины',
		d: 'Товар всегда в наличии на складе',
	},
	ad: {
		title: 'Новая поставка',
		subtitle: 'машинное масло Brand'
	},
	stats: {
		title: 'Цифры говорят лучше слов',
		group: {
			a: {title: '20 лет', value: 'Продаем на рынке Украины'},
			b: {title: '12 000+', value: 'Продаем запчасти на год'},
			c: {title: '1 000+', value: 'Отзывов довольных клиентов'},
		}
	},
	contacts: {
		title: 'Наши контакты',
		phone: 'Телефон',
		mail: 'Почта',
		address: 'Адрес',
		form: {
			title: 'Заполните форму',
			subtitle: 'И получите консультацию нашего менеджера',
		},
		schedule: 'Пн-пт с 08:00 до 18:00 <br> Сб-вс с 08:00 до 16:00'
	},
	faq: {
		title: 'Поддержка клиентов',
		phone: 'Телефон поддержки:'
	},
	about: {
		title: 'О нашей компании',
		subtitle: 'в деталях',
		items: {
			a: {
				title: 'Пунктуальность в поставках',
				description: 'Наша логистическая система максимально эффективна, чтобы гарантировать своевременные поставки в любой регион Украины' //Наша логістична система максимально ефективна, щоб гарантувати своєчасні поставки у будь-який регіон України 
			},
			b: {
				title: 'Широкий ассортимент',
				description: 'Предлагаем большой выбор оригинальных и сертифицированных автозапчастей от ведущих производителей'
			},
			c: {
				title: 'Выгодные цены',
				description: 'Мы понимаем, что каждый клиент уникален, поэтому готов работать над индивидуальными условиями и скидками для постоянных клиентов'
			}
		}
	},
	delivery: {
		title: 'Доставка и оплата',
		delivery: {
			title: 'Доставка товара',
			p: 'Выполняем доставку удобным для вас способом:',
			a: 'Укрпочта',
			b: 'Новая почта',
			c: 'Деливери'
		},
		payment: {
			title: 'Оплата товара',
			p: 'Оплатить Вы можете нам на банковский счет:',
			a: 'Приватбанка',
			b: 'Монобанка',
			c: 'Укрсиббанка',
		}
	},
	menu: {
		main: 'Главная',
		about: 'О нас',
		contacts: 'Контакты',
		support: 'Поддержка клиентов',
		delivery: 'Доставка и оплата',
		shop: 'Каталог',
		cart: 'Корзина',
		wishlist: 'Избранное',
		dropshipping: 'Дропшиппинг',
		blog: 'Полезные материалы',
		empty: 'Нету записей'
	},
	downloadLink: 'Скачать прайс-лист',
	working: 'Сейчас работаем',
	catalog: 'Каталог товаров',
	wishlist: {
		title: 'Избранное',
		fullTitle: 'Список избранного',
		empty: 'Ваш список избранных товаров пустой'
	},
	blog: {
		title: 'Новости',
		more: 'Подробнее'
	},
	login: {
		form: {
			title: 'Вход',
			submit: 'Войти',
			createText: 'Нет аккаунта?',
			createLink: 'Создайте его.'
		},
		errors: {
			title: 'Вход в личный кабинет',
			error401: 'Неверный логин или пароль',
			error400: 'Ошибка сервера. Повторите попытку позже',
			email: {
				required: 'Введите e-mail'
			},
			password: {
				required: 'Введите пароль'
			}
		}
	},
	orders: {
		nw: 'Новая заявка',
		wk: 'В работе',
		ep: 'Комплектуется',
		dy: 'Доставляется',
		wn: 'Ожидает на складе Новой Почты',
		wp: 'Ожидает в точке самовывоза',
		dn: 'Выполнен',
		cl: 'Отменен'
	},
	orderDelivery: {
		nd: 'Новая почта',
		pu: 'Самовывоз',
	},
	account: {
		title: 'Личный кабинет',
		menu: {
			info: 'Личная информация',
			orders: 'Мои заказы',
			exit: 'Выйти',
		},
		info: {
			title: 'Ваши данные',
			fields: {
				first_name: "Имя",
				last_name: 'Фамилия',
				phone: 'Телефон',
				save: 'Сохранить'
			}
		},
		orders: {
			num: '№ заказа',
			date: 'Дата заказа',
			quantity: 'Количество товаров',
			sum: 'Сумма заказа',
			status: 'Статус',
			empty: 'У Вас нет заказов'
		},
		orderDetail: {
			title: 'Информация про заказ',
			dateTime: 'Дата, время заказа',
			status: 'Статус заказа',
			num: 'Номер заказа',
			quantity: 'Количество товаров',
			sum: 'Сумма заказа',
			delivery: 'Способ доставки',
			address: 'Адрес доставки'
		},
		userForm: {
			title: 'Обновление профиля',
			title2: 'Ваши данные',
			error500: 'Ошибка сервера',
			success: 'Данные успешно обновлены'
		},
		register: {
			title: 'Регистрация',
			fields: {
				email: 'E-mail',
				password: 'Пароль',
				password2: 'Повторите пароль',
				submit: 'Регистрация'
			}
		},
		confirm: {
			title: 'Подтвердите E-mail',
			p: 'Мы отправили Вам на почтовый ящик письмо для подтверждения Вашего аккаунта.'
		},
		success: {
			title: 'Аккаунт активировано',
			p: 'Регистрация успешно завершена. Теперь Вы можете ',
			p2: 'войти'
		},
		failed: {
			title: 'Ошибка активации',
			p: 'Не удалось активировать аккаунт. Возможно Вы его уже активировали ранее.',
		}
	},
	create: {
		errors: {
			username: {
				required: 'Введите e-mail',
				invalid: 'Введите существующий e-mail'
			},
			password: {
				match: 'Пароли не совпадают',
				minLength: 'Пароль должен быть не короче 8 символов'
			}
		}
	},
	shopsHeaders: 'Этот товар Вы можете заказать в магазинах:',
	shopAddressLabel: 'Адрес',
	shops: [
		{address: 'г. Харьков, ул. Москалевская, 36', link: 'https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE+%D0%94%D1%96%D0%BB%D0%B5%D1%80/@49.9788601,36.2182591,16z/data=!4m14!1m7!3m6!1s0x4127a11bbc49d315:0x941f4b48e90c4a5f!2z0JDQstGC0L4g0JTRltC70LXRgA!8m2!3d49.9794114!4d36.2219821!16s%2Fg%2F11vq6lnbgp!3m5!1s0x4127a11bbc49d315:0x941f4b48e90c4a5f!8m2!3d49.9794114!4d36.2219821!16s%2Fg%2F11vq6lnbgp?entry=ttu'},
		{address: 'г. Мерефа, ул. Днепровская, 131', link: 'https://www.google.com/maps/place/Dnipro-M/@49.8186517,36.0613506,15.17z/data=!4m6!3m5!1s0x4127a1e21929a889:0x3b9cce1ad7063ab!8m2!3d49.8184162!4d36.0638425!16s%2Fg%2F11q7zzn0d8?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D'},
		{address: 'г. Балаклея, ул. Центральная, 2а', link: 'https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE%D0%9C%D0%B5%D0%B3%D0%B0%D0%BF%D0%BE%D0%BB%D1%96%D1%81/@49.4538952,36.8470652,16z/data=!4m6!3m5!1s0x41275386155b5edb:0x21650eaf1bbf57d7!8m2!3d49.4536248!4d36.8495177!16s%2Fg%2F11h84lx75b?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D'},
	],
	emptyProducts: "По Вашему запросу товаров не найдено",
	searchResultTitle: 'Результаты поиска "<em>{s:string}</em>"',
	headerSearch: {
		button: 'Поиск',
		submit: 'Найти',
		placeholder: 'Я ищу...'
	},
	ds: {
		takeOffer: {
			title: 'Заполните форму',
			subtitle: 'И получите специальный пакет обслуживания новых клиентов',
			name: 'Ваше имя',
			phone: 'Ваш телефон',
			city: 'Ваш город',
			submit: 'Отправить',
			clientTypes: [
				"Представителем какого бизнеса вы являетесь?",
				"Магазин автозапчастей",
				"СТО",
				"Онлайн-магазин",
				"Торговая точка на рынке",
				"Компания оптовой та розничной торговли",
				"Автобаза",
				"Компания с собственным автопарком"
			],
			productTypes: [
				"Какие товары вас интересуют?",
				"Запчасти от топовых брендов",
				"Масла",
				"Автохимия",
				"Оборудование для СТО"
			],
			errors: {
				clientType: {required: 'Виберите из списка'},
				productType: {required: 'Виберите из списка'},
				name: {required: 'Введите имя'},
				phone: {required: 'Введите телефон'},
				city: {required: 'Введите город'},
			}
		},
		main: {
			title: 'Оптовая продажа<br/> автозапчастей',
			button: 'Стать партнером',
		},
		stats: [
			'<strong>Более 100 тыс.</strong> позиций автокомпонентов', 
			'<strong>20 лет</strong> на рынке автозапчастей Украины', 
			'<strong>Официальная гарантия</strong> качества продукции', 
			'Отсрочка платежа или <strong>поэтапная оплата</strong>'
		],
		list: {
			title: 'Эксклюзивные торговые марки по самым выгодным ценам',
			features: [
				'Персональный менеджер, консультации и помощь с подбором запчастей',
				'Возможность обмена и возврата товара',
				'Гарантия на запчасти от производителя',
				'Отсрочка платежа',
				'Быстрая и удобная доставка заказов',
			]
		},
		feadback: {
			title: 'Получите прайс-лист для партнеров',
			subtitle: 'Заполните форму и получите выгодное предложение для вашего бизнеса',
			submit: 'Получить прайс',
		}
	}
} satisfies BaseTranslation

export default ru