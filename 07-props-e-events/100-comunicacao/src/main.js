import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// event bus é usado para que componentes irmãos possam se comunicar sem a necessidade 
// de passar props para o componentes pais e sair passando para os filhos 
// pois isso se torna muito complicado quando há muitos componentes filhos para ficar repassando a prop
// o event bus serve para evitar esse tipo de coisa
// trata-se de uma instancia Vue sem mandar nada como construtor
// podemos usala em qualquer lugar da aplicação se colocada no main e for devidamente importada nos componentes
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')