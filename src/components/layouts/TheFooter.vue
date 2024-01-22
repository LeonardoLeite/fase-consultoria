<!--Template-->
<template>
  <footer>
    <img src="../../assets/images/horizontallogo.svg" alt="Company logo" />
    <div id="menu">
      <div id="company">
        <h3>Empresa</h3>
        <p>Sobre nós</p>
        <p>Áreas de atuação</p>
        <p>Como te ajudamos</p>
        <p>Quem ajudamos</p>
      </div>
      <div id="services">
        <h3>Serviços</h3>
        <p>Consultoria de TI</p>
        <p>Desenv. e gestão de sites</p>
        <p>Design gráfico</p>
        <p>Criação e registro de marcas</p>
      </div>
      <div id="Social">
        <h3>Social</h3>
        <p>GutHub</p>
        <p>Instagram</p>
        <p>WhatsApp</p>
      </div>
      <div id="letsTalk">
        <h2>Vamos conversar?</h2>
        <base-button buttonText="Fale com a gente!"></base-button>
      </div>
    </div>
    <p>©2024 Fase Consultoria</p>
  </footer>
</template>

<!--Script-->
<script>
import BaseButton from '.././ui/BaseButton.vue'

export default {
  components: { BaseButton }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: var(--main-blue-color);
  padding: 2rem 3rem;
}

img {
  max-height: 40px;
}

#menu {
  display: flex;
}
</style>
