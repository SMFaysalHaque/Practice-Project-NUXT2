<template>
  <div>
    <Navbar />
    <div class="border w-[50%] mx-auto">
      <About />
    </div>
    <!-- <LangSwitcher style="padding-top: 90px" /> -->
  </div>
</template>

<script>
// import LangSwitcher from "../components/LangSwitcher.vue";
import Navbar from '../components/Navbar.vue';
export default {
  comments: {
    // LangSwitcher,
    Navbar
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
