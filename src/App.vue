<script>
import Navbar from './components/Navbar.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<template>
<Navbar></Navbar> 
<router-view></router-view>

</template>

<style lang="scss">

</style>
