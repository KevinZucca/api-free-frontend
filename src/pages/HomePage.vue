<script>
import Header from '../components/homepage/header.vue'
import HomeMain from '../components/homepage/HomeMain.vue';
export default {
    name: "HomePage",
  data() {
    return {

    }
  },

  components: {
    Header,
    HomeMain
  }
}
</script>

<template>
  <Header></Header>
  <HomeMain></HomeMain>
</template>

<style lang="scss">
</style>
