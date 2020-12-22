<template>
  <div class="card">
    <div class="card-image card-image-rounded">
      <nuxt-link :to="'/dish/' + recipe.slug + '/'" rel="nofollow">
        <picture class="image">
          <source :srcset="recipe.photos[0].formats.medium.url" type="image/webp" />
          <source :srcset="recipe.photos[0].formats.medium.url" type="image/jpeg" />
          <img :src="recipe.photos[0].formats.medium.url" :alt="recipe.title" />
        </picture>
      </nuxt-link>
    </div>
    <div class="card-content">
      <p class="has-text-grey has-text-right is-size-7">
        {{ recipe.date }}
      </p>
      <nuxt-link :to="'/dish/' + recipe.slug + '/'" rel="dofollow">
        <h4 class="title is-2">{{ recipe.title }}</h4>
      </nuxt-link>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recipe'],
};
</script>
