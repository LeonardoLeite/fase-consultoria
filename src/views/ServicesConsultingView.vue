<!--Template-->
<template>
  <section>
    <starter-banner
      title-text="O Melhor Time"
      additional-title-text="No Seu Negócio"
      subtitle-text="Independente de qual seja o seu problema, podemos"
      additional-subtitle-text="te ajudar a soluciona-lo"
      image-element="itConsulting.svg"></starter-banner>
  </section>
  <section id="content">
    <h2>Consultoria de TI</h2>
    <div id="contentContainer">
      <p>
        Consultoria de TI é a terceirização dos serviços estratégicos de TI, de forma que o cliente
        possa se beneficiar do conhecimento técnico de um Consultor de Tecnologia da Informação, que
        o auxilie no planejamento de projetos, na tomada de decisões e no acompanhamento de todas as
        atividades, elevando o padrão de qualidade e minimizando os erros e custos ao evitar
        retrabalho.
      </p>
      <h3>Papel da consultoria de TI</h3>
      <p>
        O papel da consultoria de TI é auxliliar o cliente na tomada de decisões, direcionando-o
        para que ele faça as melhores escolhas que reduzam tempo de implementação e economizem
        dinheiro. Esse direcionamento inclui:
      </p>
      <ul>
        <li>Estudar e avaliar o cenário atual, as necessidades e a realidade do cliente;</li>
        <li>Avaliar dependências e requisitos necessários para o andamento de projetos;</li>
        <li>Sugerir soluções ideais para atender as necessidades apresentadas;</li>
        <li>
          Auxiliar no detalamento ou montagem de escopo para a pré-instalação ou aquisição de
          soluções de TI;
        </li>
        <li>Acompanhar e orientar a implementação de sistemas;</li>
        <li>
          Treinar equipes ou profissionais habilitando-os a operar e oferecer suporte e manutenção
          em empresas;
        </li>
        <li>
          Melhorar a performance e os resultados conforme os objetivos estratégicos dos clientes;
        </li>
        <li>Avaliar o parque tecnológico propondo mudanças, quando necessárias.</li>
      </ul>
      <h3>Tipos de consultoria</h3>
      <h4>Sistemas e equipamentos</h4>
      <p>
        Nesse modelo de consultoria, buscamos orientar você na aquisição e implementação de sistemas
        ou equipamentos de TI, apoiando o desenvolvimento da sua empresa, no que se refere à
        estrutura técnica e tecnológica.
      </p>
      <p>
        Dessa forma, te ajudamos a minimizar erros, reduzir custos e agilizar o processo dessas
        mudanças, otimiando seus processos e contando com treinamento ou suporte profissional.
      </p>
      <p>
        Podemos também apoiar ou nos responsabilziar pela gestão de ativos, mantendo um inventário
        atualizado e garantindo a disponibilidade de todos os equipamentos.
      </p>
      <h4>Segurança</h4>
      <p>
        Para esse modelo, nos voltamos especificamente às questões de segurança da informação e
        infraestrutura tendo em mente que, com a LGPD (Lei Geral de Proteção de Dados) já em curso,
        é fundamental dispor de profisisonais especializados na legislação e capazes de adequar as
        suas operações as novas normas, evitando autuações e multas.
      </p>
      <h4>Infraestrutura</h4>
      <p>
        No modelo focado em infraestrutura, buscamos garantir a melhor performance do setor de TI,
        além de reduzir a indisponibilidade de sistemas e aplicações.
      </p>
      <p>
        Também temos como objetivo controlar os acessos e permissões em servidores e arquivos,
        garantindo mais segurança às informações estratégicas da sua empresa.
      </p>
      <h4>Consultoria FULL</h4>
      <p>
        Por fim, temos o modelo Full, que assume todas as responsabilidades do setor de TI da sua
        empresa.
      </p>
      <p>
        Esse modelo pode ser muito útil e mais barato para empresas pequenas, do que implementar
        internamente um departamento, dessa forma a empresa pode investir seus recursos em precessos
        relacionados à atividade-chave do negócio, deixando o planejamento e as decisões de TI para
        os profissionais especializados na área.
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
#contentContainer > h4,
#contentContainer > p {
  margin-top: 1rem;
}

#contentContainer > ul {
  padding-left: 2rem;
}
</style>
