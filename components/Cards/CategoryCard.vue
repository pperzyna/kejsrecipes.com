<template>
  <div class="box has-text-centered">
    <picture class="image is-128x128">
      <img class="is-rounded" src="category.photo.formats.large.url" />
    </picture>
    <nuxt-link :to="'/dish/' + category.slug + '/'" rel="dofollow">
      <h4 class="title is-2 nowrap">{{ category.title }}</h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['category'],
};
</script>
