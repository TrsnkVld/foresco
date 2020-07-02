<template>
	<main class="case">
		
		<SingleSection textStyle="color: #ffffff;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Ищите бары с поддержкой Gusli"
					text="Каждое заведение отмечено на интерактивной карте. Данные местоположения определяют все ближайшие локации. Сервис работает в 470 городах России и включает более трёх тысяч заведений"
					bgStyle="background: linear-gradient(180deg, #FD7069, #F6576E);"
					imgPosition="bottom--overflow"
					img="gusli/gusli-1.png"
				/>
				<ContentBlockLG
					title="Заказывайте песни в любимых барах"
					text="Именно вы решаете, какая музыка будет звучать этим вечером. Оставьте свою заявку в приложении и насладитесь выбранным треком"
					type="left"
					position="bot"
					bgStyle="background-color: #1a1a1a;"
					img="gusli/gusli-2.png"
				/>
				<ContentBlockLG
					title="Находите самые популярные треки"
					text="Наш сервис поможет вам найти подходящую песню под любое настроение или событие. Собственная музыкальная база с различными подборками: от дискотеки 90-х до новых хитов"
					bgStyle="background-color: #ffffff;"
					textStyle="color: #000000;"
					imgPosition="bottom--overflow"
					img="gusli/gusli-3.png"
				/>
				<ContentBlockLG
					title="Получайте бонусы и повышайте рейтинг"
					text="Песни в подарок, специальные предложения на меню заведений и уровневая система бонусов для каждого пользователя"
					type="left"
					position="bot"
					bgStyle="background: linear-gradient(180deg, #FD7069, #F6576E);"
					img="gusli/gusli-4.png"
				/>
			</ContentBlockWrap>
		</SingleSection>

		<SingleSection>

			<SeparatorLine sm="60" md="40" lg="90" />
			<ImageBlock :imageSrc="require('../../assets/img/gusli/gusli-5.png')" />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>Данное приложение поступило к нам в работу на этапе создания дизайна. Это тот самый случай, когда заказчику нужен лишь определенный этап разработки. Наша команда изучила функции и особенности приложения и предложила соответствующие дизайнерские решения.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/mockup_1.png')" hover />
			<SeparatorLine sm="60" md="40" lg="90" />

			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>За основу взята темная тема и светлые текстовые поля. Такое решение позволяет использовать приложение при различном уровне освещенности и сокращает потребление энергии устройством. Метки на карте встречаются двух типов: ярко розовые – для работающих заведений, серые – закрытых. Такое решение показывает пользователю актуальную информацию на данный момент времени.</p><p>Логотип сделан в пастельных тонах. Контур фигуры внутри иконки напоминает гусли и повторяет первый символ в названии</p>"
				/>
			</ContentBlockWrap>
			<SeparatorLine sm="30" md="40" lg="60" />

			<ImageBlock :imageSrc="require('../../assets/img/gusli/gusli-6.png')" hover />
			<SeparatorLine sm="60" md="40" lg="120" />

		</SingleSection>
		<SingleSection>
			<ImageBlock :imageSrc="require('../../assets/img/gusli/gusli-7.png')" small />
			<SeparatorLine sm="60" md="40" lg="90" />

		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="rgb(240, 79, 108)" />
			<SeparatorLine sm="60" md="40" lg="90" />

		</SingleSection>
	</main>
</template>

<script>

export default {
	name: "CaseFindPhoto",
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
				title: '🔥 Realm Database',
				text: 'База данных Realm',
			},
			{
				title: '🔥 Заголовок',
				text: 'Работа с аудио, фото и видео материалами',
			},
			{
				title: '🔥 Firebase',
				text: 'Получение полной статистики приложения, отслеживание активности пользователей',
			},
			{
				title: '🔥 Speech ',
				text: 'Выполните распознавание речи на живом или предварительно записанном аудио и перевода аудио контента в текст',
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
