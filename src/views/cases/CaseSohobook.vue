<template>
	<main class="case">
		
		<SingleSection textStyle="color: #ffffff;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Выбор фотографий"
					text="Используйте фотографии из галереи вашего смартфона и редактируйте их в приложении"
					bgStyle="background: #ffffff;"
					textStyle="color: #000000;"
					imgPosition="bottom--overflow"
					img="sohobook/sohobook-1.png"
					overflow
				/>
				<ContentBlockLG
					title="Заполнение фотокниги"
					text="Создавайте макет будущего альбома таким, каким его видите вы."
					type="left"
					position="bot"
					bgStyle="background: #1a1a1a;"
					imgPosition="bottom-left--overflow"
					img="sohobook/sohobook-2.png"
				/>
				<ContentBlockLG
					title="Выбор обложки"
					text="Каталог с коллекцией материалов, цветов и принтов поможет вам создать свой собственный переплет альбома "
					bgStyle="background: #ffffff;"
					textStyle="color: #000000;"
					imgPosition="bottom--overflow"
					img="sohobook/sohobook-3.png"
					overflow
				/>
			</ContentBlockWrap>
		</SingleSection>

		<SingleSection>
			<SeparatorLine sm="60" md="40" lg="120" />

			<TitleText title="Задача" text="Разработать приложение, которое станет удобной мобильной платформой для создания и заказа фотокниг." />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ImageBlock :imageSrc="require('../../assets/img/sohobook/sohobook-4.png')" small />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ContentBlockWrap>

				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>На этапе создания мобильного приложения у заказчика был онлайн портал с разработанным функционалом. Нашей команде предстояло адаптировать возможности сайта в мобильную версию. Функционал был оставлен без изменений. Главная цель заказчика – создать ещё один ресурс, который станет альтернативным вариантом сайта.</p><p>После запуска приложения общее чисто заказов увеличилось на 40%. В данный момент половина пользователей оформляет заказ через мобильное приложение. </p>"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="60" md="40" lg="90" />

			<ImageBlock :imageSrc="require('../../assets/img/sohobook/sohobook-7.png')" hover />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>При работе с графической информацией предпочтение отдается светлым темам. Белый фон позволяет пользователю воспринимать цвета без искажений. А также оценить подобранные художественные режимы и стили в реальном времени.</p><p>Логотип привлекает внимание своей простотой и ясностью. Соответствует дизайнерским решениям сайта компании</p>"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="60" md="40" lg="90" />

			<ImageBlock :imageSrc="require('../../assets/img/sohobook/sohobook-5.png')" hover />
		</SingleSection>

		<SingleSection  textStyle="color: #ffffff;">
			<SeparatorLine sm="60" md="40" lg="90" />

			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<SeparatorLine sm="60" md="40" lg="90" />

			<ImageBlock :imageSrc="require('../../assets/img/sohobook/sohobook-6.png')" small />
			<SeparatorLine sm="60" md="40" lg="90" />

		</SingleSection>

		<SingleSection>
			<BannerLink 
				title="Фотокниги для особенных воспоминаний" 
				subTitle="Оцените приложение в AppStore" 
				img="sohobook/banner-sohobook.png" 
				link="https://apps.apple.com/tt/app/%D1%84%D0%BE%D1%82%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-sohobook/id1438128437"
			/>
			
		</SingleSection>
		<SeparatorLine sm="40" md="40" lg="90" />

		<SingleSection>
			<FeedbackBlock btnColor="#008EB8" />
			<SeparatorLine sm="40" md="40" lg="60" />

		</SingleSection>
	</main>
</template>

<script>

export default {
	name: "CaseSohobook",
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
                title: '🔥 Яндекс.касса',
                text: 'Интеграция со сторонним методом оплаты',
            },
            {
                title: '🔥 Firebase',
                text: 'Получение статистики и сбоев приложения',
            },
            {
                title: '🔥 REST API, JSON',
                text: 'Клиент-серверное взаимодействие',
            },
            {
                title: '🔥 CoreAnimation, CoreGraphics',
                text: 'Технология компании Apple для создания анимаций',
            },
            {
                title: '🔥 Взаимодействие с изображениями',
                text: 'Создание фильтов, коллажий',
            },

            {
                title: '🔥 Realm Database',
                text: 'Работа с базой данных Realm',
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