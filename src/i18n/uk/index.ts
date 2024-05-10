import type { BaseTranslation } from '../i18n-types'

const uk = {
	ogDescription: 'В наявності ⭐ Запчастини за доступною ціною від кращих виробників. ➡️ Оригінал та аналоги ✈️ Швидка доставка ❗ Гарантія',
	title: 'typesafe-i18n - Svelte Fall Summit {year:number}',
	titlePattern: '{name:string} - Купити недорого в Україні',
	descriptionPattern: '⭐️ {name:string} ⭐️ за ціною ✔️ {price:number} грн. ☝ 100% Оригінал ❗ Гарантія ✈️ Доставка',
	termTitlePattern: 'Запчастини {name:string} - Купити з доставкою в Україні',
	termDescriptionPattern: 'В наявності ⭐ Запчастини {name:string} ⭐ за доступною ціною від кращих виробників. ➡️ Оригінал та аналоги ✈️ Швидка доставка ❗ Гарантія',
	welcome: 'Вітаємо {year:number}',
	spectators: '{0} live spectator{{s}}',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `This log was called from '{fileName:string}'`,
	sku: 'Код товару:',
	addToCart: 'Замовити',
	addToCartOneClick: 'Купити в 1 клік',
	page404: '404. Сторінка не знайдена',
	page500: '500. Помилка сервера',
	returnToShop: 'Повернутись до магазину',
	total: 'Сума',
	total2: 'Разом:',
	checkoutBtn: 'Оформити замовлення',
	cnt: 'Кількість',
	product: 'Товар',
	price: 'Ціна',
	description: 'Короткий опис',
	cartTitle: 'Кошик',
	cartTitleEmpty: 'Ваш кошик порожній',
	checkoutTitle: 'Оформлення замовлення',
	recommenderTitle: 'З цим товаром купують',
	deliveryCost: 'За тарифами перевізника',
	secure: 'Гарантія безпечної угоди',
	discounts: 'Акції',
	yourCabinet: 'Ваш кабінет',
	enter: 'Увійти',
	allBrands: 'Всі марки авто',
	checkout: {
		'reciever': 'Отримувач',
		'surname': 'Прізвище',
		'name': 'Ім\'я',
		'phone': 'Телефон',
		'email': 'E-mail',
		'delivery': 'Доставка',
		'novaDelivery': 'Нова пошта',
		'city': 'Населений пункт',
		'cityPlaceholder': 'Виберіть населений пункт',
		'cityPlaceholder2': 'Введіть назву населеного пункту',
		'cityEmpty': 'Не знайдено адрес',
		'office': 'Відділ',
		'officePlaceholder': 'Виберіть відділ',
		'officePlaceholder2': 'Введіть номер або адресу відділення',
		'selfdelivery': 'Самовивіз',
		'payment': 'Оплата',
		'paymentAfter': 'При отриманні',
		'comment': 'Коментар',
		'orderInfo': 'Інформація про замовлення',
		'orderInfoCnt': 'У вашій корзині {cnt:number} {product:string}:',
		'product': 'товар, товари, товарів',
		'delete': 'Видалити',
		'total': 'Всього:',
		'deliveryCost': 'Вартість доставки',
		'totalCost': 'До сплати',
		'createOrder': 'Оформити замовлення',
		'notification': 'Надсилаючи заявку, ви погоджуєтесь на обробку персональних даних',
		'success': 'Дякуємо за Ваше замовлення'
	},
	checkoutErrors: {
		firstName: 'Введіть ім\'я',
		lastName: 'Введіть прізвище',
		phone: 'Введіть телефон',
		email: 'Введіть E-mail',
		city: 'Обов\'язкове поле',
		office: 'Обов\'язкове поле',
	},
	ordering: {
		new: 'Новинки',
		priceASC: 'Від дешевих до дорогих',
		priceDESC: 'Від дорогих до дешевих'
	},
	terms: "Категорії",
	notifications: {
		addedToCart: "Додано в кошик!",
		showCart: "Переглянути кошик",
		cnt: 'К-сть'
	},
	oneClick: {
		header1: 'Введіть номер телефону.',
		header2: 'Ми Вам перетелефонуємо для оформлення замовлення.',
		errors: {
			phone: {
				required: 'Введіть телефон'
			}
		},
		callToAction: 'Чекаю дзвінка',
		success1: 'Дякуємо за Вашу заявку.',
		success2: 'Скоро наш менеджер зв\'яжеться із Вами для уточнення деталей Вашого замовлення.'
	},
	feadback: {
		title: 'Не знайшли потрібну деталь?',
		subtitle: 'Заповніть форму і з Вами зв\'яжеться наш менеджер',
		name: 'Ваше ім\'я',
		phone: 'Ваш телефон',
		callToAction: 'Отримати консультацію',
		errors: {
			required: {
				name: 'Введіть ім\'я',
				phone: 'Введіть телефон'
			}
		},
		notification: {
			success: {
				header: 'Дякуємо за Вашу заявку',
				p: 'Ми звяжемось із Вами в найкоротший термін'
			},
			error: {
				header: 'Помилка надсилання',
				p: 'На жаль ми не змогли відправити Ваше повідомлення'
			}
		}
	},
	country: 'Країна',
	search: {
		title: 'Швидкий пошук:',
		title2: 'выберіть марку',
		model: {
			title: 'Модель',
			empty: 'Выберіть модель'
		},
		category: {
			title: 'Категорія',
			empty: 'Выберіть категорію'
		},
		show: 'Показати'
	},
	advantages: {
		a: 'Наші ціни на рівні ринкових та нижчі',
		b: 'Можливий безготівковий розрахунок',
		c: 'Доставка в усі точки України',
		d: 'Товар завжди в наявності на складі',
	},
	ad: {
		title: 'Нова поставка',
		subtitle: 'машиннe масло Brand'
	},
	stats: {
		title: 'Цифри говорять краще за слова',
		group: {
			a: {title: '20 років', value: 'Працюємо на ринку України'},
			b: {title: '12 000+', value: 'Продаємо запчастин на рік'},
			c: {title: '1 000+', value: 'Відгуків задоволених клієнтів'},
		}
	},
	contacts: {
		title: 'Наші контакти',
		phone: 'Телефон',
		mail: 'Пошта',
		address: 'Адреса',
		form: {
			title: 'Заповніть форму',
			subtitle: 'І отримайте консультацію нашого менеджера',
		},
		schedule: 'Пн-пт з 08:00 до 18:00 <br> Сб-нд з 08:00 до 16:00'
	},
	faq: {
		title: 'Підтримка клієнтів',
		phone: 'Телефон підтримки:'
	},
	about: {
		title: 'Про нашу компанію',
		subtitle: 'в деталях',
		items: {
			a: {
				title: 'Пунктуальність у постачаннях', 
				description: 'Наша логістична система максимально ефективна, щоб гарантувати своєчасні поставки у будь-який регіон України' 
			},
			b: {
				title: 'Широкий асортимент',
				description: 'Пропонуємо великий вибір оригінальних та сертифікованих автозапчастин від провідних виробників'
			},
			c: {
				title: 'Вигідні ціни',
				description: 'Ми розуміємо, що кожен клієнт унікальний, тому готові працювати над індивідуальними умовами та знижками для постійних клієнтів'
			}
		}
	},
	delivery: {
		title: 'Доставка та оплата',
		delivery: {
			title: 'Доставка товару',
			p: 'Виконуємо доставку зручним для вас способом:',
			a: 'Укрпошта',
			b: 'Нова пошта',
			c: 'Делівері'
		},
		payment: {
			title: 'Оплата товару',
			p: 'Оплатити Ви можете нам на банківський рахунок:',
			a: 'Приватбанку',
			b: 'Монобанку',
			c: 'Укрсиббанку',
		}
	},
	menu: {
		main: 'Головна',
		about: 'Про нас',
		contacts: 'Контакти',
		support: 'Підтримка клієнтів',
		delivery: 'Доставка та оплата',
		shop: 'Каталог',
		cart: 'Кошик',
		wishlist: 'Вибране'
	},
	downloadLink: 'Скачати прайс-лист',
	working: 'Зараз працюємо',
	catalog: 'Каталог товарів',
	wishlist: {
		title: 'Бажання',
		fullTitle: 'Список бажань',
		empty: 'Ваш список бажаних товарів пустий'
	},
	blog: {
		title: 'Новини',
		more: 'Детальніше'
	},
	login: {
		form: {
			title: 'Вхід',
			submit: 'Увійти',
			createText: 'Немає аккаунту?',
			createLink: 'Створіть його.'
		},
		errors: {
			title: 'Вхід в особистий кабінет',
			error401: 'Неправильний логін або пароль',
			error400: 'Помилка сервера. Повторіть спробу пізніше',
			email: {
				required: 'Введіть e-mail'
			},
			password: {
				required: 'Введіть пароль'
			}
		}
	},
	orders: {
		nw: 'Нова заявка',
		wk: 'В работі',
		ep: 'Комплектується',
		dy: 'Доставляється',
		wn: 'Чекає на складі Нової Пошти',
		wp: 'Чекає в точці самовивозу',
		dn: 'Виконане',
		cl: 'Скасоване'
	},
	orderDelivery: {
		nd: 'Нова пошта',
		pu: 'Самовивіз',
	},
	account: {
		title: 'Особистий кабінет',
		menu: {
			info: 'Особиста інформація',
			orders: 'Мої замовлення',
			exit: 'Вийти',
		},
		info: {
			title: 'Ваші дані',
			fields: {
				first_name: "Ім'я",
				last_name: 'Прізвище',
				phone: 'Телефон',
				save: 'Зберегти'
			}
		},
		orders: {
			num: '№ замовлення',
			date: 'Дата замовлення',
			quantity: 'Кількість товарів',
			sum: 'Сума замовлення',
			status: 'Статус',
			empty: 'У Вас немає замовлень'
		},
		orderDetail: {
			title: 'Інформація про замовлення',
			dateTime: 'Дата, час замовлення',
			status: 'Статус замовлення',
			num: 'Номер замовлення',
			quantity: 'Кількість товарів',
			sum: 'Сума замовлення',
			delivery: 'Спосіб доставки',
			address: 'Адреса доставки'
		},
		userForm: {
			title: 'Оновлення профілю',
			title2: 'Ваші дані',
			error500: 'Помилка сервера',
			success: 'Дані успішно оновлено'
		},
		register: {
			title: 'Реєстрація',
			fields: {
				email: 'E-mail',
				password: 'Пароль',
				password2: 'Повторіть пароль',
				submit: 'Реєстрація'
			}
		},
		confirm: {
			title: 'Підтверідь E-mail',
			p: 'Ми відправили Вам на поштову скриньку листа для підтвердження Вашої поштової скриньки.'
		},
		success: {
			title: 'Аккаунт активовано',
			p: 'Реєстрація успішно завершена. Тепер Ви можете ',
			p2: 'увійти'
		}
	},
	create: {
		errors: {
			username: {
				required: 'Введіть e-mail',
				invalid: 'Введіть коректний e-mail'
			},
			password: {
				match: 'Паролі не співпадають',
				minLength: 'Пароль повинен бути не коротше 8 символів'
			}
		}
	},
	shopsHeaders: 'Цей товар Ви можете замовити в магазинах:',
	shopAddressLabel: 'Адреса',
	shops: [
		{address: 'м. Харків, вул. Москалівська, 36', link: 'https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE+%D0%94%D1%96%D0%BB%D0%B5%D1%80/@49.9788601,36.2182591,16z/data=!4m14!1m7!3m6!1s0x4127a11bbc49d315:0x941f4b48e90c4a5f!2z0JDQstGC0L4g0JTRltC70LXRgA!8m2!3d49.9794114!4d36.2219821!16s%2Fg%2F11vq6lnbgp!3m5!1s0x4127a11bbc49d315:0x941f4b48e90c4a5f!8m2!3d49.9794114!4d36.2219821!16s%2Fg%2F11vq6lnbgp?entry=ttu'},
	],
	emptyProducts: "По Вашому запиту товарів не знайдено",
	searchResultTitle: 'Результати пошуку "<em>{s:string}</em>"',
	headerSearch: {
		button: 'Пошук',
		submit: 'Знайти',
		placeholder: 'Я шукаю...'
	}
} satisfies BaseTranslation

export default uk