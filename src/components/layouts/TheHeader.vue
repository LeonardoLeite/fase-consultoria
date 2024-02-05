<!--Template-->
<template>
  <header>
    <!-- Logo image at the left side of the Header -->
    <img src="../../assets/images/horizontallogo.svg" alt="Company logo" />
    <!-- Navigation menu at the right side of the Header -->
    <nav>
      <router-link :to="{ name: 'home' }">Início</router-link>
      <!-- Dropdown menu -->
      <div>
        <!-- At click, show or hide dropdown menu -->
        <button @click="showDropdownMenu">Serviços</button>
        <div id="dropdownMenu" v-if="isShown">
          <!-- At click on any router-link, change page and hide dropdown menu -->
          <router-link :to="{ name: 'consulting' }" @click="showDropdownMenu"
            >Consultoria de TI</router-link
          >
          <router-link :to="{ name: 'development' }" @click="showDropdownMenu"
            >Desenvolvimento e gestão de sites</router-link
          >
          <router-link :to="{ name: 'design' }" @click="showDropdownMenu"
            >Design gráfico</router-link
          >
          <router-link :to="{ name: 'branding' }" @click="showDropdownMenu"
            >Criação e registro de marcas</router-link
          >
        </div>
      </div>
      <router-link :to="{ name: 'cases' }">Cases</router-link>
      <base-button buttonText="Contato"></base-button>
    </nav>
  </header>
</template>

<!--Script-->
<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
  components: { BaseButton },
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    showDropdownMenu() {
      this.isShown = !this.isShown
    }
  }
}
</script>

<!--Style-->
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}

button {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

header {
  background-color: var(--main-background-color);
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  max-height: 60px;
}

nav {
  display: flex;
  gap: 1.6rem;
  align-items: center;
}

#dropdownMenu {
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: var(--main-background-color);
  padding: 1rem;
}
</style>
