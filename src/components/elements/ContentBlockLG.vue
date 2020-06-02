<template>
	<b-col cols="12" class="content-block content-block--lg" data-aos="fade-up" >
		<div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
			<b-row :class="(image=='left') ? 'reversed' : null">
				<b-col cols="12" md="7" class="content-block-inner__text">
					<h3>{{ title }}</h3>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
					<p>{{ text }}</p>
				</b-col>
				<b-col cols="12" md="5" class="content-block-inner__img">
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
                	padding-left: get-vw($gutter-md, 1024);
                }
			}

			.col-12 {
                @include up($lg) {
					flex: 0 0 50%;
					max-width: 50%;
				}
			}
		}
	}
}
</style>