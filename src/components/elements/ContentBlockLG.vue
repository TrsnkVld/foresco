<template>
	<b-col cols="12" class="content-block content-block--lg" data-aos="fade-up" >
		<div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
			<b-row>
				<b-col cols="12" lg="6" class="content-block-inner__text" :order-lg="(image=='left') ? 2 : 1">
					<h3>{{ title }}</h3>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
					<p>{{ text }}</p>
				</b-col>
				<b-col cols="12" lg="6" class="content-block-inner__img" :order-lg="(image=='left') ? 1 : 2">
					<img :src="img" alt="block_img" />
				</b-col>
			</b-row>
		</div>
	</b-col>
</template>

<script>
export default {
	name: "ContentBlockLG",
	props: {
		image: {
			type: String,
			default: "right"
		},
		title: {
			type: String,
			default: "Заголовок"
		},
		subTitle: {
			type: String,
			default: null
		},
		text: {
			type: String,
			default: "Текст под заголовком"
		},
		bgStyle: {
			type: String,
			default: null
		},
		textStyle: {
			type: String,
			default: null
		}
	},
	data: () => ({
		img: require("../../assets/img/content-block_mockup.png")
	})
};
</script>

<style lang="scss">
.content-block {
	&--lg {
        .content-block-inner {
			&__text {
                @include up($lg) {
					padding-left: $gutter-xl;
					padding-right: $gutter-sm;
                }
			}
		}
	}
}
</style>