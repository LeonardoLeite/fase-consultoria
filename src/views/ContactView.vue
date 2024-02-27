<!--Template-->
<template>
  <section id="banner">
    <div id="leftContent">
      <h1>O Seu Primeiro<br /><span style="font-family: 'Gilroy-Light'">Passo É Aqui</span></h1>
      <p>
        Conte pra gente um pouco do que você precisa,<br />que entraremos em contato muito em breve.
      </p>
    </div>
    <div id="rightContent">
      <div id="buttons">
        <button
          class="serviceButton"
          @click="setButtonState"
          value="consulting"
          :class="{ serviceButtonIsActive: selectedConsulting }">
          Consultoria de TI
        </button>
        <button
          class="serviceButton"
          @click="setButtonState"
          value="branding"
          :class="{ serviceButtonIsActive: selectedBrandig }">
          Registro de marca
        </button>
        <button
          class="serviceButton"
          @click="setButtonState"
          value="development"
          :class="{ serviceButtonIsActive: selectedDevelopment }">
          Criação e gestão de sites
        </button>
        <button
          class="serviceButton"
          @click="setButtonState"
          value="design"
          :class="{ serviceButtonIsActive: selectedDesign }">
          Design gráfico
        </button>
      </div>
      <form @submit.prevent="submitForm" id="clientForm">
        <input type="text" name="name" id="name" placeholder="Nome" v-model="clientName" />
        <div id="innerForm">
          <input type="email" name="mail" id="mail" placeholder="E-mail" v-model="clientMail" />
          <input type="tel" name="phone" id="phone" placeholder="Telefone" v-model="clientPhone" />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="Mensagem"
          v-model="clientMessage"></textarea>
        <button id="submitMessage">Enviar</button>
      </form>
    </div>
  </section>
</template>

<!--Script-->
<script>
export default {
  data() {
    return {
      clientName: '',
      clientMail: '',
      clientPhone: '',
      clientMessage: '',
      selectedConsulting: false,
      selectedBrandig: false,
      selectedDevelopment: false,
      selectedDesign: false
    }
  },
  methods: {
    clearForm() {
      // TODO Print message on screen
      console.log('Mensagem enviada com sucesso.')
      this.clientName = ''
      this.clientMail = ''
      this.clientPhone = ''
      this.clientMessage = ''
      this.selectedConsulting = false
      this.selectedBrandig = false
      this.selectedDevelopment = false
      this.selectedDesign = false
    },
    submitForm() {
      console.log('Name: ' + this.clientName)
      console.log('Mail: ' + this.clientMail)
      console.log('Phone: ' + this.clientPhone)
      console.log('Message: ' + this.clientMessage)
      console.log('Consultoria de TI: ' + this.selectedConsulting)
      console.log('Registro de Marca: ' + this.selectedBrandig)
      console.log('Criação e gestão de sites: ' + this.selectedDevelopment)
      console.log('Design gráfico: ' + this.selectedDesign)
      this.clearForm()
    },
    setButtonState(event) {
      if (event.target.value === 'consulting') {
        this.selectedConsulting = !this.selectedConsulting
      } else if (event.target.value === 'branding') {
        this.selectedBrandig = !this.selectedBrandig
      } else if (event.target.value === 'development') {
        this.selectedDevelopment = !this.selectedDevelopment
      } else if (event.target.value === 'design') {
        this.selectedDesign = !this.selectedDesign
      }
    }
  }
}
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
  display: flex;
  justify-content: space-between;
}

#buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

#clientForm {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

#innerForm {
  display: flex;
  gap: 1rem;
}

#innerForm > input {
  width: 100%;
}

input {
  border-top: none;
  border-left: none;
  border-right: none;
}

input,
textarea {
  background-color: transparent;
  border-color: var(--main-orange-color);
  border-width: 1px;
  color: white;
  padding-left: 4px;
}

input::placeholder,
textarea::placeholder {
  color: white;
}

#leftContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#rightContent {
  background-color: var(--main-blue-color);
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.serviceButton {
  background-color: transparent;
  border-color: var(--main-orange-color);
  border-radius: 2rem;
  border-width: 1px;
  border-style: solid;
  padding: 0.5rem;
  color: white;
}

.serviceButton:hover,
.serviceButton:active {
  background-color: var(--main-orange-color);
}

.serviceButtonIsActive {
  background-color: var(--main-orange-color);
}

#submitMessage {
  background-color: var(--main-orange-color);
  border-style: none;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  color: white;
  font-family: 'Gilroy-ExtraBold';
  align-self: center;
}
</style>
