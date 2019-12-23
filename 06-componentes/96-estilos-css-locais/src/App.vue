<template>
    <ul :class="$style.red">
        <li>exemplo</li>
        <li>exemplo</li>
        <li>exemplo</li>
        <li>exemplo</li>
        <li>exemplo</li>
    </ul>
</template>

// usar o scoped é uma simulação que o Vue tem para o Shadow DOM
// o scopped é menos performático
// o preferível é usar o module
// nele definimos as classes que podem ser referenciadas no template 
// no template podemos referenciála com data-binding exemplo ':style' ou estaticamente com o class normal
// ao usar o data-binding para estilizar, podemos usar uma computed propertie que vem por padrão
// ela é a $style 
// nada mais é que um objeto que contem todas as classes 
// assim se temos uma classe .red que coloca a cor vermelha, podemos acessá-la com $style.red

<style module>
    .red{
        background-color: red;
    }
</style>