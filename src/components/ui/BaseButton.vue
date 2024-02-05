<!--Template-->
<template>
  <router-link id="contactButton" :to="{ name: 'contact' }">{{ buttonText }}</router-link>
</template>

<!--Script-->
<script>
export default {
  props: { buttonText: String }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#contactButton {
  background-color: var(--main-orange-color);
  padding: 0.5rem 1.6rem;
  border-radius: 1rem;
  font-family: 'Gilroy-ExtraBold';
  text-decoration: none;
  color: white;
}

#contactButton:visited {
  color: white;
}
</style>
