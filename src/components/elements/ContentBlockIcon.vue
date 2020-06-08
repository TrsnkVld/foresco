<template>
	<b-col cols="12" class="content-block content-block--icon" data-aos="fade-up">
		<div class="content-block-inner" :style="`${textStyle}`">
			<b-row>
				<b-col cols="12" class="content-block-inner__text">
					<h2>{{ title }}</h2>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
					<h4>
						<template v-if="index <= test.length" v-for="(item, index) in showed">
							<p v-html="test[index]" />
						</template>
					</h4>
				</b-col>
			</b-row>
		</div>
  <button @click="showed += test.length">Подробнее</button>
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
		textStyle: {
			type: String,
			default: null
		}
	},
	data: () => ({
		showed: 1,
	}),
	computed: {
		test() {
			return this.text.match(/\<p\b[\s\S]+?\<\/p\>/g);
		}
	}
};
</script>

<style lang="scss">
.content-block {
	&--icon {
        .content-block-inner {
			padding-top: $gutter-xl;
			color: $white;
			padding-left: 0;
			padding-right: 0;

			* {
				color: inherit;
			}

			h4 {
				max-width: 620px;
				margin-top: 60px;
			}

			h6 {
				margin-bottom: 0;
				color: #6e6e6e;
			}

			&__text {
				display: flex;
				justify-content: space-between;
				flex-flow: wrap;
				align-items: center;

                @include up($lg) {
					//padding-left: $gutter-xl;
					//padding-right: $gutter-sm;
                }
			}

			@include up($lg) {
				//padding-top: $gutter-md;
			}
		}
	}
}
</style>