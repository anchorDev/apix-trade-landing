<template>
  <header class="header" :class="{ 'header--fixed': isScrolled }">
    <div class="header__wrap wrapper">
      <picture>
        <source
          srcset="
            ~assets/img/logo_header.png,
            ~assets/img/logo_header@2x.png 2x
          "
        />
        <img
          class="header__logo"
          src="~assets/img/logo_header.png"
          alt="apix.trade"
        />
      </picture>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="(item, i) in $t('index.header.navigation')"
            :key="i"
            class="header__nav-item"
            @click="scrollToPos(idArr[i])"
          >
            <p
              class="header__nav-link"
              :class="{
                'header__nav-link--active': idArr[i] === activeSection,
              }"
            >
              {{ item }}
            </p>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <div class="header__lang">
          <p>{{ $i18n.locale }}</p>
          <arrow class="arrow" />
        </div>

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
      <div
        class="header__burger"
        :class="{ 'header__burger--active': isBurgerOpen }"
        @click="toggleBurger"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div
        class="header__menu-mob"
        :class="{ 'header__menu-mob--active': isBurgerOpen }"
      >
        <div class="wrapper">
          <ul class="header__menu-mob-list">
            <li
              v-for="(item, i) in $t('index.header.navigation')"
              :key="i"
              class="header__menu-mob-item"
              @click="scrollToSection(idArr[i])"
            >
              <p class="big">{{ item }}</p>
            </li>
          </ul>
          <div class="header__actions header__actions--mob">
            <button class="header__btn btn btn--header">
              {{ $t('index.header.singInBtn') }}
            </button>
            <button class="header__btn btn btn--gradient">
              <p>
                {{ $t('index.header.singUpBtn') }}
              </p>
            </button>
            <div class="header__lang">
              <p>{{ $i18n.locale }}</p>
              <arrow class="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import Arrow from '@/assets/svg/arrow.svg?inline'

export default {
  name: 'ApixHeader',
  components: { Arrow },
  data() {
    return {
      isScrolled: false,
      idArr: [
        '#main',
        '#functionality',
        '#cabinet',
        '#calculator',
        '#about-product',
        '#faq',
      ],
      isBurgerOpen: false,
      activeSection: '#main',
    }
  },
  mounted() {
    this.event = window.addEventListener(
      'scroll',
      () => {
        this.throttle(this.onScroll(), 100)
      },
      false
    )
    this.onScroll()

    const options = {
      rootMargin: '-200px 0px -200px 0px',
      threshold: [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8, 0.9, 1],
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target

          if (entry.intersectionRatio >= 0.1) {
            this.activeSection = `#${elem.id}`
          }
        }
      })
    }, options)

    this.idArr.forEach((item) => {
      observer.observe(document.querySelector(item))
    })
  },
  methods: {
    ...mapMutations(['setPopup']),
    throttle(func, timeFrame) {
      let lastTime = 0
      return function (...args) {
        const now = new Date()
        if (now - lastTime >= timeFrame) {
          func(...args)
          lastTime = now
        }
      }
    },
    onScroll() {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop
      this.isScrolled = scrolled > 5
    },
    scrollToPos(id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
    toggleBurger() {
      this.isBurgerOpen = !this.isBurgerOpen
    },
    onRegister() {
      this.setPopup('PopupRegistration')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 67px;
  color: $white;
  border-bottom: 1px solid $border-color;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
  transition: 0.3s;

  &--fixed {
    background: $bg;
    box-shadow: 5.1px 6.1px 16.8px 4.2px rgb(21 19 29 / 43%);
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  &__logo {
    cursor: pointer;
    width: 73px;
  }

  &__nav {
    display: flex;
    align-items: center;
    height: 100%;

    &-list {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &-link {
      cursor: pointer;
      padding: 8px;
      margin: 0 6px;
      line-height: 1.73;
      position: relative;
      font-weight: 600;

      @include bp(1200px) {
        font-size: 13px;
      }

      @include bp(1050px) {
        font-size: 11px;
      }

      @include bp(960px) {
        font-size: 9px;
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -15px;
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

  &__actions {
    display: flex;
    align-items: center;

    &-item {
      margin: 0 27px 0 0;
    }
  }

  &__btn {
    margin: 0 0 0 9px;
  }

  .btn {
    &--gradient {
      @include bp(860px) {
        margin-right: 9px;
      }

      p {
        line-height: 1.4;
      }
    }
  }

  &__lang {
    display: flex;
    align-items: center;
    color: #dae1e9;
    cursor: pointer;
    margin-right: 24px;

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

  &__burger {
    display: none;
    cursor: pointer;

    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 1px;
      background: #e156e4;
      box-shadow: 0 0 10px 1px #e156e4;
      margin: 6px 0;
      transition: 0.4s;
    }

    &--active {
      .bar1 {
        transform: rotate(-45deg) translate(-3px, 6px);
      }

      .bar2 {
        opacity: 0;
      }

      .bar3 {
        transform: rotate(45deg) translate(-4px, -8px);
      }
    }
  }

  &__menu-mob {
    display: none;
  }

  @include bp(860px) {
    &__nav {
      display: none;
    }
    &__burger {
      display: block;
      position: relative;
      z-index: 20;
    }

    &__actions {
      display: none;

      &--mob {
        margin: auto auto 0;
        display: flex;
      }
    }

    &__menu-mob {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;
      background: linear-gradient(130deg, #2a3145 0%, #242834 50%);
      padding: 67px 0;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
      display: block;

      .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      &--active {
        opacity: 1;
        visibility: visible;
      }

      &-list {
        margin: 0 0 40px;
      }

      &-item {
        &:not(:last-child) {
          margin: 0 0 20px;
        }
      }
    }
  }
}
</style>
