<template>
    <b-container class="image-block-wrap" data-aos="fade-up" >
        <div class="image-block">
            <img :src="imageSrc" alt="case_preview" />
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'ImageBlock',
    props: {
        imageSrc: {
            type: String,
            default: null,
        }
    },
    data: () => ({
    }),
}
</script>

<style lang="scss">
.image-block {
    img {
        display: block;
        margin: 0 auto;
    }

    &-wrap {
        padding: $gutter-sm 0;

        @include up($lg) {
            padding: $gutter-lg 0;
        }
    }
}
</style>