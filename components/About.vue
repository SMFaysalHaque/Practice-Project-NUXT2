<template>
    <div>
        <div v-for="locale in $i18n.locales" :key="locale.code">
            <nuxt-link
            :to="switchLocalePath(locale.code)">{{ locale.name }}
            </nuxt-link>
        </div>
        <h1>{{ $t('hello') }}</h1>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>

</style>