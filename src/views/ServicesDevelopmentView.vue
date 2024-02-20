<!--Template-->
<template>
  <section>
    <starter-banner
      title-text="Sua Empresa"
      additional-title-text="Bem Apresentada"
      subtitle-text="Esteja presente na web de maneira segura, relevante"
      additional-subtitle-text="e compatível com os mais diversos dispositivos."
      image-element="webDev.svg"></starter-banner>
  </section>
  <section id="content">
    <h2>Criação e Gestão de Sites</h2>
    <div id="contentContainer">
      <h3>Porque fazer?</h3>
      <p>
        Identificar se sua empresa está necessitando de um redesign é simples. Basta observar se seu
        site está de acordo com as últimas tendências do mercado, se é fácil de se navegar e
        encontrar todas as informações em sua estrutura e se é um site responsivo, ou seja, se
        adapta perfeitamente aos diferentes tamanhos de tela que o acessam.
      </p>
      <p>
        Perceba não somente a questão da ergonomia do site mas também o seu visual. O seu site está
        passando a imagem desejada e adequada da sua empresa para o seu cliente? Se não, então
        podemos pensar em criar algo inovador para melhorar os seus resultados.
      </p>
      <h3>Quais os passos?</h3>
      <h4>Briefing</h4>
      <p>
        A primeira etapa do projeto de web design é a formação de um briefing. Nesta etapa, reunimos
        todas as informações disponíveis sobre o projeto, sua empresa, seu perfil, seu público alvo
        e seus concorrentes. Todas as informações importantes são separadas e fornecidas aos
        designers que trabalharão no projeto.
      </p>
      <h4>Pesquisa</h4>
      <p>
        Nesta etapa, elaboramos uma pesquisa semântica procurando conhecer o universo de
        informações, signos e símbolos inerentes ao projeto de web design bem como a abrangência do
        público alvo. Durante esta etapa, também são levantados materiais semelhantes para
        embasamento das escolhas em termos de design e estrutura das informações.
      </p>
      <h4>Desenvolvimento</h4>
      <p>
        Aqui, desenvolvemos efetivamente o projeto visual, levando em conta todas as informações
        levantadas até o momento, bem como todos os conceitos adquiridos com a nossa experiência de
        designer para o projeto. Nesta etapa, as ideias fluem soltas à exaustão para garantir que as
        melhores escolhas tenham sido tomadas para o web design.
      </p>
      <h4>Entrega e manutenção</h4>
      <p>
        Quanto todos os requisitos tiverem sido atendidos e o objeto final estiver de acordo com as
        avaliações do cliente, fazemos a entrega e publicação do site no seu endereço web. Em caso
        de contrato de manutenção, sentamos semanal, quinzenal ou mensalmente para fazer novas
        publicações e adequações ao site, a fim de mante-lo sempre atual e relevante.
      </p>
      <h3>Site responsivo</h3>
      <p>
        Com toda a tecnologia atual, cada vez mais as pessoas acessam sites por meio de seus
        smartphones e tablets. Por este motivo, é fundamental ter um site responsivo, e se a sua
        empresa ainda não possui um, é possível que esteja perdendo muitas oportunidade e clientes.
      </p>
      <p>
        O conteúdo de um site responsivo pode se adaptar de acordo com o tamanho de cada tela. Não
        importando se o usuário está acessando este conteúdo de um celular smartphone, tablet,
        notebook ou desktop tradicional.
      </p>
      <p>
        Assim é possível acessar o conteúdo de forma muito mais prática, sem precisar dar um zoom na
        sua tela. As informações ficam muito mais claras e a experiência de navegação do usuário
        muito mais agradável.
      </p>
      <p>
        De acordo com os dados da Target Group Index, os acessos via celulares representam cerca de
        64% entre os usuários.
      </p>
      <p>
        De acordo com a Hoodzpah Design, cerca de 54% dos usuários de internet se sentem frustrados
        ao acessar um site que não é adaptado totalmente para múltiplos tipos de tela, e 52% dos
        usuários disseram que seriam menos propensos a se envolver com uma empresa caso a
        experiência com seu website não fosse boa.
      </p>
      <p>
        A Fase Consultoria se preocupa com estes aspectos que podem fazer toda a diferença na hora
        de captar um novo lead para a sua empresa.
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
</style>
