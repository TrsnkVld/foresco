<template>
	<main class="case">
		
		<SingleSection bgStyle="background: #ffffff;" textStyle="color: #000000;">

			<SeparatorLine sm="60" md="40" lg="120" />

			<SectionTitle class="main-title">Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Управляйте долгами с Saldo"
					text="Мы создали информативный, минималистичный интерфейс, сочетающий интуитивное управление и функциональность"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
					imgPosition="bottom--overflow"
					img="saldo/saldo-4.png"
				/>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Долг и заем – всегда отношения нескольких сторон. Создайте совместный долг в Saldo и вы забудете о разногласиях в финансовых вопросах."
					type="left"
					position="bot"
					bgStyle="background-color: #1a1a1a;"
					imgPosition="bottom-left--overflow"
					img="saldo/saldo-2.png"
				/>
				<ContentBlockSM
					title="Подтверждайте каждую транзакцию"
					text="Любые изменения по долгу происходят только с согласия всех сторон сделки. Каждому участнику доступна история платежей и действий за весь период"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlockSM
					title="Отслеживайте статистику"
					text="Анализируйте динамику изменения общей суммы ваших долгов и займов за выбранный период"
					bgStyle="background: #ffffff;"
					textStyle="color: #000000"
				/>
				<ContentBlockLG
					title="Сохраняйте приватность"
					text="В Saldo отсутствует регистрация и мы никогда не запрашиваем личных данных участников сделки. Дополнительно можно установить вход по паролю"
					bgStyle="background-color: #1a1a1a;"
					img="saldo/saldo-3.png"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="60" md="20" lg="60" />

		</SingleSection>
		<!--
		<SingleSection bgStyle="background: #ffffff;" textStyle="color: #000000;">
			<SeparatorLine sm="120" md="40" lg="120" />


			<ListBlock title="Совместный долг в Saldо - это:" :items="listBlockItems" :imageSrc="require('../../assets/img/saldo/two-phones.png')" />


		</SingleSection>
-->
		<SingleSection>
			<SeparatorLine sm="60" md="40" lg="120" />

			<TitleText title="Задача" text="Разработать приложение, которое станет простым инструментом для учета бухгалтерии по долгам и займам. Программа автоматизирует процесс ведения долгов и будет производить расчеты под контролем всех участников сделки. Сможет эффективно применяться как в бизнесе, так и в повседневной жизни." />
			<SeparatorLine sm="60" md="40" lg="60" />

			<ImageBlock :imageSrc="require('../../assets/img/big-img.png')" small />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ContentBlockWrap>

				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>На первом этапе мы изучили запросы целевой аудитории, которые на данный момент не были реализованы полностью ни в одном приложении. Ключевые из них – частичное погашение долгов, сохранение анонимности личных данных, отсутствие регистрации в приложении и совместное ведение долгов. За время разработки наша команда столкнулась с задачами, которые не имели готового технического решения. </p><p>Например, было важно сохранить информацию о долгах не в телефоне, а привязать ее к пользователю. Частичная синхронизация с iCloud обеспечила доступ к долгам и займам с любого устройства</p><p>После реализации технических вопросов мы приступили к тестированию продукта. Нам важно, чтобы приложение не только работало без ошибок, но и было удобно для пользователя</p>"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="60" md="40" lg="90" />
			<ImageBlock :imageSrc="require('../../assets/img/mockup_1.png')" hover />
			<SeparatorLine sm="60" md="40" lg="120" />

			<ContentBlockWrap>

				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>В приложении используются три основных цвета: красный – для долгов, зеленый – для займов и синий – нейтральный цвет интерфейса. В качестве фонового цвета взята светлая тема, которая оптимальна для работы с текстовой информацией.</p><p>При разработке логотипа нам было важно отобразить суть приложения. Основной элемент -стрелки, направленные в противоположных направлениях. Одна символизирует входящие долги, другая – исходящие. Общая концепция логотипа строится на современном тренде минимализма.</p>"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="60" md="40" lg="90" />

			<ImageBlock :imageSrc="require('../../assets/img/mockup_2.png')" hover />
		</SingleSection>

		<SingleSection textStyle="color: #ffffff;">
			<SeparatorLine sm="60" md="40" lg="120" />

			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<SeparatorLine sm="60" md="40" lg="120" />

			<ImageBlock :imageSrc="require('../../assets/img/big-img.png')" small />
		</SingleSection>

		<SingleSection textStyle="color: #ffffff;">
			<SeparatorLine sm="60" md="40" lg="120" />

			<SliderFaq title="Вопрос-Ответ" :items="sliderFaqItems" btnColor="rgb(2, 98, 206)" />
		</SingleSection>

		<SingleSection>
			<SeparatorLine sm="0" md="0" lg="60" />

			<BannerLink 
				title="Соберите все долги и займы в Saldo"
				subTitle="Оцените приложение в AppStore"  
				img="saldo/banner-saldo.png" 
				link="https://www.google.ru/"
			/>
		</SingleSection>

		<SingleSection>

			<SeparatorLine sm="40" md="70" lg="90" />

			<FeedbackBlock btnColor="rgb(2, 98, 206)" />

			<SeparatorLine sm="40" md="70" lg="90" />
		</SingleSection>
	</main>
