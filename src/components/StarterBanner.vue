<!--Template-->
<template>
  <section id="banner">
    <div id="leftContent">
      <h1>
        {{ titleText }}<br /><span style="font-family: 'Gilroy-Light'">{{
          additionalTitleText
        }}</span>
      </h1>
      <div id="innerLeftContent">
        <p>{{ subtitleText }}<br />{{ additionalSubtitleText }}</p>
        <base-button buttonText="Quero dar o primeiro passo"></base-button>
      </div>
    </div>
    <div>
      <!-- TODO load image dicamicaly from the props -->
      <img src="../assets/images/Notebook.svg" alt="Laptop image" />
    </div>
  </section>
</template>
<!--Script-->
<script>
import BaseButton from './ui/BaseButton.vue'

export default {
  components: { BaseButton },
  props: {
    titleText: String,
    additionalTitleText: String,
    subtitleText: String,
    additionalSubtitleText: String,
    imageElement: String
  },
  data() {
    return {}
  }
}
</script>
<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#banner {
  background-color: var(--main-background-color);
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
}

#innerLeftContent {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 2rem;
}

#leftContent {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
