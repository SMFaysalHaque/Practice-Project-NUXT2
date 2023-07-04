<template>
    <div class="flex justify-center w-full h-10 my-10">
        <div class="flex justify-between items-center w-[30%] border border-sky-400">
            <nuxt-link :to="switchLocalePath(locale.code)" v-for="locale in $i18n.locales" :key="locale.code" class="w-50 border border-red-600 px-10 py-2">
                <div>
                    {{ locale.name }}
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>