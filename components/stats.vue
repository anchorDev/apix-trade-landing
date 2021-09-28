<template>
  <section class="wrapper">
    <div v-in-viewport.once class="stats fade-in">
      <ul class="stats__list">
        <li class="stats__list-item">
          <h3>527,122,529</h3>
          <p class="medium">{{ $t('index.stats.traiders') }}</p>
        </li>
        <li class="stats__list-item">
          <h3>467,142,599</h3>
          <p class="medium">{{ $t('index.stats.investors') }}</p>
        </li>
        <li class="stats__list-item">
          <h3><span>$</span> 25,892,345</h3>
          <p class="medium">{{ $t('index.stats.capital') }}</p>
        </li>
        <li class="stats__list-item">
          <h3><span>$</span> 25,892,345</h3>
          <p class="medium">{{ $t('index.stats.income') }}</p>
        </li>
      </ul>
    </div>

    <p class="stats__description">*{{ $t('stats.description') }}</p>
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
.stats {
  padding: 53px 80px;
  margin: -42px auto 0;
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
  border-radius: $border-radius-card-lg;
  background: linear-gradient(
    166deg,
    #2c3345 0%,
    #252935 30%,
    #252935 64%,
    #392751 100%
  );

  &__list {
    display: flex;
    justify-content: space-between;

    &-item {
      flex: 0 0 auto;

      h3 {
        text-shadow: 0 0 9px rgba(29, 182, 253, 0.52);
        background: linear-gradient(
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

        span {
          font-size: 18px;
          line-height: 0.75;
          letter-spacing: 1.08px;
        }
      }

      p {
        margin: 4px 0 0;
        color: #99a7b8;
      }
    }
  }

  &__description {
    font-size: 12px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.72px;
    text-align: left;
    color: #626e7d;
    margin-bottom: 163px;
    padding: 17px 0 0 32px;
  }

  @include bp(1200px) {
    padding: 40px 30px;
    margin: -40px auto 80px;
    &__list {
      flex-wrap: wrap;

      &-item {
        flex: 0 0 50%;

        &:nth-child(1),
        &:nth-child(2) {
          margin: 0 0 30px;
        }
      }
    }
  }

  @include bp(787px) {
    &__list {
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex: 0 0 100%;

        h3 {
          padding: 0.5px;
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-origin: content-box;
        }
        &:not(:last-child) {
          margin: 0 0 30px;
        }
      }
    }
  }
}
</style>
