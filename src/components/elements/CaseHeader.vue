<template>
    <section class="case-header">
        <slot></slot>
    </section>   
</template>

<script>
export default {
    name: 'CaseHeader',

}
</script>

<style lang="scss">
.case-header {
    //height: 100vh;
    padding: 0;

    .container {
        //height: 100%;
    }
}
</style>