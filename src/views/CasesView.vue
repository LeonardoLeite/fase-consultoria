<!--Template-->
<template>
  <section id="banner">
    <starter-banner
      title-text="Cases de"
      additional-title-text="Sucesso"
      subtitle-text="Confira alguns dos trabalhos que geraram muito"
      additional-subtitle-text="resultado para os nossos clientes."
      image-element="cases.svg"></starter-banner>
  </section>
  <section id="cases">
    <case-card
      image-title="voadvColor.svg"
      card-text="Escritório de advocacia com sede em Recife e presença consolidada no estado de Pernambuco, Valmir Olivera Jr  atende a clientes tanto na capital quanto no interior. O escritório já era muito bem reconhecido nos canais offline e escolheu a Fase Consultoria para levar a força da sua marca para o mundo digital."
      is-consulting="true"
      is-branding="true"
      is-development="true"></case-card>
    <case-card
      image-title="pdlColor.png"
      card-text="O Ponto da Locação é uma fornecedora de equipamentos para construção civíl que desenvolveu um aplicativo para plataforma iOS com o intúito de facilitar a consulta ao seu estoque e solicitação de orçamentos com o objetivo de impactar o maior número possível de pessoas. Nós desenvolvemos o design e implementamos a aplicação para iPhone que foi disponibilizada, há época, na App Store."
      is-consulting="true"
      is-design="true"></case-card>
    <case-card
      image-title="pepColor.svg"
      card-text="A Pasta & Pesto é uma marca especilizada na produção de massas artesanais e pizzas que operava apenas atravéz de loja física e trouxe pra Fase Consultoria o desafio de digitalizar toda a sua operação e entrar no mercado digital. Criamos e implementamos as lojas virtuais em diversas plataformas de vendas digitais para atingir o público qualificado. Criamos também o site institucional da empresa com acesso rápido aos cardápios e informações dos produtos, além de participarmos do desenvolvimento e elaboração das embalagens de macarrão, para gôndolas de supermercado e de pizza, para delivery."
      is-consulting="true"
      is-development="true"
      is-design="true"
      is-branding="true"></case-card>
    <case-card
      image-title="asasColor.svg"
      card-text="O Asas da América é uma empresa de produção de eventos consolidada no estado de Pernambuco, que tem tradição familiar e que consiste de trio elétrico e banda. O trabalho da Fase junto ao Asas foi o de registro da marca junto as entidades competentes"
      is-branding="true"></case-card>
  </section>
</template>

<!--Script-->
<script>
import StarterBanner from '@/components/StarterBanner.vue'
import CaseCard from '@/components/CaseCard.vue'

export default {
  components: { StarterBanner, CaseCard }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#cases {
  margin: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
