<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3" v-for="recipe in recipes.slice(0, 4)" :key="recipe.uuid">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
      <h2 class="title is-size-2 has-text-primary">Categories</h2>
      <div class="columns is-multiline">
        <div class="column is-2" v-for="category in categories" :key="category.uuid">
          <CategoryCard :category="category" />
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="recipe in recipes.slice(4)" :key="recipe.uuid">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, payload }) {
    if (payload) {
      return { recipes: payload.recipes, categories: payload.categories };
    }

    const recipes = await $axios.get('recipes?_limit=10').then((r) => r.data);
    const categories = await $axios.get('categories?_limit=10').then((r) => r.data);

    return {
      recipes,
      categories,
    };
  },
};
</script>
