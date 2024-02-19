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
  <section id="areas">
    <h2 style="text-align: center">Áreas de atuação</h2>
    <div id="areaCards">
      <area-card
        card-badge="chip.svg"
        card-title="Cosultoria de TI"
        card-text="Tenha a estrutura de TI adequada a realidade da sua empresa, com processos mapeados, e um parque tecnológico moderno, que atenda as necessidades do seu negócio sem gerar gastos desnecessários."></area-card>
      <area-card
        card-badge="world.svg"
        card-title="Desenvolvimento e Gestão de Sites"
        card-text="Conte com um site de fácil acesso, com conteúdo relevante e atualizável, reponsivo e criado com ferramentas que ajudam a melhorar a navegação com base nos indicadores de fluxo de usuários."
        has-orange-bg="true"></area-card>
      <area-card
        card-badge="pen.svg"
        card-title="Design Gráfico"
        card-text=" Criamos logotipos memoráveis, flyers que convertem, banners que atraem a atenção, websites profissionais que transmitem sua mensageme muito mais. Tudo com alta qualidade, prazos flexíveis e preços acessíveis."></area-card>
      <area-card
        card-badge="badge.svg"
        card-title="Criação e Registro de Marcas"
        card-text="Possua a titularidade e exclusividade do uso da sua marca ou logotipo devidamente atestado e reconhecido pelo Instituto Nacional de Propriedade Industrial em todo o território nacional."
        has-orange-bg="true"></area-card>
    </div>
  </section>
</template>

<!--Script-->
<script>
import StarterBanner from '@/components/StarterBanner.vue'
import MyNumbers from '@/components/MyNumbers.vue'
import AboutFase from '@/components/AboutFase.vue'
import AreaCard from '@/components/AreaCard.vue'

export default {
  components: { StarterBanner, MyNumbers, AboutFase, AreaCard }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#about {
  background-color: var(--main-background-color);
}

#areas {
  margin: 3rem;
}

#areaCards {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
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
