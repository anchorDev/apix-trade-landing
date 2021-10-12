<template>
  <section id="functionality" class="functionality">
    <div class="wrapper">
      <h2 v-in-viewport.once class="fade-in">
        {{ $t('index.functionality.title') }}
      </h2>
      <p
        v-in-viewport.once
        class="fade-in small"
        v-html="$t('index.functionality.text')"
      ></p>
      <div class="functionality__wrap">
        <div class="functionality__col">
          <video ref="video" muted loop autoplay playsinline>
            <source
              src="~assets/video/functionaly/video.mp4"
              type="video/mp4"
            />
            <source
              src="~assets/video/functionaly/video.webm"
              type="video/webm"
            />
            <source
              :src="require('~/assets/video/functionaly/video.mov').default"
              type="video/quicktime"
            />
          </video>
          <video ref="video" muted loop autoplay playsinline>
            <source
              src="~assets/video/functionaly/video-mobile.mp4"
              type="video/mp4"
            />
            <source
              src="~assets/video/functionaly/video-mobile.webm"
              type="video/webm"
            />
            <source
              :src="
                require('~/assets/video/functionaly/video-mobile.mov').default
              "
              type="video/quicktime"
            />
          </video>
        </div>
        <div class="functionality__col">
          <h5 v-in-viewport.once class="functionality__sub-title fade-in">
            {{ $t('index.functionality.sub_title') }}
          </h5>
          <ul class="functionality__list">
            <li
              v-for="(item, i) in $t('index.functionality.list')"
              :key="i"
              v-in-viewport.once
              class="functionality__list-item fade-in"
            >
              <p class="medium" v-html="item"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.functionality {
  padding: 0 0 70px;
  text-align: center;

  h2 {
    background-image: linear-gradient(
      90deg,
      #9dfff9 0%,
      #75c8fd 25%,
      #72c1fd 50%,
      #6ca2fc 75%,
      #8868fb 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 auto 4px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper > p {
    margin: 0 auto 85px auto;
    max-width: 940px;
    white-space: pre-line;
    background-image: linear-gradient(to right, #6dcaff, #c663ff),
      linear-gradient(to left, #bfbccd, #bfbccd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    line-height: 1.7;

    @include bp(800px) {
      white-space: unset;
    }
  }

  &__wrap {
    display: flex;
  }

  &__col {
    &:first-child {
      margin: 0 0 -14px -14%;
      mix-blend-mode: lighten;
      filter: contrast(1.2);
    }

    &:last-child {
      text-align: left;
      padding: 20px 0 0;
      flex: 1 0 440px;
      max-width: 440px;
      width: 100%;
    }
  }

  video {
    position: relative;
    z-index: 1;
    max-width: 100%;
    margin: -100px 0 0 36px;

    &:nth-child(2) {
      display: none;
    }

    @include bp(1200px) {
      margin: -100px 0 0;
    }

    @include bp(640px) {
      display: none;
      &:nth-child(2) {
        display: block;
      }
    }
  }

  &__sub-title {
    margin: 0 0 30px;
    letter-spacing: 1.44px;

    @include bp(1200px) {
      text-align: center;
    }
  }

  &__list {
    text-align: left;

    &-item {
      display: flex;
      color: #6e7594;

      &:nth-child(1) {
        max-width: 405px;
      }

      &:nth-child(2) {
        max-width: 453px;
      }

      &:nth-child(3) {
        max-width: 418px;
      }

      &:first-child,
      &:nth-child(2) {
        margin: 0 0 30px;
      }

      p {
        ::v-deep b {
          font-weight: 600;
          color: #99a7b8;
        }
      }
    }
  }

  @include bp(1200px) {
    &__wrap {
      flex-direction: column;
      margin: 0 0 80px;
    }

    &__col {
      &:first-child {
        margin: -10% 0;

        @include bp($md) {
          margin: 0;
        }
      }

      &:last-child {
        padding: 0;
        flex: 1;
        margin: 0 auto;
      }
    }

    &__img {
      left: -2.5%;
    }
  }

  @include bp(768px) {
    h2 {
      display: block;
      width: 270px;
    }
    &__list {
      &-item {
        p {
          &:first-child {
            text-align: center;
            min-width: 21px;
          }
        }
      }
    }
  }
}
</style>
