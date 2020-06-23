<template>
	<main class="case">
		
		<SingleSection textStyle="color: #ffffff;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
					imgPosition="bottom--overflow"
					img="saldo/saldo-4.png"
					type="left"
				/>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: #e2e2e2e"
					imgPosition="bottom--overflow"
					img="saldo/saldo-4.png"
					type="left"
				/>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
					imgPosition="bottom--overflow"
					img="saldo/saldo-4.png"
				/>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
					imgPosition="bottom--overflow"
					img="saldo/saldo-4.png"
				/>
				<ContentBlockLG
					title="Управляйте совместными долгами"
					text="Любые изменения по долгу происходят только с согласия всех сторон сделки. Каждому участнику доступна история платежей и действий за весь период"
					type="left"
					position="bot"
					bgStyle="background-color: #1a1a1a;"
					imgPosition="bottom-left--overflow"
					img="saldo/saldo-2.png"
				/>
				<ContentBlockSM
					title="Отслеживайте статистику"
					text="Анализируйте динамику изменения общей суммы ваших долгов и займов за выбранный период"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlockSM
					title="Отслеживайте статистику"
					text="Анализируйте динамику изменения общей суммы ваших долгов и займов за выбранный период"
					bgStyle="background: #ffffff;"
					textStyle="color: #000000"
				/>
				<ContentBlockLG
					title="Сохраняйте конфиденциальность личных данных"
					text="Доступ к сделкам осуществляется по паролю, а личные данные участников остаются скрытыми"
					bgStyle="background-color: #1a1a1a;"
					img="saldo/saldo-3.png"
				/>
			</ContentBlockWrap>
		</SingleSection>

		<SingleSection bgStyle="background-color: #ffffff;">
			<ListBlock :imageSrc="require('../../assets/img/saldo/two-phones.png')" />
		</SingleSection>

		<SingleSection>
			<TitleText title="Задача" text="Разработать приложение, которое станет простым инструментом для учета бухгалтерии по долгам и займам. Программа автоматизирует процесс ведения долгов и будет производить расчеты под контролем всех участников сделки. Сможет эффективно применяться как в бизнесе, так и в повседневной жизни." />
			<ImageBlock :imageSrc="require('../../assets/img/big-img.png')" small />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>На первом этапе мы изучили запросы целевой аудитории, которые на данный момент не были реализованы полностью ни в одном приложении. Ключевые из них – частичное погашение долгов, сохранение анонимности личных данных, отсутствие регистрации в приложении и совместное ведение долгов. За время разработки наша команда столкнулась с задачами, которые не имели готового технического решения. </p><p>Например, было важно сохранить информацию о долгах не в телефоне, а привязать ее к пользователю. Частичная синхронизация с iCloud обеспечила доступ к долгам и займам с любого устройства</p><p>После реализации технических вопросов мы приступили к тестированию продукта. Нам важно, чтобы приложение не только работало без ошибок, но и было удобно для пользователя</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/mockup_1.png')" hover />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>В приложении используются три основных цвета: красный – для долгов, зеленый – для займов и синий – нейтральный цвет интерфейса. В качестве фонового цвета взята светлая тема, которая оптимальна для работы с текстовой информацией.</p><p>При разработке логотипа нам было важно отобразить суть приложения. Основной элемент -стрелки, направленные в противоположных направлениях. Одна символизирует входящие долги, другая – исходящие. Общая концепция логотипа строится на современном тренде минимализма.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/mockup_2.png')" hover />
		</SingleSection>

		<SingleSection textStyle="color: #ffffff;">
			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../../assets/img/big-img.png')" small />
		</SingleSection>

		<SingleSection textStyle="color: #ffffff;">
			<SliderFaq title="Вопрос-Ответ" btnColor="rgb(2, 98, 206)" />
		</SingleSection>

		<SingleSection>
			<BannerLink 
				title="Соберите все долги и займы в Saldo.Долги" 
				subTitle="Оцените приложение в AppStore"  
				img="saldo/banner-saldo.png" 
				link="https://www.google.ru/"
			/>
		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="rgb(2, 98, 206)" />
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
		
		sliderInfoItems: [
			{
				title: '🔥 Push/Local Notification',
				text: 'Локальные и удаленные уведомления',
			},
			{
				title: '🔥 StoreKit',
				text: 'Встроенные покупки',
			},
			{
				title: '🔥 CloudKit ',
				text: 'Синхронизация данных с облачным хранилищем iCloud',
			},
			{
				title: '🔥 REST API, JSON',
				text: 'Клиент-серверное приложение',
			},
			{
				title: '🔥 Realm Database',
				text: 'База данных Realm',
			},
			{
				title: '🔥 CoreAnimation, CoreGraphics',
				text: 'Графика, анимация',
			},
			{
				title: '🔥 Associated Domains',
				text: 'Соедините приложение и веб-сайта',
			},
			{
				title: '🔥 Firebase',
				text: 'Получение полной статистики приложения, отслеживание активности пользователей',
			},
			{
				title: '🔥 Заголовок',
				text: 'чтение qr, расшаривание ссылок, написание сервера',
			},
			{
				title: '🔥 Заголовок',
				text: 'чтение генераций',
			},
			{
				title: '🔥 Заголовок',
				text: 'Сервер на Elexir',
			},
			{
				title: '🔥 Заголовок',
				text: 'Синхронизация с ICloud в реальном времени',
			},
			{
				title: '🔥 Заголовок',
				text: 'поддержка нескольких устройств в реальном времени',
			},
			{
				title: '🔥 Заголовок',
				text: 'Установка пин-кода',
			},
			{
				title: '🔥 Заголовок',
				text: 'Face ID, Touch ID',
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

<style lang="scss">
.case {
	background: $black;
	height: 100%;
	flex-grow: 1;

	.case-header {
		.swiper-container {
			//pointer-events: none;
		}

		.case-card {
			&__text,
			&__img {
				//pointer-events: all;
			}
		}
	}
}

.case-swiper {
	height: 100%;
	position: relative;

	&__item {
		opacity: 0;
		transition: opacity 0.3s;

		&.swiper-slide-active {
			opacity: 1;
			transition-delay: .5s;
		}
	}
}
</style>