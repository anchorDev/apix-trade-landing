<template>
  <div class="loader">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="loader__image"
      :class="{ active: index === count }"
    >
      <picture>
        <source :srcset="`${item[0]}, ${item[1]} 2x`" />
        <img :src="item[0]" alt="apix.trade" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data() {
    return {
      images: [
        [require('~/assets/img/0.jpg'), require('~/assets/img/0@2x.jpg')],
        [require('~/assets/img/20.jpg'), require('~/assets/img/20@2x.jpg')],
        [require('~/assets/img/40.jpg'), require('~/assets/img/40@2x.jpg')],
        [require('~/assets/img/60.jpg'), require('~/assets/img/60@2x.jpg')],
        [require('~/assets/img/80.jpg'), require('~/assets/img/80@2x.jpg')],
        [require('~/assets/img/100.jpg'), require('~/assets/img/100@2x.jpg')],
      ],
      count: 0,
    }
  },
  mounted() {
    const interval = setInterval(() => {
      this.count++
      if (this.count === 5) {
        clearInterval(interval)
      }
    }, 250)
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.loader {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #222328;
  @include size(100%);

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 240px;
    height: 240px;
    opacity: 0;
    transition: 0.25s;

    &.active {
      opacity: 1;
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
