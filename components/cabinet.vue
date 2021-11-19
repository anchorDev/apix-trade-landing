<template>
  <section id="cabinet" class="cabinet">
    <div class="wrapper">
      <h2 v-in-viewport.once class="fade-in">
        {{ $t('index.cabinet.title') }}
      </h2>
      <p
        v-in-viewport.once
        class="fade-in small"
        v-html="$t('index.cabinet.text')"
      />
      <div class="cabinet__wrap">
        <div class="cabinet__col">
          <ul class="cabinet__list">
            <li
              v-for="(item, i) in $t('index.cabinet.list')"
              :key="i"
              v-in-viewport.once
              class="cabinet__list-item fade-in"
            >
              <component :is="`cabinet${i + 1}`" :class="[`cabinet${i + 1}`]" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <p
          v-in-viewport.once
          class="cabinet__col fade-in"
        >
          <div class="cabinet__btn-text">
            <p>{{ $t('index.cabinet.link-text') }}</p>
          </div>
          <picture>
            <source
              srcset="
                ~assets/img/service-screen.png,
                ~assets/img/service-screen@2x.png 2x
              "
            />
            <img
              class="cabinet__img"
              src="~assets/img/service-screen.png"
              alt="apix.trade"
            />
          </picture>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Cabinet1 from '@/assets/svg/cabinet1.svg?inline'
import Cabinet2 from '@/assets/svg/cabinet2.svg?inline'
import Cabinet3 from '@/assets/svg/cabinet3.svg?inline'
import Cabinet4 from '@/assets/svg/cabinet4.svg?inline'

export default {
  name: '',
  components: {
    Cabinet1,
    Cabinet2,
    Cabinet3,
    Cabinet4,
  },
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.cabinet {
  padding: 0 0 91px;

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
    margin: 0 auto;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper > p {
    margin: 0 auto 54px;
    text-align: center;
    max-width: 850px;
    background-image: linear-gradient(to right, #6dcaff, #c663ff),
      linear-gradient(to left, #bfbccd, #bfbccd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn-text {
    position: absolute;
    left: -2px;
    top: -2px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    @include size(calc(100% + 4px));
    z-index: 20;
    border-radius: 11px;
    overflow: hidden;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    p {
      font-size: 30px;
      color: $white;
      font-weight: 600;
    }
  }

  &__col {
    &:first-child {
      flex: 1 0 550px;
      position: relative;
    }

    &:last-child {
      position: relative;
      margin: -5.5% 0 0 0;
      width: 52.5%;

      &:hover {
        .cabinet__btn-text {
          visibility: visible;
          opacity: 1;
        }
      }

      @include bp($md) {
        width: 98%;
      }

      &:after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        right: 50%;
        z-index: 0;
        box-shadow: 0.3px 5px 56.6px 2.4px rgba(29, 182, 253, 0.3);
        border-radius: 11px;
      }

      &:before {
        content: '';
        position: absolute;
        top: -2px;
        left: 50%;
        bottom: -2px;
        right: -2px;
        z-index: 0;
        box-shadow: 0.3px 5px 56.6px 2.4px rgba(223, 46, 255, 0.3);
        border-radius: 11px;
      }

      picture {
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: flex-end;
        border-radius: 11px;
        //box-shadow: 0.3px 5px 56.6px 2.4px rgba(223, 46, 255, 0.3);
        border: solid 2.2px #947dfe;
        background-image: linear-gradient(to top, #4ffff9, #19d1ff, #df2eff);

        &:after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          bottom: -2px;
          right: -2px;
          z-index: 1;
          background-image: linear-gradient(
            to right,
            #4ffff9,
            #19d1ff,
            #df2eff
          );
          border-radius: 11px;
        }

        img {
          z-index: 3;
          border-radius: 11px;
          display: block;
          max-width: 100%;
        }
      }
    }
  }

  &__list {
    max-width: 550px;
    margin: 0 0 64px;

    &-item {
      display: flex;
      flex-direction: column;
      padding: 0 0 0 60px;
      position: relative;
      color: #6e7594;

      &:not(:last-child) {
        margin: 0 0 30px;
      }

      p {
        white-space: pre-line;
        font-weight: 600;
      }

      svg {
        position: absolute;
        top: 9px;
        right: calc(100% - 39px);
      }
    }
  }

  &__img {
    max-width: 90%;
  }

  @include bp(1200px) {
    h2 {
      display: block;
      text-align: center;
      margin: 0 auto 10px;
    }
    &__wrap {
      flex-direction: column;
    }
    &__col {
      &:last-child {
        margin: -14% 0 -5%;
      }
    }

    &__list {
      max-width: 450px;
      margin: 0 auto 0;

      &-item {
        padding: 0 0 0 80px;

        p {
          white-space: unset;
        }

        svg {
          right: calc(100% - 54px);
        }
      }
    }

    &__img {
      top: unset;
      left: 4%;
    }
  }

  @include bp(767px) {
    padding: 0 0 40px;
    &__img {
      left: -14%;
      max-width: 140%;
    }
  }
}
</style>
