<template>
  <div>
    <popup-worker />
    <apix-header />
    <Nuxt />
    <apix-footer />
    <client-only>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/85947484"
            style="position: absolute; left: -9999px"
            alt=""
          />
        </div>
      </noscript>
    </client-only>
    <transition name="fade">
      <loader v-if="isShown" />
    </transition>
  </div>
</template>

<script>
import ApixHeader from '@/components/shared/apix-header'
import ApixFooter from '@/components/shared/apix-footer'
import PopupWorker from '@/components/hoc/popup-worker'
import Loader from '@/components/loader'

export default {
  components: {
    ApixHeader,
    ApixFooter,
    PopupWorker,
    Loader,
  },
  scrollToTop: true,
  data() {
    return {
      isShown: true,
    }
  },
  head() {
    return {
      title: this.$t('index.head.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('index.head.title'),
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShown = false
    }, 2000)
  },
}
</script>

<style lang="scss">
html {
  font-family: ProximaNova;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: $bg;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  padding: 67px 0 0;
  position: relative;
  background: #222328;
  background-size: 100% auto;
  zoom: 0.9;

  @include bp($lg) {
    zoom: 1;
  }

  &.iframe {
    zoom: 1;
    padding: 0;
  }

  @include retina {
    background: #222328;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
