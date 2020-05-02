<template>
	<b-container class="list-block">
        <b-row>
            <b-col cols="12" :sm="(imageSrc) ? 6 : 12">
		        <h2>Совместный долг в Saldо - это:</h2>
                <ul>
                    <li>Увеличение или уменьшение суммы долга с согласия каждого участника сделки</li>
                    <li>История платежей и подтверждений по выплатам у всех участников</li>
                    <li>Безопасность и конфиденциальность личных данных</li>
                </ul>
            </b-col>
            <b-col cols="12" sm="6" v-if="imageSrc">
                <img :src="imageSrc" alt="list_img" />
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
	padding: $gutter-lg 0;

	h2 {
		margin-bottom: $gutter-md;
	}
}
</style>