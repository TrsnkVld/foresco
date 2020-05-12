<template>
    <div class="case-tags">
        <div class="case-tags__item" v-for="(item, index) in tags" :key="index">{{ item }}</div>
    </div>
</template>

<script>
export default {
    name: 'CaseTags',
    data: () => ({
        tags: ['development', 'development', 'design','iOS','2020'],
    }),
}
</script>

<style lang="scss">
.case-tags {
    margin: 0 -4px;
    display: inline-block;
    text-align: left;

    &__item {
        display: inline-block;
        font-size: 13px;
        font-weight: bold;
        font-family: Source Sans Pro;
        background: $light-grey;
        border-radius: $border-radius;
        padding: 14px 20px;
        margin: 0px 4px 8px;

        @include up($lg) {
            padding: 9px 20px;
        }
    }

    @include up($lg) {
        margin: 0 -4px $gutter-sm;
        font-size: 18px;
        min-height: 114px;
    }
}
</style>