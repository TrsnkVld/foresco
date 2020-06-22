<template>
	<main class="case">
		
		<SingleSection bgStyle="background: #ffffff;" textStyle="color: #000000;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Поиск мест на карте"
					text="Выбирайте подходящее место для зарядки устройства или аренды Power Bank на интерактивной карте. Актуальная информация с условиями и доступными устройствами для каждой локации"
					bgStyle="background: #1a1a1a;"
					textStyle="color: #ffffff;"
					imgPosition="bottom--overflow"
					img="powerplace/powerplace-1.png"
					overflow
				/>
				<ContentBlockLG
					title="Оплата по QR-коду"
					text="Платите в одно касание, отсканировав QR код на стойке с устройствами"
					type="left"
					position="bot"
					bgStyle="background: #e1e1e1;"
					textStyle="color: #000000;"
					img="powerplace/powerplace-2.png"
				/>
				<ContentBlockLG
					:bgStyle="`background-image: url('${require('../../assets/img/powerplace/powerplace-3.png')}');`"
				/>
			</ContentBlockWrap>
		</SingleSection>

		<SingleSection  textStyle="color: #ffffff;">
			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../../assets/img/powerplace/powerplace-4.png')" small />
		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="#0262CE" />
		</SingleSection>
	</main>
</template>

<script>

export default {
	name: "CasePowerPlace",
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
				title: '🔥 CoreLocation, MapKit',
				text: 'Интеграция карт, получение геопозиции, отображение данных на карте',
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