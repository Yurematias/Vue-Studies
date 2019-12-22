// cada arquivo do Vue dé composto de 3 partes principais 
// template: para definir o conteúdo daquele componente
// e outros dois opcionais, script: para definir o código referente á aquele template
// e style para definir estilos css para o template 
<template>
    <div>
        <h1>Clicado {{count}} vezes</h1>
        <h2>Dobro: {{double}}</h2>
        <button @click="increment">incrementar</button>
    </div>
</template>
// o bloco script é a instancia Vue em si 
// nele definimos o data, computed, methods, watchers e etc.
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    computed: {
        double() {
            return this.count * 2;
        }
    },
}
</script>
// no style colocamos scoped se quisermos que o estilo desse componente seja local somente para ele
<style scoped>
    div{
        background-color: gray;
    }
</style>