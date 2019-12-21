import Vue from 'vue'

// é importante usar um identificador no nome do componente
// para ele não ser confundido com componentes nativos do Vue ou do HTML
Vue.component('ym-component', {
  // em se tratando do data
  // em componentes ele precisa ser uma função
  // função esta que retorna as propriedades de data da instancia vue 
  data(){
    return {
      title: 'Curso de VueJS',
      counter: 0
    }
  },
  methods: {
    increase() {
      this.counter++;
    }
  },
  // este template abaixo 
  // agora pode ser usado no index.html
  // basta usar o nome do componente definido em Vue.component
  template: `
    <div>
      <h1>Curso de VueJS</h1>
      <button @click="increase">clicado {{counter}} vezes</button>
    </div>
  `
});

new Vue({
  el: '#app' 
});
