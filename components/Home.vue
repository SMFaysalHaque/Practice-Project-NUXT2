<template>
  <div class="flex flex-col items-center w-[50%] border border-orange-600 mx-auto p-10">
    <p class="mb-5 font-bold">{{ $t('hello') }}</p>
    <p>{{ $n(10000, 'currency') }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <nuxt-link :to="localePath('about')"><button class="border border-sky-600 px-5">{{$t('goToAbout')}}</button></nuxt-link>
    <!-- <nuxt-link :to="localePath('home', 'fr')"><button>Go To Home</button></nuxt-link> -->
    <!-- {{$t('goToAbout')}} -->
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