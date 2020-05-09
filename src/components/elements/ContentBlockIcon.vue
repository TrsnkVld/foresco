<template>
	<b-col cols="12" class="content-block content-block--icon" data-aos="fade-up" >
		<div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
			<b-row>
				<b-col cols="12" lg="8" class="content-block-inner__text">
					<h3>{{ title }}</h3>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
					<p>{{ text }}</p>
				</b-col>
			</b-row>
			<div class="content-block__icon">{{ icon }}</div>
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
		icon: "🎨",
	})
};
</script>

<style lang="scss">
.content-block {
	&--icon {
        .content-block-inner {
			padding-top: $gutter-xl;

			&__text {
                @include up($lg) {
					padding-left: $gutter-xl;
					padding-right: $gutter-sm;
                }
			}

			@include up($lg) {
				padding-top: $gutter-md;
			}
		}
	}
}
</style>