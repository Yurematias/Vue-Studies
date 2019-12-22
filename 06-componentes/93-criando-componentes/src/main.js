// no main importamos as devidas dependencias 
// neste caso o componente App importado por esse arquivo usa o componente AppContador
// assim precisamos importar e definir o componente AppContador aqui neste arquivo 
// é diferente do React 

import Vue from 'vue'
import App from './components/App.vue'

// definindo que tags com app-contador presente no componente principal que neste caso é o App
// referencia o componente AppContador
// essa é a forma global de definir o componente
// Vue.component('app-contador', AppContador);


new Vue({
  // el: '#app',
  // função para renderizar o componente principal
  render: h => h(App),
}).$mount('#app');
