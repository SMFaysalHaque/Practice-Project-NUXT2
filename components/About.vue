<template>
    <div class="">
        <div class="flex flex-col items-center w-[50%] border border-orange-600 mx-auto p-10">
            <p class="mb-5 font-bold">{{ $t('hello') }}</p>
            <p>{{ $n(5000000000, 'currency') }}</p>
            <p>{{ $d(new Date(), 'short') }}</p>
            <p>{{ $d(new Date(), 'long') }}</p>
            <nuxt-link :to="localePath('index')"><button class="border border-sky-600 px-5">{{ $t('goToHome')}}</button></nuxt-link>
            <!-- {{ $t('goToHome')}} -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>

</style>