<template>
	<b-container class="d-flex flex-wrap">
        <h2 data-aos="fade-up" class="section-title flex-grow-1" v-if="title">{{ title }}</h2>
        <div  data-aos="fade-up" class="slider-info-nav d-flex align-self-center">
            <div class="slider-info-nav__prev" slot="button-prev"></div>
            <div class="slider-info-nav__next" slot="button-next"></div>
        </div>
		<swiper  data-aos="fade-up" class="slider-info" ref="mySwiper" :options="swiperOptions">
			<swiper-slide class="slider-info__item" v-for="(item, index) in 9" :key="index">
                <h5>Сортировка фотографий из фотоальбома</h5>
                <p>Мы использовали такие-то технологии, чтобы сделать эту функцию</p>
            </swiper-slide>
		</swiper>
	</b-container>
</template>

<script>
export default {
    name: "SliderInfo",
    props: {
        title: {
            type: String,
            default: null,
        }
    },
	data: () => ({
		swiperOptions: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            speed: 900,
            spaceBetween: 15,
			navigation: {
				nextEl: ".slider-info-nav__next",
				prevEl: ".slider-info-nav__prev"
			}
		}
	})
};
</script>

<style lang="scss">
.slider-info {
    cursor: grab;
    margin: $gutter-sm 0 $gutter-lg;

    &__item {
        padding: $gutter-sm 35px;
        height: 300px;
        background: $white;
        border-radius: $border-radius;

        h5 {
            margin-bottom: $gutter;
        }
    }

    &-nav {
        position: relative;

        &__prev, &__next {
            width: 63px;
            height: 63px;
            border-radius: 50%;
            background: grey;
            z-index: 1;
            outline: none;
            cursor: pointer;
        }

        &__prev {
            margin-right: $gutter;
        }
    }

    &:active {
        cursor: grabbing;
    }
}
</style>