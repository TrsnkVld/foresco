<template>
	<b-container class="text-block" data-aos="fade-up" >
		<h4>Вам больше не придется делать сложные вычисления при ведении долгов, спорить с участниками сделки и вспоминать сколько Вам вернули, а сколько остались должны, просто создайте совместный долг в Saldo. 💥</h4>
	</b-container>
</template>

<script>
export default {
    name: "TextBlock",
};
</script>

<style lang="scss">
.text-block {
    padding: $gutter-sm 0;

    h4 {
        max-width: 950px;
    }

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>