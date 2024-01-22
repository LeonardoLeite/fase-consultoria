<!--Template-->
<template>
  <section><the-header></the-header></section>
  <main><router-view></router-view></main>
  <section><the-footer></the-footer></section>
</template>

<!--Script-->
<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped></style>
