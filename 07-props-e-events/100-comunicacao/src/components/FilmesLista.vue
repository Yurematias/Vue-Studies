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
        <FilmesListaIten v-for="movie of moviesList" :key="movie.id" v-bind="movie" />
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
      <FilmesListaItenInfo/>
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
      moviesList: [
        {title: 'El Camino', id: 0, year: 2019},
        {title: 'Coringa', id: 1, year: 2019},
        {title: 'O Senhor dos Aneis', id: 2, year: 2012},
        {title: 'Django Livre', id: 3, year: 2002}
      ]
    }
  }
}
</script>
