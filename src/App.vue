<!--Template-->
<template>
  <section id="header"><the-header></the-header></section>
  <main><router-view></router-view></main>
</template>

<!--Script-->
<script>
import TheHeader from './components/layouts/TheHeader.vue'

export default {
  components: { TheHeader }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#header {
  background-color: var(--main-background-color);
}
</style>
