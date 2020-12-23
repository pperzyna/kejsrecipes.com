<template>
  <div class="section">
    <div class="container">
      <div class="has-text-centered mb-6">
        <h1 class="title is-size-1">{{ recipe.title }}</h1>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-text-right has-text-grey is-size-7">
            {{ recipe.date }}
          </div>
          <h3 class="title is-size-3 has-text-grey">Preparation time:</h3>
          <p class="is-size-5">
            {{ recipe.preparation }}
          </p>
          <h3 class="title is-size-3 has-text-grey mt-6">Secret ingredients:</h3>
          <p class="is-size-5">
            {{ recipe.ingredients }}
          </p>
          <h3 class="title is-size-3 has-text-grey mt-6">Recipe:</h3>
          <p class="is-size-5">
            {{ recipe.body }}
          </p>
        </div>
        <div class="column">
          <BCarousel :autoplay="true" with-carousel-list :indicator="false" :overlay="gallery" @click="switchGallery(true)">
            <BCarouselItem v-for="(item, i) in recipe.photos" :key="i">
              <figure class="image">
                <img :src="item.formats.large.url" class="is-round" />
              </figure>
            </BCarouselItem>
          </BCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselItem, BCarouselList } from 'buefy/dist/components/carousel';

export default {
  components: {
    BCarousel,
    BCarouselItem,
    BCarouselList,
  },

  async asyncData({ $axios, payload, route }) {
    if (payload) {
      return { recipe: payload.recipe, recipes: payload.recipes };
    }

    const recipe = await $axios.get('recipes?slug=' + route.params.recipe).then((r) => r.data[0]);
    //const recipes = await $axios.get('categories?_limit=10').then((r) => r.data);

    return {
      recipe,
      // categories,
    };
  },
  data() {
    return {
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6,
          },
        },
      },
    };
  },
  head() {
    return {
      title: this.recipe.title,
    };
  },
};
</script>
