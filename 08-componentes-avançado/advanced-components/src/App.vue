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
  </div>
</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  }
}
</script>