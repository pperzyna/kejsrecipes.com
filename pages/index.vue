<template>
  <div class="section">
    <div class="container">Hello World</div>
  </div>
</template>

<script>
export default {
  async data() {
    recipes = await $axios.$get('recipes?limit=10').then((r) => r.data);
    categories = await $axios.$get('categories?limit=10').then((r) => r.data);

    return {
      recipes,
      categories,
    };
  },
};
</script>
