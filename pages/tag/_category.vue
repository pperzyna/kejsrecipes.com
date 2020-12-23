<template>
  <div class="section">
    <div class="container">
      <div class="has-text-centered mb-6">
        <h1 class="title is-size-1">{{ category.title }}</h1>
      </div>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="recipe in recipes.slice(0, 4)" :key="recipe.uuid">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const category = await $axios.get('categories?slug=' + route.params.category).then((r) => r.data[0]);
    const recipes = await $axios.get('recipes?categories=' + category.id + '&_limit=10').then((r) => r.data);

    return {
      recipes,
      category,
    };
  },

  head() {
    return {
      title: this.category.title,
    };
  },
};
</script>
