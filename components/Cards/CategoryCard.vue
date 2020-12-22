<template>
  <div class="box has-text-centered">
    <nuxt-link :to="'/tag/' + category.slug + '/'" rel="nofollow" :title="category.title">
      <picture class="image mb-5">
        <img class="is-round" :src="category.photo ? category.photo.formats.thumbnail.url : ''" />
      </picture>
    </nuxt-link>
    <nuxt-link :to="'/tag/' + category.slug + '/'" rel="dofollow" :title="category.title">
      <h4 class="title is-2 has-text-info">{{ category.title }}</h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['category'],
};
</script>
