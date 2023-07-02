<template>
  <div>
    <h3>Home</h3>
    <p>Welcome</p>
    <nuxt-link :to="localePath('about')"><button>Go To About</button></nuxt-link>
    <!-- <nuxt-link :to="localePath('home', 'fr')"><button>Go To Home</button></nuxt-link> -->
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