<!--Template-->
<template>
  <div id="cardContainer">
    <img :src="imagePath" alt="Company logo" />
    <p>{{ cardText }}</p>
    <div id="services">
      <p class="service" v-if="isConsulting">Consultoria de TI</p>
      <p class="service" v-if="isBranding">Registro de marca</p>
      <p class="service" v-if="isDevelopment">Criação e gestão de sites</p>
      <p class="service" v-if="isDesign">Design gráfico</p>
    </div>
  </div>
</template>

<!--Script-->
<script>
export default {
  props: {
    imageTitle: String,
    cardText: String,
    isConsulting: Boolean,
    isBranding: Boolean,
    isDevelopment: Boolean,
    isDesign: Boolean
  },
  data() {
    return {
      imagePath: 'src/assets/images/' + this.imageTitle
    }
  }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#cardContainer {
  max-width: 49%;
  background-color: var(--main-blue-color);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#cardContainer > p {
  text-align: justify;
}

#cardContainer > img {
  max-height: 6rem;
  align-self: center;
}

.service {
  padding: 0.5rem;
  border-style: solid;
  border-width: 2px;
  border-color: var(--main-orange-color);
  border-radius: 2rem;
}

#services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
