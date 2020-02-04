<template>
  <div>
    <!-- todo conteúdo colocado dentro de um componente desta forma -->
    <!-- irá para a tag slot do componente -->
    <!-- assim no componente que neste caso é o Post onde quer que coloquemos a tag <slot />  -->
    <!-- este conteúdo aparecerá -->
    <Post> 
      <p>este é o conteúdo passado para dentro do slot no componente Post</p>
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