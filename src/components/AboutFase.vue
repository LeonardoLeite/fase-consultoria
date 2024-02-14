<!--Template-->
<template>
  <div id="aboutContainer">
    <div>
      <img src="../assets/images/aboutTeam.svg" alt="Team discussing marketing" />
    </div>
    <div id="aboutContent">
      <h2>Sobre a Fase</h2>
      <p>Sua parceira para soluções tecnológicas inovadoras e personalizadas.</p>
      <p>
        Com sede em Recife, a Fase oferece uma gama completa de serviços em T.I., desde consultoria
        especializada em recursos de tecnologia até criação e gestão de sites, design gráfico e
        registro de marcas. Nosso foco principal é atender empresas privadas, mas também temos
        experiência em projetos para órgãos governamentais.
      </p>
      <p>
        Acreditamos na inovação como chave para o sucesso, e trabalhamos para que nossos clientes
        alcancem seus objetivos de forma mais ágil e eficiente.
      </p>
      <base-button buttonText="Fale com a gente!"></base-button>
    </div>
  </div>
</template>

<!--Script-->
<script>
import BaseButton from './ui/BaseButton.vue'

export default {
  components: { BaseButton }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#aboutContainer {
  background-color: var(--main-blue-color);
  margin: 3rem;
  padding: 3rem 0;
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  border-radius: 1rem;
}

#aboutContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 40rem;
  text-align: justify;
}

a {
  margin-top: 1rem;
  align-self: center;
}
</style>