</template>

<script>

export default {
	name: "CaseSaldoDebts",
	data: () => ({
		currentSlide: 0,
		colors: [
			"background-color: #f04f6c;",
			"background-color: #141516;",
			"background-color: #2d2d32;",
			"background-color: #ffffff;"
		],
		swiperOptions: {
			direction: "vertical",
			mousewheel: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			//spaceBetween: 15,
			navigation: {
				nextEl: ".case-swiper-nav__next",
				prevEl: ".case-swiper-nav__prev"
			},
			pagination: {
				el: ".case-swiper-pagination",
				type: "fraction",

				renderFraction: function(currentClass, totalClass) {
					return `<span class="${currentClass}"></span>—<span class="${totalClass}"></span>`;
				}
			}
		},
		
		listBlockItems: [
			"Увеличение или уменьшение суммы долга с согласия каждого участника сделки",
			"История платежей и подтверждений по выплатам у всех участников",
		],

		sliderFaqItems: [

			{
				date: "20.12.2020 11:35",
				name: "Алексей",
				question: "Нужна ли регистрация для работы в приложении?",
				answer: "Нет, регистрация в приложении не требуется."
			},
			{
				date: "20.12.2020 11:35",
				name: "Ирина",
				question: "Есть ли возможность вести долги в нескольких валютах?",
				answer:
					"Вы сами выбираете валюту, в которой будете вести долг. На данный момент в Saldo представлено более 150 видов валют."
			},
			{
				date: "20.12.2020 11:35",
				name: "Максим",
				question: "Можно ли сохранить анонимность при вступлении в совместный долг?",
				answer:
					"Личные данные участников остаются скрытыми для всех сторон сделки."
			},
			{
				date: "20.12.2020 11:35",
				name: "Александр",
				question: "Как будут начисляться проценты, если постоянно менялась сумма долга?",
				answer:
					"При изменении суммы долга за расчетный период проценты будут высчитываться отдельно за каждый промежуток."
			},
			{
				date: "20.12.2020 11:35",
				name: "Елена",
				question: "Сохранятся ли долги при потере телефона?",
				answer:
					"Да, сохранятся, если у вас PREMIUM версия, в которой есть синхронизация с iCloud."
			}
		],

		sliderInfoItems: [
			{
				title: '🔥 Push & Local Notification',
				text: 'Локальные и генерируемые сервером пуш уведомления',
			},
            {
                title: '🔥 Elixir и Phoenix Framework',
                text: 'Отказоустойчивый и легко масштабируемый сервер',
            },
            {
                title: '🔥 StoreKit',
                text: 'Встроенные покупки в приложении',
            },
			{
				title: '🔥 CloudKit ',
				text: 'Синхронизация данных с облачным хранилищем iCloud',
			},
			{
				title: '🔥 REST API, JSON',
				text: 'Клиент-серверное взаимодействие',
			},
            {
                title: '🔥 Face ID, Touch ID',
                text: 'Биометрические системы аутентификации',
            },
            {
                title: '🔥 Real time syncing',
                text: 'Синхронизация с ICloud в реальном времени',
            },
			{
				title: '🔥 Associated Domains',
				text: 'Связь между приложением и доменным именем',
			},
			{
				title: '🔥 Firebase',
				text: 'Получение статистики и сбоев приложения',
			},
			{
				title: '🔥 Аутентификация через ссылку',
				text: 'Алгоритм одноразовой авторизации по ссылке',
			},
            {
                title: '🔥 CoreAnimation, CoreGraphics',
                text: 'Технология компании Apple для создания анимаций',
            },
            {
                title: '🔥 QR Code ',
                text: 'Генерация и чтение QR кодов',
            },
            {
                title: '🔥 Localization | Apple',
                text: 'Локализация приложения на английский, китайский, испанский',
            },

		]
	}),
	methods: {
		filterIt(arr, searchKey) {
			for(let i=0; i<arr.length; i++) {
				if(arr[i].alias === searchKey) {
					this.currentSlide = i;
					this.$emit('onCaseLoad', this.currentSlide)
				}
			}
		}
	},
	mounted() {
		this.filterIt(this.$store.state.cases, this.$route.name);
		//this.$emit('onCaseLoad', this.currentSlide)
	}
};
</script>