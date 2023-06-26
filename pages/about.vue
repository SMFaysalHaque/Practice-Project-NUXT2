<template>
  <div>
    <About />
    <LangSwitcher style="padding-top: 90px" />
  </div>
</template>

<script>
import LangSwitcher from "../components/LangSwitcher.vue";
export default {
  comments: {
    LangSwitcher,
  },
  name: "AboutPage",
  head() {
    return {
      title: "About",
    };
  },
};
</script>

<style scoped></style>
