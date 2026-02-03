<template>
  <div class="card">
    <h3>{{ item.nome }}</h3>
    <p>{{ item.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 6px;
  width: 200px;
}
</style>
