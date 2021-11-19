<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="wrapper footer-container__wrap">
        <picture>
          <source
            srcset="
              ~assets/img/apix-trade.png,
              ~assets/img/apix-trade@2x.png 2x
            "
          />
          <img
            class="footer-container__img"
            src="~assets/img/apix-trade.png"
            alt="apix.trade"
          />
        </picture>
        <nav class="footer-container__nav">
          <ul class="footer-container__nav-list">
            <li
              v-for="(item, i) in $t('index.footer.links')"
              :key="i"
              class="footer-container__nav-item"
            >
              <a
                :href="item.link"
                target="_blank"
                class="footer-container__nav-link p"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="footer-container__actions">
          <a
            class="header__btn btn btn--header"
            href="https://apix.trade/lk/auth.php"
          >
            {{ $t('index.header.singInBtn') }}
          </a>

          <button class="header__btn btn btn--gradient" @click="onRegister">
            <p>
              {{ $t('index.header.singUpBtn') }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ApixFooter',
  methods: {
    ...mapMutations(['setPopup']),
    onRegister() {
      this.setPopup('PopupRegistration')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &-container {
    padding: 150px 0 33px;

    &__wrap,
    &__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__nav {
      display: flex;
      align-items: center;
      height: 100%;
      color: $white;
      margin: 0;

      &-list {
        display: flex;
        align-items: center;
        height: 100%;
      }

      &-link {
        cursor: pointer;
        padding: 6px;
        margin: 0 6px;
        line-height: 1.73;
        position: relative;
        text-decoration: none;
        color: $white;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0px;
          width: 100%;
          height: 1px;
          background: #e156e4;
          box-shadow: 0 0 10px 1px #e156e4;
          opacity: 0;
          transform: translateY(-2px);
          transition: 0.3s;
        }

        &--active,
        &:hover {
          &:after {
            opacity: 1;
            transform: translateY(0);
          }
        }

        &--active {
          &:after {
            opacity: 0.8;
          }
        }
      }
    }

    &__lang {
      display: flex;
      align-items: center;
      color: #dae1e9;
      cursor: pointer;
      margin: 0 24px 0 25px;

      p {
        text-transform: uppercase;
        letter-spacing: 0.3px;
        margin: 0 8px 0 0;
      }

      .arrow {
        width: 14px;
        transform: scale(-1);
      }
    }
  }

  .btn:not(:last-child) {
    margin-right: 9px;
  }

  @include bp(1200px) {
    &-container {
      padding: 80px 0 33px;

      &__nav {
        margin: 0;
      }
    }
  }

  @include bp(1300px) {
    &-container {
      position: unset;

      &__wrap {
        flex-direction: column;
      }

      &__img,
      &__nav {
        margin: 0 0 30px;
      }
    }
  }

  @include bp(690px) {
    &-container {
      &__nav {
        &-list {
          flex-direction: column;
        }
      }
    }
  }

  .btn--gradient {
    padding: 14px 24px 11px 19px;
  }
}
</style>
