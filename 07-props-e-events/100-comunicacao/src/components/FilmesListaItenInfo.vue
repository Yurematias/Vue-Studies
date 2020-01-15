<template>
    <div v-if="selectedMovie">
        <h2>Filme selecionado</h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{selectedMovie.title}} | {{selectedMovie.year}}</h5>
                <button @click="edit" class="btn btn-danger float-right">Editar</button>
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
        });
    },
    methods: {
        edit() {
            eventBus.$emit('edit', this.selectedMovie);
        }
    }
}
</script>