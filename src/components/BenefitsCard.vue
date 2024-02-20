<!--Template-->
<template>
  <div id="benefitContainer" class="blue" :class="{ orange: benefitBackground }">
    <h3>{{ benefitTitle }}</h3>
    <p>{{ benefitText }}</p>
  </div>
</template>

<!--Script-->
<script>
export default {
  props: { benefitTitle: String, benefitText: String, benefitBackground: Boolean }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#benefitContainer {
  padding: 2rem;
  border-radius: 1rem;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

#benefitContainer > p {
  text-align: justify;
  text-wrap: balance;
}

.blue {
  background-color: var(--main-blue-color);
}

.orange {
  background-color: var(--main-orange-color);
  position: relative;
  left: 50%;
}
</style>
