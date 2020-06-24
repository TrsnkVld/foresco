<template>
	<main class="case">
		
		<SingleSection bgStyle="background: #ffffff;" textStyle="color: #000000;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Создавайте страницы"
					text="Загрузите фотографии из галереи и заполните ими подобранные макеты. Удобный интерфейс приложения поможет выбрать правильные пропорции и цвет."
					bgStyle="background: #c1a476;"
					imgPosition="bottom--overflow"
					img="musealbum/musealbum-3.png"
					overflow
				/>
				<ContentBlockLG
					title="Выбирайте обложку"
					text="Дизайнерский рисунок или классика, с подписью или без – проектируйте свою обложку сами."
					type="left"
					position="bot"
					bgStyle="background: #1a1a1a;"
					imgPosition="bottom--overflow"
					img="musealbum/musealbum-4.png"
				/>
			</ContentBlockWrap>
			<ListBlock title="qweasdxzc" :imageSrc="require('../../assets/img/musealbum/musealbum-5.png')"  />
		</SingleSection>

		<SingleSection>
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>На начальном этапе разработки мы обсудили функционал с заказчиком. Перед нашей командой стояла задача реализовать онлайн сервис по созданию фотокниг в мобильной версии. При разработке пользовательских кейсов мы учли возможность сохранения черновиков, а также просмотр конечной версии фотокниги перед оформлением заказа.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/musealbum/musealbum-6.png')" hover />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>Дизайн приложения построен на монохромном сочетании. Черно-белое рабочее пространство создает необходимый контраст для качественной работы с изображениями. Основные цвета палитры – белый, черный, серый. Бежевый используется для важных элементов.</p><p>В логотипе мы отобразили фирменный знак компании на черном фоне. Такое цветовое решение ассоциируется с высоким качеством продукта</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/musealbum/musealbum-1.png')" hover />
		</SingleSection>

		<SingleSection  textStyle="color: #ffffff;">
			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../../assets/img/musealbum/musealbum-2.png')" small />
		</SingleSection>

		<SingleSection>
			<BannerLink 
				title="Создайте уникальный фотоальбом в Musealbum" 
				subTitle="Оцените приложение в AppStore" 
				img="musealbum/banner-musealbum.png" 
				link="https://apps.apple.com/tt/app/%D1%84%D0%BE%D1%82%D0%BE%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC-musealbum/id1447112453"
			/>
			
		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="#C1A476" />
		</SingleSection>
	</main>
</template>

<script>

export default {
	name: "CaseMuseAlbum",
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