<!--Template-->
<template>
  <div>
    <h1>
      {{ myNumber }}<span>{{ numberOparator }}</span>
    </h1>
    <p>{{ expertise }}</p>
  </div>
</template>

<!--Script-->
<script>
export default {
  props: { myNumber: String, numberOparator: String, expertise: String },
  data() {
    return {}
  }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div > span {
  font-family: 'Gilroy-Light';
}
</style>
