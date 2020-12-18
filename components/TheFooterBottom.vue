<template>
  <div class="columns is-size-7 pt-2">
    <div class="column is-9 has-text-centered-mobile">
      {{ new Date().getFullYear() }} © All rights reserved. Trademarks of and/or copyrighted by their respective owners.
    </div>
    <div class="column is-3 has-text-right-tablet has-text-centered-mobile">
      Made with
      <img alt="love" class="is-vcentered is-pulse" loading="lazy" :src="require('../assets/svg/love.svg')" />
      by
      <a href="https://pperzyna.com" title="Cloud Architect"> pperzyna.com </a>
    </div>
  </div>
</template>
