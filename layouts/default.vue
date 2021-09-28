<template>
  <div>
    <div class="overlay overlay-1"></div>
    <div class="overlay overlay-2"></div>
    <div class="overlay overlay-3"></div>
    <div class="overlay overlay-4"></div>
    <apix-header />
    <Nuxt />
    <apix-footer />
  </div>
</template>

<script>
import ApixHeader from '@/components/shared/apix-header'
import ApixFooter from '@/components/shared/apix-footer'
export default {
  components: {
    ApixHeader,
    ApixFooter,
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

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('~assets/img/bg.jpg') 50% 0 no-repeat;
    z-index: -1;

    @include bp(768px) {
      background: url('~assets/img/bg.jpg') 50% 0 no-repeat;
      background-size: auto 7200px;
    }
  }

  .overlay {
    position: absolute;
  }

  .overlay {
    &-1 {
      left: -10%;
      top: 10%;
      width: 30%;
      height: 45%;
      background: radial-gradient(
        ellipse at -25% 50%,
        rgba(128, 70, 174, 0.8) 0%,
        rgba(46, 114, 242, 0) 50%
      );
    }

    &-2 {
      left: -10%;
      top: 50%;
      width: 30%;
      height: 45%;
      background: radial-gradient(
        ellipse at -25% 50%,
        rgba(128, 70, 174, 0.5) 0%,
        rgba(46, 114, 242, 0) 50%
      );
    }

    &-3 {
      right: -10%;
      top: 10%;
      width: 30%;
      height: 45%;
      background: radial-gradient(
        ellipse at 125% 50%,
        rgba(128, 70, 174, 0.8) 0%,
        rgba(46, 114, 242, 0) 50%
      );
    }

    &-4 {
      right: -10%;
      top: 50%;
      width: 30%;
      height: 45%;
      background: radial-gradient(
        ellipse at 125% 50%,
        rgba(128, 70, 174, 0.5) 0%,
        rgba(46, 114, 242, 0) 50%
      );
    }
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
