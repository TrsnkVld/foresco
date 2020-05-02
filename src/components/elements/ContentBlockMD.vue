<template>
	<b-col cols="12" sm="7" class="content-block content-block--md">
		<div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
			<b-row>
				<b-col cols="12" sm="6" class="content-block-inner__text" :order="(image=='left') ? 2 : 1">
					<h3>{{ title }}</h3>
					<p>{{ text }}</p>
				</b-col>
				<b-col cols="12" sm="6" class="content-block-inner__img" :order="(image=='left') ? 1 : 2">
					<img :src="img" alt="block_img" />
				</b-col>
			</b-row>
		</div>
	</b-col>
</template>

<script>
export default {
	name: "ContentBlockMD",
	props: {
		image: {
			type: String,
			default: "right"
		},
		title: {
			type: String,
			default: "Заголовок"
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
	&--md {
        
	}
}
</style>