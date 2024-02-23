<!--Template-->
<template>
  <section id="banner">
    <div id="leftContent">
      <h1>O Seu Primeiro<br /><span style="font-family: 'Gilroy-Light'">Passo É Aqui</span></h1>
      <p>
        Conte pra gente um pouco do que você precisa,<br />que entraremos em contato muito em breve.
      </p>
    </div>
    <!-- TODO Create the form component to send client informations by email -->
    <div id="rightContent"></div>
  </section>
</template>

<!--Script-->
<script>
export default {}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#banner {
  margin: 3rem;
  background-image: url('../assets/images/contactBg.png');
  background-repeat: no-repeat;
  background-position-y: bottom;
  height: 40vh;
}

#leftContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
