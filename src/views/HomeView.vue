<!--Template-->
<template>
  <section>
    <starter-banner
      title-text="Ágil e Eficiente"
      additional-title-text="Soluções em TI"
      subtitle-text="Aqui começa a nova fase da sua empresa a"
      additional-subtitle-text="caminho da gestão ágil de TI"
      image-element="Notebook.svg"></starter-banner>
  </section>
  <section id="numbers">
    <div>
      <my-numbers my-number="5" number-oparator="+" expertise="Área de Atuação"></my-numbers>
      <my-numbers my-number="10" number-oparator="+" expertise="Anos de Experiência"></my-numbers>
      <my-numbers my-number="70" number-oparator="+" expertise="Requisitos Atendidos"></my-numbers>
      <my-numbers
        my-number="100"
        number-oparator="%"
        expertise="Satisfação dos Clientes"></my-numbers>
    </div>
  </section>
  <section id="about">
    <about-fase></about-fase>
  </section>
</template>

<!--Script-->
<script>
import StarterBanner from '@/components/StarterBanner.vue'
import MyNumbers from '@/components/MyNumbers.vue'
import AboutFase from '@/components/AboutFase.vue'

export default {
  components: { StarterBanner, MyNumbers, AboutFase }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#about {
  background-color: var(--main-background-color);
}

#numbers {
  background-color: var(--main-background-color);
  width: 100%;
  display: flex;
}

#numbers > div {
  margin: 3rem;
  padding: 2rem 3rem;
  background-color: var(--main-orange-color);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-radius: 1rem;
}
</style>
