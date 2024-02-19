<!--Template-->
<template>
  <div id="cardContainer">
    <!-- TODO Why is the bool prop not working? -->
    <div id="cardContent">
      <!-- Gliph -->
      <img :src="imageBadge" alt="Computer chip" />
      <!-- Title -->
      <h3>{{ cardTitle }}</h3>
      <!-- Text -->
      <p>{{ cardText }}</p>
    </div>
    <div id="background" class="blue" :class="{ orange: hasOrangeBg }"></div>
  </div>
</template>

<!--Script-->
<script>
export default {
  props: { cardBadge: String, cardTitle: String, cardText: String, hasOrangeBg: String },
  data() {
    return {
      imageBadge: 'src/assets/images/' + this.cardBadge
    }
  }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.blue {
  background-color: var(--main-blue-color);
}

#cardContainer {
  max-width: 25%;
}

#background {
  position: relative;
  z-index: 0;
  border-radius: 1rem;
  top: -78%;
  width: 100%;
  height: 78%;
}

#cardContent {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  align-items: center;
  min-height: 100%;
}

#cardContent > img {
  max-height: 6rem;
}

#cardContent > h3 {
  text-align: center;
}

#cardContent > p {
  text-align: justify;
  text-wrap: balance;
}

.orange {
  background-color: var(--main-orange-color);
}
</style>
