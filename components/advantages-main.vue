<template>
  <section id="advantages" class="advantages wrapper">
    <h5 v-in-viewport.once class="advantages__title fade-in">
      {{ $t('index.advantages.title') }}
    </h5>
    <div class="advantages__wrap">
      <div
        v-for="(item, i) in $t('index.advantages.list')"
        :key="i"
        v-in-viewport.once
        class="advantages-card fade-in"
      >
        <component :is="`advantages${i + 1}`" />
        <h5>{{ item.title }}</h5>
        <p class="big">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Advantages4 from '@/assets/svg/advantages1.svg?inline'
import Advantages2 from '@/assets/svg/advantages2.svg?inline'
import Advantages3 from '@/assets/svg/advantages3.svg?inline'
import Advantages1 from '@/assets/svg/advantages4.svg?inline'

export default {
  name: 'AdvantagesMain',
  components: {
    Advantages1,
    Advantages2,
    Advantages3,
    Advantages4,
  },
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.advantages {
  margin: 0 auto 143px;
  &__title {
    margin: 0 0 18px;
  }
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  @include bp(1200px) {
    margin: 0 auto 80px;
  }

  @include bp(767px) {
    &__wrap {
      margin: 0;
    }
  }
}
.advantages-card {
  padding: 35px 23px 36px 32px;
  background: linear-gradient(130deg, #2a3145 0%, #242834 50%);
  border-radius: $border-radius-card-sm;
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
  margin: 0 8px;
  flex: 0 0 calc(25% - 16px);
  svg {
    margin: 0 0 23px;
    height: 44px;
  }
  h5 {
    margin: 0 0 10px;
  }
  p {
    color: #6e7594;
    white-space: pre-line;
  }

  &:nth-child(1) {
    svg {
      width: 44px;
    }
  }
  &:nth-child(2) {
    transition-delay: 0.2s;
    svg {
      width: 30px;
    }
  }
  &:nth-child(3) {
    transition-delay: 0.3s;
    svg {
      width: 45px;
    }
  }
  &:nth-child(4) {
    transition-delay: 0.4s;
    svg {
      width: 43px;
    }
  }

  @include bp(1200px) {
    flex: 0 0 calc(50% - 16px);
    margin: 0 8px 16px;
  }

  @include bp(767px) {
    flex: 0 0 100%;
    margin: 0 0 16px;

    p {
      white-space: unset;
    }
  }
}
</style>
