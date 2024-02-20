<!--Template-->
<template>
  <section>
    <starter-banner
      title-text="A Identidade"
      additional-title-text="Do Seu Negócio"
      subtitle-text="Os valores da sua marca, representados e impressos"
      additional-subtitle-text="na comunicação da sua empresa."
      image-element="graphicDesign.svg"></starter-banner>
  </section>
  <section id="content">
    <h2>Design Gráfico</h2>
    <div id="contentContainer">
      <p>
        A área de design gráfico abarca diversos tipos de serviços, como criação de identidade
        visual de sua empresa, embalagens, material promocional, branding e material digital.
      </p>
      <p>
        O design gráfico tem como função chamar a atenção dos seus clientes traduzindo os valores e
        serviços da sua empresa em uma linguagem visual que transmista ao público o que a sua
        empresa faz ou representa, e há pelo menos três razões para investir nessa área:
      </p>
      <h3>Primeira impresão</h3>
      <p>
        A identidade visual é o cartão de visitas da sua empresa. Ela deve demonstrar os valores e
        os princípios que a empresa segue, afinal é como o público lembrará do seu negócio.
      </p>
      <p>
        Pense nela como a embalagem de um produto que está na prateleira. O quão melhor for
        desenvolvida a embalagem, o design e as cores, melhores são as chances do seu cliente
        perceber seu protudo entre os demais e leva-lo para casa.
      </p>
      <h3>Gerar confiança</h3>
      <p>
        Ter uma identidade visual, ou seja, uma padronização da sua marca, demonstra
        profissionalismo. Por isso, os possíveis clientes tendem a confiar mais em você, no seu
        trabalho e nos produtos ofertados.
      </p>
      <h3>Atrair público</h3>
      <p>
        O primeiro objetivo de ter uma identidade visual é atrair possíveis clientes. À medida que a
        sua marca se desenvolve, e você conquista novos clientes e divulga o seu trabalho, a sua
        marca irá se sobressair em meio aos concorrentes.
      </p>
      <p>
        Para a sua empresa, o design gráfico é um investimento, e isso demanda uma empresa
        especializada e com profissionais competentes para colocar no papel a essência do seu
        negócio. Afinal, ela é como você e o seu trabalho serão lembrados.
      </p>
    </div>
  </section>
</template>

<!--Script-->
<script>
import StarterBanner from '@/components/StarterBanner.vue'

export default {
  components: { StarterBanner }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#content {
  margin: 3rem;
}

#content > h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--main-orange-color);
}

#contentContainer {
  background-color: var(--main-blue-color);
  border-radius: 1rem;
  padding: 2rem;
}

#contentContainer > h3,
#contentContainer > p {
  margin-top: 1rem;
}
</style>
