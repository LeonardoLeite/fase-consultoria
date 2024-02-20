<!--Template-->
<template>
  <section>
    <starter-banner
      title-text="Proteja a SUA"
      additional-title-text="Criatividade"
      subtitle-text="Uma marca ou uma ideia original tem muito valor, e nós"
      additional-subtitle-text="podemos te ajudar a adquirir propriedades sobre elas."
      image-element="brand.svg"></starter-banner>
  </section>
  <section id="content">
    <h2>Registro de Marcas</h2>
    <div id="contentContainer">
      <p>
        A marca está entre os mais importantes patrimônios de uma empresa e quando bem cuidada, pode
        gerar lucros constantes por meio da sua exploração direta ou indireta. Ela é a principal
        ligação entre o negócio e o cliente; é, ainda, uma forma de identificação e diferenciação. É
        por isso que pode ser entendida como o referencial da qualidade daquele produto ou serviço.
      </p>
      <h3>Proteja sua marca</h3>
      <p>
        Registrar a sua marca é a única forma de protegê-la legalmente de possíveis copiadores e da
        concorrência, além de ganhar espaço no mercado. Para isso, é preciso procurar o INPI
        <strong>(Instituto Nacional de Propriedade Industrial)</strong> e encaminhar o pedido, que
        será examinado de acordo com a Lei de Propriedade Industrial e demais resoluções
        administrativas do órgão.
      </p>
      <p>
        A marca registrada garante ao proprietário o direito de uso exclusivo em todo o território
        nacional, que pode ser estendido para mais 137 países, isso porque o Brasil é membro da
        Convenção da União de Paris de 1883 (CUP) em seu ramo de atividade econômica.
      </p>
      <h3>O procedimento de criação e registo:</h3>
      <ol>
        <li>Consulta se a marca ja é registrada;</li>
        <li>Definição do setor da marca;</li>
        <li>Determinação da apresentação da marca;</li>
        <li>Ajuste da natureza da marca;</li>
        <li>Composição das taxas;</li>
        <li>Acompanhamento do processo;</li>
        <li>Exame formal do pedido;</li>
        <li>Prazo de oposições;</li>
        <li>Deferimento.</li>
      </ol>
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
#contentContainer > h4,
#contentContainer > p {
  margin-top: 1rem;
}

#contentContainer > ol {
  padding-left: 2rem;
}
</style>
