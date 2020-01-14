<template>
    <div v-if="selectedMovie">
        <h2>Filme selecionado</h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{selectedMovie}}</h5>
                <button class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
    </div>
</template>
<script>

import { eventBus } from '../main'

export default {
    data() {
        return {
            selectedMovie: undefined
        }
    },
    created() {
        eventBus.$on('title', (movie) => {
            this.selectedMovie = movie;
        })
    },
}
</script>