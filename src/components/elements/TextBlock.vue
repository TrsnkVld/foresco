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
    padding-top: $gutter-sm;
    padding-bottom: $gutter-sm;

    h4 {

        @include up($lg) {
            max-width: get-vw(950px, 1920);
        }
    }

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>