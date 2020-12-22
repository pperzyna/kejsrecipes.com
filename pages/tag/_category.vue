<template>
  <div class="section">
    <div class="container">
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
  async asyncData({ $axios, payload, route }) {
    if (payload) {
      return { recipes: payload.recipes, category: payload.category };
    }

    const category = await $axios.get('category?slug=' + route.params.category).then((r) => r.data[0]);
    //const recipes = await $axios.get('categories?_limit=10').then((r) => r.data);

    return {
      recipes,
      category,
    };
  },

  head() {
    return {
      titleTemplate: '',
      title: "Kej's recipes",
    };
  },
};
</script>
