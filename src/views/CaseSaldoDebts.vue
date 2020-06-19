<template>
	<main class="case">
		
		<SingleSection>
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
					imgPosition="top-right"
					img="saldo/saldo-1.png"
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
			<ListBlock :imageSrc="require('../assets/img/saldo_list.png')" overflow />
		</SingleSection>

		<SingleSection>
			<TitleText title="Задача" text="Разработать приложение, которое станет простым инструментом для учета бухгалтерии по долгам и займам. Программа автоматизирует процесс ведения долгов и будет производить расчеты под контролем всех участников сделки. Сможет эффективно применяться как в бизнесе, так и в повседневной жизни." />
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" small />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе.</p><p>После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе. </p><p>После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/mockup_1.png')" />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>В приложении используются три основных цвета: красный – для долгов, зеленый – для займов и синий – нейтральный цвет интерфейса. В качестве фонового цвета взята светлая тема, которая оптимальна для работы с текстовой информацией.</p>
					<p>При разработке логотипа нам было важно отобразить суть приложения.</p><p>В приложении используются три основных цвета: красный – для долгов, зеленый – для займов и синий – нейтральный цвет интерфейса. В качестве фонового цвета взята светлая тема, которая оптимальна для работы с текстовой информацией.</p>
					<p>При разработке логотипа нам было важно отобразить суть приложения.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/mockup_2.png')" />
		</SingleSection>

		<SingleSection>
			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" small />
		</SingleSection>

		<SingleSection>
			<SliderFaq title="Вопрос-Ответ" btnColor="rgb(2, 98, 206)" />
		</SingleSection>

		<SingleSection>
			<BannerLink img="saldo/banner-saldo.png" />
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
		}
	}),
	methods: {
		filterIt(arr, searchKey) {
			for(let i=0; i<arr.length; i++) {
				if(arr[i].alias === searchKey) {
					this.currentSlide = i;
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