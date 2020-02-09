<template>
    <div>
        <p>EU SOU UM POST COM A PROP {{content}}</p>
        <!-- tudo colocado dentro da tag Post no App.vue aparecerá aqui -->
        <slot />
        <!-- no entanto é possível dividir os slots, ou seja, os conteúdos passádos especificarem onde -->
        <!-- os elementos serão renderizados, indicando em qual slot o conteúdo aparecerá -->
        <!-- para isso enviamos o conteúdo indicando o nome do slot com o atributo slot no App.vue -->
        <!-- no próprio componente definimos o slot e colocamos o name dele como atributo desta forma...-->
        <slot name="header"/>
        <slot name="content"/>
        <slot name="footer"/>
        <!-- é possível definir um conteúdo default para um slot -->
        <slot name="testWithDefault">
            <p>este é o conteúdo padrão do slot</p>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
    .slot{
        background-color: red;
        color: white;
    }
</style>>
    


