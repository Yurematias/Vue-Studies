<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <div class="list-group list-group-flush">
        <!-- é possível usar o v-bind no props se quisermos referenciar um atributo data deste componente -->
        <FilmesListaIten v-for="movie of moviesList" :key="movie.id" :movieTitle="movie.title" />
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
        {title: 'El Camino', id: 0},
        {title: 'Coringa', id: 1},
        {title: 'O Senhor dos Aneis', id: 2},
        {title: 'Django Livre', id: 3}
      ]
    }
  }
}
</script>
