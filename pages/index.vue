<template>
  <div>
    <Navbar />
    <div class="border w-[50%] mx-auto">
      <Home />
    </div>
  </div>
</template>

<script>
// import LangSwitcher from "../components/LangSwitcher.vue";
import LangNavigation from '../components/LangNavigation.vue';
import Navbar from '../components/Navbar.vue';
export default {
  
    comments: {
    // LangSwitcher, 
    
    },
    name: "IndexPage",
    components: { LangNavigation, Navbar }
};
</script>

<style>
/* body {
  background-color: #f0f0f0;
  display: grid;
  place-content: center;
  height: 100vh;
  text-align: center;
  font-family: sans-serif;
}

a,
a:visited {
  color: #fff;
  text-decoration: none;
  padding: 8px 10px;
  background-color: cadetblue;
  border-radius: 5px;
  font-size: 14px;
  display: block;
  margin-bottom: 50px;
}
a:hover {
  background-color: rgb(23, 61, 62);
} */
</style>
