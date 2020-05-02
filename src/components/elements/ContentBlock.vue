<template>
	<b-col cols="12" class="content-block">
		<div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
			<b-row>
				<b-col cols="12" sm="6" class="content-block-inner__text" :order="(image=='left') ? 2 : 1">
					<h3>{{ title }}</h3>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
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
	name: "ContentBlock",
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
    padding-top: $gutter;
    padding-bottom: $gutter;

	&-inner {
		color: white;
		border-radius: $border-radius;
        height: 100%;
        padding: $gutter-md;
        min-height: 400px;
		position: relative;
		
		h3 {
			margin-bottom: $gutter-xs;
		}

        .row {
            height: 100%;
        }

		&__text {
			display: flex;
			justify-content: center;
			flex-flow: column;
		}

		&__img {
			img {
                max-width: 300px;
                position: absolute;
                bottom: -$gutter-md;
                left: 50%;
                transform: translateX(-50%);
			}
		}

		p:last-child {
			margin-bottom: 0;
		}
	}
}
</style>