<template>
	<b-container class="list-block">
        <b-row>
            <b-col cols="12" :sm="(imageSrc) ? 6 : 12">
		        <h2 data-aos="fade-up">Совместный долг в Saldо - это:</h2>
                <ul>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".list-block h2">Увеличение или уменьшение суммы долга с согласия каждого участника сделки</li>
                    <li data-aos="fade-up" data-aos-delay="600" data-aos-anchor=".list-block h2">История платежей и подтверждений по выплатам у всех участников</li>
                    <li data-aos="fade-up" data-aos-delay="900" data-aos-anchor=".list-block h2">Безопасность и конфиденциальность личных данных</li>
                </ul>
            </b-col>
            <b-col cols="12" sm="6" v-if="imageSrc">
                <img :src="imageSrc" alt="list_img" data-aos="fade-left" data-aos-anchor=".list-block h2" data-aos-delay="1200" />
            </b-col>
        </b-row>
	</b-container>
</template>

<script>
export default {
    name: "ListBlock",
    props: {
        imageSrc: {
            type: String,
            default: null
        }
    }
};
</script>

<style lang="scss">
.list-block {
	padding: $gutter-sm 0;

	h2 {
		margin-bottom: $gutter-md;
	}

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>