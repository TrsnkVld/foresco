<template>
	<b-container data-aos="fade-up">
		<div class="feedback-block">
			<h2>Хотите создать своё приложение?</h2>
			<p>Свяжитесь с нами, чтобы обсудить ваш проект</p>
			<b-button @click="isModalShowed = !isModalShowed" variant="circle">
				<div class="btn-circle__hover" :style="`background: ${btnColor}`" />Оставить заявку
			</b-button>
		</div>
	</b-container>
</template>

<script>

export default {
	name: "FeedbackBlock",
	props: {
		glowColor: {
			type: String,
			default: "#0262ce"
		},
		btnColor: {
			type: String,
			default: null
		}
	},
    data: () => ({
	}),
	computed: {
		isModalShowed: {
			get: function() {
				return this.$store.state.isModalShowed;
			},
			set: function(newValue) {
				this.$store.state.isModalShowed = newValue;
			}
		},
	}
};
</script>

<style lang="scss">
.feedback-block {
	user-select: none;
	text-align: center;
	color: $white;

	h2 {
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 65px;
	}
}

.modal {
	&-wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&-background {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('../../assets/img/stars.png');
		background-size: cover;
	}

	&-inner {
		z-index: 1;
	}

	&-content {
		border-radius: $border-radius;
		padding: 20px;
		background-color: transparent;

		.feedback-form {
			max-width: none;
		}
	}

	&-dialog {
		max-width: 650px;
	}

	&-backdrop {
		opacity: 1;
		background-image: url('../../assets/img/stars.png');
		background-size: cover;
	}
}
</style>