<!--Template-->
<template>
  <div id="cardContainer">
    <div id="cardContent">
      <!-- Gliph -->
      <img src="../assets/images/chip.svg" alt="Computer chip" />
      <!-- Title -->
      <h3>{{ cardTitle }}</h3>
      <!-- Text -->
      <p>{{ cardText }}</p>
    </div>
  </div>
</template>

<!--Script-->
<script>
export default {
  props: { cardBadge: String, cardTitle: String, cardText: String },
  data() {
    return {}
  }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped></style>
