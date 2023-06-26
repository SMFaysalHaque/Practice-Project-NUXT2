<template>
    <div>
        <h3>About</h3>
        <nuxt-link :to="localePath('home', 'fr')"><button>Go To Home</button></nuxt-link> 
        <!-- here "/" is index.vue -->
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>

</style>