<template>
	<b-col cols="12" sm="5" class="content-block content-block--sm">
        <div class="content-block-inner" :style="`${bgStyle} ${textStyle}`">
            <b-row>
                <b-col cols="12" class="content-block-inner__text">
                    <h3>{{ title }}</h3>
                    <p>{{ text }}</p>
                </b-col>
            </b-row>
        </div>
	</b-col>
</template>

<script>
export default {
	name: "ContentBlockSM",
	props: {
        title: {
            type: String,
            default: 'Заголовок'
        },
        text: {
            type: String,
            default: 'Текст под заголовком'
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
    })
};
</script>

<style lang="scss">
.content-block {
    &--sm {
        
    }
}
</style>