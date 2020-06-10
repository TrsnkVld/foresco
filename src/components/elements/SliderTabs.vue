<template>
	<b-container class="slider-tabs">
		<h2 data-aos="fade-up" class="section-title text-left flex-grow-1" v-if="title">{{ title }}</h2>
		<div class="swiper-pagination" slot="pagination"></div>
		<swiper data-aos="fade-up" ref="mySwiper" :options="swiperOptions">
			<swiper-slide class="slider-tabs__item" v-for="(item, index) in items" :key="index">
				<b-row>
					<b-col cols="12" sm="6">
						<img :src="item.content" alt="tab_img" />
					</b-col>
					<b-col cols="12" sm="6" v-html="item.text" class="d-flex align-items-center" />
				</b-row>
			</swiper-slide>
		</swiper>
	</b-container>
</template>

<script>
export default {
	name: "SliderTabs",
	props: {
		title: {
			type: String,
			default: null
		},
		btnColor: {
			type: String,
			default: null
		},
		items: {
			type: Object,
    		default: () => ({}),
		}
	},
	data: () => ({
		swiperOptions: {
			grabCursor: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			spaceBetween: 140,
			pagination: {
				el: '.swiper-pagination',
				renderBullet: function (index, className) {
				return '<span class="123123">qwe</span>';
				},
			},
		}
	}),
	computed: {}
};
</script>

<style lang="scss">
.slider-tabs {
	color: $white;
	user-select: none;

	h2 {
		width: 100%;
	}

	.row {
		margin: 0 -70px;
	}

	.col-12 {
		padding: 0 70px;
	}

	.swiper {
		&-container {
			overflow: visible;
		}

		&-slide {
			opacity: 0;
			transition: opacity .6s ease;

			&-active {
				opacity: 1;
			}
		}

		&-pagination {
			position: unset;
			width: 100%;
		}
	}
}
</style>