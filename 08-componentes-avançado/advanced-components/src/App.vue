<template>
  <div>
    <!-- todo conteúdo colocado dentro de um componente desta forma -->
    <!-- irá para a tag slot do componente -->
    <!-- assim no componente que neste caso é o Post onde quer que coloquemos a tag <slot />  -->
    <!-- este conteúdo aparecerá -->
    <Post> 
      <p>este é o conteúdo passado para dentro do slot no componente Post</p>
      <!-- usando template para nao ser renderizado no DOM final -->
      <template slot="header">
        <p>This is the Header</p>
      </template>
      <template slot="content">
        <p>
          <strong>This </strong>is the main content
        </p>
      </template>
      <template slot="footer">
        <p>
         This is the footer
        </p>
      </template>
      <template slot="testWithDefault">
        Este conteúdo vai sobrepor o padrão
      </template>
    </Post>  
    <!-- Componentes dinamicos -->
    <h1>
        <strong>Componentes dinamicos</strong>
    </h1>

    <!-- é possível fazer um componente generico que pode renderizar vários componentes -->
    <!-- isso é viável em situações de menu onde dependendo da opção escolhida é renderizado um -->
    <!-- componente diferente, era possivel fazer tambem com v-ifs no entanto componentes dinamicos são a melhor opção para isso -->

    <button @click="currentComponent = 'Post'">POST</button>
    <button @click="currentComponent = 'Comment'">COMENTÁRIO</button>
    
    
    <!-- para passar props para o componente há um problema -->
    <!-- se a prop passada for para um componente que não possui uma prop com o mesmo nome -->
    <!-- esta prop passará a ser um atributo non-prop -->
    <!-- para isso usamos o v-bind para passar um objeto, onde todo atributo do objeto ér passado como prop -->
    <!-- mas para isso precisamos definir uma computed para caso o componente a ser renderizado não seja o da prop -->
    <!-- o v-bind ser de um objeto vazio -->
    
    <component :is="currentComponent" v-bind="currentProp"></component>


  </div>
</template>

<script>

import Comment from './components/Comment'
import Post from './components/Post.vue'

export default {
  components: {
    Comment, Post
  },
  data() {
    return {
      currentComponent: 'Post'
    }
  }, 
  computed: {
    currentProp() {
      return this.currentComponent == 'Post' ? { content: 'AMENO DORIME' } : {};
    }
  }
}
</script>