<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <div class="list-group list-group-flush">
        <!-- é possível usar o v-bind no props se quisermos referenciar um objeto data deste componente -->
        <!-- para isso colocamos os nomes do atributos no template bem como estão declarados no objeto -->
        <!-- desta forma se colocarmos um v-bind com o objeto chave da iteração, todos os atributos são -->
        <!-- passados automaticamente como props para o componente. Este é um modo atalho para passagem de props como objeto -->

        <!-- esse componente abaixo possui um ouvidor para um evento personalido que vem do componente filho FilmesListaIten -->
        <!-- neste caso, assim que o evento title for acionado no filho vai ser atribuido na atributo selectedMovie desta instancia -->
        <!-- o valor passado no componente filho -->
        <!-- isto para todas as vezes que selecionar um filme, ele ser passado para o FilmeListaInfo e exibir seu devido nome -->

        <FilmesListaIten v-for="movie of moviesList" :key="movie.id" v-bind="movie" @title="selectedMovie = $event"/>
        <!-- quando o objeto é passado via v-bind todos atributos que coincidem o nome com a prop do componente -->
        <!-- serão passados, entretanto aqueles que não tiverem uma prop correspondente -->
        <!-- passarão para o DOM final na forma de propriedade html -->
        <!-- essas propriedades são chamadas atributos non-prop -->
        <!-- é possível evitar esse comportamento alterando a propriedade boleana do Vue inheritAttrs -->
        <!-- veja no arquivo FilmeListaIten.vue como isso funciona -->
      </div>
    </div>
    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo :selectedMovie="selectedMovie"/>
    </div>
  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  }, 
  data() {
    return {
      selectedMovie: 'Por favor selecione um filme',
      moviesList: [
        {title: 'El Camino', id: 0, year: 2019},
        {title: 'Coringa', id: 1, year: 2019},
        {title: 'O Senhor dos Aneis', id: 2, year: 2002},
        {title: 'Django Livre', id: 3, year: 2012}
      ]
    }
  }
}
</script>
