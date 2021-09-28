<template>
  <section id="main" class="hero-main">
    <div class="hero-main__content wrapper">
      <picture>
        <source
          srcset="~assets/img/logo_main.png, ~assets/img/logo_main@2x.png 2x"
        />
        <img
          v-in-viewport.once
          class="hero-main__logo fade-in"
          src="~assets/img/logo_main.png"
          alt="apix.trade"
        />
      </picture>
      <h5 v-in-viewport.once class="hero-main__title fade-in">
        {{ $t('index.hero.title') }}
      </h5>
      <ul class="hero-main__list">
        <li
          v-for="(item, i) in $t('index.hero.list')"
          :key="i"
          v-in-viewport.once
          class="hero-main__list-item fade-in"
        >
          <component :is="`hero${i + 1}`" />
          <p class="big" v-html="item" />
        </li>
      </ul>
      <div v-in-viewport.once class="hero-main__action fade-in">
        <button class="btn btn--gradient">
          <picture>
            <source
              srcset="~assets/img/logo_btn.png, ~assets/img/logo_btn@2x.png 2x"
            />
            <img
              class="hero-main__btn-logo"
              src="~assets/img/logo_btn.png"
              alt="apix.trade"
            />
          </picture>
          <p>{{ $t('index.hero.btn_1') }}</p>
        </button>
        <button class="btn btn--header">
          {{ $t('index.hero.btn_2') }}
        </button>
      </div>
    </div>
    <div class="hero-main__video">
      <video ref="video" muted loop autoplay playsinline>
        <source src="~assets/video/video.mp4" type="video/mp4" />
        <source src="~assets/video/video.webm" type="video/webm" />
        <source
          :src="require('~/assets/video/video.mov').default"
          type="video/quicktime"
        />
      </video>
      <video ref="video" muted loop autoplay playsinline>
        <source src="~assets/video/video-mob.mp4" type="video/mp4" />
        <source src="~assets/video/video-mob.webm" type="video/webm" />
        <source
          :src="require('~/assets/video/video-mob.mov').default"
          type="video/quicktime"
        />
      </video>
    </div>
  </section>
</template>

<script>
import Hero1 from 'assets/svg/hero1.svg?inline'
import Hero2 from 'assets/svg/hero2.svg?inline'
import Hero3 from 'assets/svg/hero3.svg?inline'

export default {
  name: 'HeroMain',
  components: {
    Hero1,
    Hero2,
    Hero3,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
}
</script>

<style lang="scss">
.hero-main {
  position: relative;
  padding: 134px 0 139px;

  &__contnet {
    position: relative;
  }

  &__logo {
    margin: 0 0 0 -12px;
  }

  &__title {
    margin: -16px 0 51px;
    transition-delay: 0.1s;
  }

  &__list {
    max-width: 537px;
    margin: 0 0 60px;

    &-item {
      display: flex;
      padding: 0 0 0 55px;
      position: relative;

      &:nth-child(1) {
        transition-delay: 0.2s;
      }

      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      &:nth-child(3) {
        transition-delay: 0.4s;
      }

      &:not(:last-child) {
        margin: 0 0 30px;
      }

      svg {
        position: absolute;
        right: calc(100% - 39px);
      }

      p {
        white-space: pre-line;
        background-image: linear-gradient(to right, #6dcaff, #c663ff),
          linear-gradient(to left, #bfbccd, #bfbccd);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }
    }
  }

  &__action {
    display: flex;
    transition-delay: 0.5s;
    position: relative;
    z-index: 2;

    .btn {
      &:first-child {
        margin: 0 21px 0 0;
      }
    }
  }

  &__video {
    max-width: 946px;
    width: 100%;
    position: absolute;
    left: 68.5%;
    top: 53%;
    transform: translate(-50%, -50%);
    mix-blend-mode: lighten;
    min-height: 250px;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 32%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle,
        rgba(46, 114, 242, 0.1) 0%,
        rgba(46, 114, 242, 0) 50%
      );
    }

    video {
      position: relative;
      z-index: 1;
      max-width: 100%;
      mix-blend-mode: screen;

      &:nth-child(2) {
        display: none;
      }

      @include bp(640px) {
        display: none;
        &:nth-child(2) {
          display: block;
        }
      }
    }
  }

  @include bp(1100px) {
    &__video {
      position: relative;
      transform: unset;
      left: unset;
      top: unset;
      margin: 0 auto;
    }
  }

  @include bp(767px) {
    padding: 80px 0;
    &__logo {
      max-width: 100%;
    }
    &__list {
      &-item {
        padding: 0 0 0 80px;

        svg {
          right: calc(100% - 54px);
        }
      }
    }
    &__video {
      video {
        max-width: 130%;
        left: -16%;
      }

      img {
        max-width: 130%;
        left: -16%;
        bottom: 3px;
      }
    }
  }
}
</style>
