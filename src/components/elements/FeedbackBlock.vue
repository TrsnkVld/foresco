<template>
	<b-container data-aos="fade-up">
		<div class="feedback-block">
			<h2>Хотите создать своё приложение?</h2>
			<p>Свяжитесь с нами, чтобы обсудить ваш проект</p>
			<b-button @click="isModalShowed = !isModalShowed" variant="circle">
				<div class="btn-circle__hover" :style="`background: ${glowColor}`" />Оставить заявку
			</b-button>
		</div>
		<b-modal v-model="isModalShowed" title="BootstrapVue">
			<p class="my-4">Hello from modal!</p>
		</b-modal>
	</b-container>
</template>

<script>
export default {
	name: "FeedbackBlock",
	props: {
		glowColor: {
			type: String,
			default: "#0262ce"
		}
	},
    data: () => ({
        isModalShowed: false,
    }),
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
</style>