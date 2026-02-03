<template>
  <div>
    <Header />
    <Hero />

    <section class="blog">
      <h2>Últimas do blog</h2>

      <Post title="5 dicas para sua carreira profissional" />
      <Post title="5 dicas para sua carreira profissional" />
      <Post title="5 dicas para sua carreira profissional" />

      <a href="#">Ver tudo</a>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Post from "../components/Post.vue";

export default {
  components: { Header, Hero, Post }
};
</script>

<style scoped>
.blog {
  padding: 40px;
}

a {
  color: #2f5c8f;
}
</style>
