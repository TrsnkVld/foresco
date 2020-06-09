<template>
    <b-container class="image-block-wrap" :class="{'small': small}" data-aos="fade-up" >
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
        },
        small: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
    }),
}
</script>

<style lang="scss">
.image-block {
    user-select: none;
    img {
        display: block;
        margin: 0 auto;
    }

    &-wrap {
        padding-top: get-vw($gutter-sm, 320);
        padding-bottom: get-vw($gutter-sm, 320);

        @include up($lg) {
            //padding: $gutter-lg 0;
        }

        @include upLandscape($xl-land) {
        padding-top: get-vw($gutter-sm, 1920);
        padding-bottom: get-vw($gutter-sm, 1920);
        }
    }
}
</style>