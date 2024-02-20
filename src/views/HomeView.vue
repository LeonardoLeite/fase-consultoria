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
    <h2 style="text-align: center; margin-bottom: 1rem">Áreas de atuação</h2>
    <div id="areaCards">
      <area-card
        card-badge="chip.svg"
        card-title="Cosultoria de TI"
        card-text="Tenha a estrutura de TI adequada a realidade da sua empresa, com processos mapeados, e um parque tecnológico moderno, que atenda as necessidades do seu negócio sem gerar gastos desnecessários."></area-card>
      <area-card
        card-badge="world.svg"
        card-title="Criação e Gestão de Sites"
        card-text="Conte com um site de fácil acesso, com conteúdo relevante e atualizável, reponsivo e criado com ferramentas que ajudam a melhorar a navegação com base nos indicadores de fluxo de usuários."
        has-orange-bg="true"></area-card>
      <area-card
        card-badge="pen.svg"
        card-title="Design Gráfico"
        card-text=" Criamos logotipos memoráveis, flyers que convertem, banners que atraem a atenção, websites profissionais que transmitem sua mensageme muito mais. Tudo com alta qualidade, prazos flexíveis e preços acessíveis."></area-card>
      <area-card
        card-badge="badge.svg"
        card-title="Registro de Marcas"
        card-text="Possua a titularidade e exclusividade do uso da sua marca ou logotipo devidamente atestado e reconhecido pelo Instituto Nacional de Propriedade Industrial em todo o território nacional."
        has-orange-bg="true"></area-card>
    </div>
  </section>
  <section id="benefits">
    <h2 style="text-align: center; margin-bottom: 1rem">Como podemos te ajudar</h2>
    <benefits-card
      benefit-title="Sua empresa apoiada por uma equipe experiente"
      benefit-text="Como consultoria experiente, podemos oferecer ao seu negócio formas diferentes para obter bons resultados nos mais diversos tipos de mercado. A nossa experiência será de grande valor quando sua empresa precisar criar novas estratégias de negócios, aderir a novas plataformas ou redimensionar o seu parque de TI."></benefits-card>
    <benefits-card
      benefit-title="Conte com o planejamento adequado para sua realidade"
      benefit-text="Disponha de uma consultoria de fora, que tenha uma visão baseada no estudo das suas necessidades e sem vícios do dia-a-dia, focada no que você precisa para manter a melhor comunicação com o seu cliente, de maneira clara, intuitiva e sem rodeios."
      benefit-background="true"></benefits-card>
    <benefits-card
      benefit-title="Diminua os custos nos investimentos"
      benefit-text="Com a ajuda da nossa consultoria você reduz os custos com aquisições, implantações e manutenções no parque de TI, além de conseguir uma visão clara e real das dimenôes de suas necessidade operacionais, evitando gastos desnecessários e cortando recursos dispensáveis."></benefits-card>
    <benefits-card
      benefit-title="Conte com o planejamento adequado para sua realidade"
      benefit-text="Ajudamos você a desenhar a sua marca, site ou app, incorporando nele a essência e a cara do seu negócio. Aplicamos conceitos de desenvolvimento com metodologias ágeis, design thinking e responsividade para identificar os melhores fluxos de navegação e conteúdos."
      benefit-background="true"></benefits-card>
  </section>
  <section id="whoTrustsUs">
    <h2 style="text-align: center; margin-bottom: 2rem">Quem confia na Fase</h2>
    <div id="whoTrustsUsContent">
      <img src="../assets/images/voadv.svg" alt="First client logo" />
      <img src="../assets/images/pdl.svg" alt="Second client logo" />
      <img src="../assets/images/pep.svg" alt="Third client logo" />
      <img src="../assets/images/asas.svg" alt="Fourth client logo" />
    </div>
  </section>
</template>

<!--Script-->
<script>
import StarterBanner from '@/components/StarterBanner.vue'
import MyNumbers from '@/components/MyNumbers.vue'
import AboutFase from '@/components/AboutFase.vue'
import AreaCard from '@/components/AreaCard.vue'
import BenefitsCard from '@/components/BenefitsCard.vue'

export default {
  components: { StarterBanner, MyNumbers, AboutFase, AreaCard, BenefitsCard }
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

#benefits {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

#whoTrustsUs {
  margin: 3rem;
}

#whoTrustsUsContent {
  display: flex;
  justify-content: space-evenly;
}

#whoTrustsUsContent > img {
  max-width: 25%;
}
</style>
