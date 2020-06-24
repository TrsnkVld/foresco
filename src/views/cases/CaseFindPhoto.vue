<template>
	<main class="case">
		
		<SingleSection textStyle="color: #ffffff;">
			<SectionTitle>Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Создание меток"
					text="Используйте свои личные метки, которые перенесут вас в нужное время и место"
					bgStyle="background: linear-gradient(180deg, #A507FF, #5800FF);"
					imgPosition="bottom--overflow"
					img="findphoto/findphoto-1.png"
				/>
				<ContentBlockLG
					title="Управляйте совместными долгами"
					text="Любые изменения по долгу происходят только с согласия всех сторон сделки. Каждому участнику доступна история платежей и действий за весь период"
					type="left"
					position="bot"
					bgStyle="background-color: #1a1a1a;"
					imgPosition="bottom-left--overflow"
					img="findphoto/findphoto-2.png"
				/>
				<ContentBlockSM
					title="Поиск фотографий в одно касание"
					text="Введите название метки или фотоальбома, и вы получите нужный снимок "
					bgStyle="background: linear-gradient(180deg, #A507FF, #5800FF);"
				/>
				<ContentBlockSM
					title="Голосовой поиск меток"
					text="Используйте голосовую команду для мгновенного поиска"
					bgStyle="background: #ffffff;"
					textStyle="color: #000000"
				/>
			</ContentBlockWrap>
		</SingleSection>

		<SingleSection>
			<TitleText title="Задача" text="Разработать приложение, которое станет простым инструментом для учета бухгалтерии по долгам и займам. Программа автоматизирует процесс ведения долгов и будет производить расчеты под контролем всех участников сделки. Сможет эффективно применяться как в бизнесе, так и в повседневной жизни." />
			<ImageBlock :imageSrc="require('../../assets/img/big-img.png')" small />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="<p>На первом этапе мы обсудили функционал с заказчиком, выделили ключевые моменты, составили пользовательские кейсы и предложения. Второй этап – создание эскиза схемы работы приложения для дальнейшего прототипирования. <br><br>Заказчик согласовал представленную архитектуру приложения.</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/mockup_1.png')" hover />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Дизайн"
					subTitle="24 часа"
					text="<p>За основу была взята современная темная тема, набирающая всё большую популярность среди пользователей. Такая цветовая палитра не отвлекает от основной задачи и делает навигацию по приложению удобной и понятной. Принцип минимализма и простоты дополняется ярким запоминающимся логотипом</p>"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../../assets/img/mockup_2.png')" hover />
		</SingleSection>

		<SingleSection textStyle="color: #ffffff;">
			<SliderInfo title="Технологии" btnColor="rgb(2, 98, 206)" :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../../assets/img/findphoto/findphoto-4.png')" small />
		</SingleSection>

		<SingleSection>
			<BannerLink 
				title="Создавайте моменты с Find photo" 
				subTitle="Оцените приложение в AppStore"  
				img="findphoto/banner-find_photo.png" 
				link="https://apps.apple.com/us/app/find-photo/id1500003862"
			/>
		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="#F04F6C" />
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
                title: '🔥 Speech | Apple',
                text: 'Распознавание речи и перевод контента в текст',
            },

			{
				title: '🔥 Foto, Video',
				text: 'Взаимодействие с фото и видео материалами',
			},
            {
                title: '🔥 Firebase',
                text: 'Получение статистики и сбоев приложения',
            },
            {
                title: '🔥 Localization | Apple',
                text: 'Локализация приложения на английский, китайский, финский',
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