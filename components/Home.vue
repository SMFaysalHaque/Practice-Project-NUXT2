<template>
  <div>
    <h3>Home</h3>
    <nuxt-link :to="localePath('about')"><button>Go To About</button></nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "Home",
    head () {
            return {
                title: 'Home'
            }
        }
  }
</script>

<style scoped>

</style>