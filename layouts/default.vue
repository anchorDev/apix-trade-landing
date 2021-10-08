<template>
  <div>
    <popup-worker />
    <apix-header />
    <Nuxt />
    <apix-footer />
  </div>
</template>

<script>
import ApixHeader from '@/components/shared/apix-header'
import ApixFooter from '@/components/shared/apix-footer'
import PopupWorker from '@/components/hoc/popup-worker'

export default {
  components: {
    ApixHeader,
    ApixFooter,
    PopupWorker,
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
  background: #222328 url('~assets/img/bg.jpg') 50% 0 no-repeat;
  background-size: 100% auto;
  zoom: 0.9;

  @include bp($lg) {
    zoom: 1;
  }

  @include retina {
    background: #222328 url('~assets/img/bg2@x.jpg') 50% 0 no-repeat;
    background-size: 100% auto;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
