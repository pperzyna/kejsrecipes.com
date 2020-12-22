<template>
  <div class="section">
    <div class="container">
      <BCarousel :autoplay="true" with-carousel-list :indicator="false" :overlay="gallery" @click="switchGallery(true)">
        <BCarouselItem v-for="(item, i) in recipe.photos" :key="i">
          <figure class="image">
            <img :src="item.formats.large.url" />
          </figure>
        </BCarouselItem>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
        <template slot="list" slot-scope="props">
          <BCarouselList
            v-model="props.active"
            :data="recipe.photos"
            v-bind="al"
            @switch="props.switch($event, false)"
            as-indicator
          />
        </template>
        <template slot="overlay">
          <div class="has-text-centered has-text-white">Hello i'am overlay!</div>
        </template>
      </BCarousel>
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
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        document.documentElement.classList.add('is-clipped');
      } else {
        document.documentElement.classList.remove('is-clipped');
      }
    },
  },
  head() {
    return {
      title: this.recipe.title,
    };
  },
};
</script>
