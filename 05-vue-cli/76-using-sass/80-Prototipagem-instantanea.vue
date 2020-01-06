

<template>
    <!-- esse arquivo fez parte da aula 80 onde foi visto como usar arquivos Vue fora de projeto  -->
    <!-- vue serve para  -->
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="title">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Olá mundo'
            }
        }
    }
</script>