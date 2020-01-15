<template>
    <div v-if="showEditSection">
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input :value="dataToEdit.title" type="text" class="form-control" placeholder="Insira o título">
            <label>Ano: </label>
            <input :value="dataToEdit.year" type="number" class="form-control" placeholder="Insira o ano">
        </div>
        
    </div>
</template>
<script>

import { eventBus } from '../main.js'

export default {
    data() {
        return {
            showEditSection: false,
            dataToEdit: undefined
        }
    },
    created() {
        eventBus.$on('edit', (dataReceived) => {
            this.showEditSection = true;
            this.dataToEdit = dataReceived;
        });
    },
}
</script>