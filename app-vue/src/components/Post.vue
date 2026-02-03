<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <p>
      Confira algumas dicas que podem ajudar a alavancar sua carreira como
      desenvolvedor front-end.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}
</style>
