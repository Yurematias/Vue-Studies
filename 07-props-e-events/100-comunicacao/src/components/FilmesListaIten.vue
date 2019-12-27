<template>
    <ul>
        <li class="list-group-item">
            <span>{{movieTitle}}</span>
            <button class="btn btn-success float-right">Selecionar</button>
        </li>
    </ul>
</template>

<script>
export default {
    // é possível definir props sem tipo especificado 
    // ou com tipo especificado
    // sem tipo usamos a sintaxe de array
    // props : [
    //     'movieTitle'
    // ]
    // com tipo usamos a sintaxe de objeto
    props: {
        // movieTitle: String
        // é póssivel escrever uma declaração mais detalhada de uma props 
        // para isso definimos ele como sendo um objeto
        // nela podemos definir o tipo, definirmos uma validação ou até mesmo um valor default
        movieTitle: {
            type: String, // definindo tipo 
            // default: 'Unnamed movie',  // valor padrão a ser atribudo caso a props nao receba nenhum valor (obs: só funciona com tipos primitivos de dados)
            // caso o valor default seja um array ou objeto esse default precisa ser um método que retorna o valor
            // exemplos
            // default() {
            //     return {name: 'Django Livre', director: 'Quentin Tarantino'}
            // }
            // default() {
            //     return ['someValue','someValue','someValue]
            // }
            default() {
                return 'Unnamed movie'
            },
            // o método validator serve para validar o valor ou não retornando um boleano
            // recebe o valor da prop no parametro
            // neste caso o titulo do filme só sera validado caso tenha de 2 caracteres pra cima 
            // caso contrario aparecera um erro no console do navegador avisando que a prop nao foi validada
            // validator(title) {
            //     return title.lenght > 1;
            // }

            // obs: as props são renderizadas antes do resto da instancia vue
            // desta forma não é possivel avessar o data. methods ou computed properties
        } 
    }
}
</script>