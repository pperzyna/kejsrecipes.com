<template>
  <section class="section pb-3 pt-3 pl-2 pr-2">
    <div class="container">
      <BNavbar>
        <template slot="brand">
          <nuxt-link class="navbar-item mb-0" to="/">
            <picture class="image is-64x64">
              <img src="/icon.png" alt="Kej's recipes logo" />
            </picture>
            <span class="pt-2 pl-2"> Kej's recipes </span>
          </nuxt-link>
        </template>

        <template slot="start"> </template>

        <template slot="end">
          <nuxt-link class="navbar-item" to="/about" title="About"> About </nuxt-link>
          <nuxt-link class="navbar-item" to="/contact" title="Contact"> Contact </nuxt-link>
        </template>
      </BNavbar>
    </div>
  </section>
</template>

<script>
import { BNavbar } from 'buefy/dist/components/navbar';

export default {
  components: {
    BNavbar,
  },
};
</script>

<style>
.navbar-burger {
  margin-top: 15px;
}
</style>
