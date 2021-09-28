<template>
  <section class="calculator">
    <div class="wrapper calculator__wrap">
      <h2 v-in-viewport.once class="fade-in">{{ $t('index.calc.title') }}</h2>
      <div class="calculator__card">
        <div class="calculator__col">
          <p>{{ $t('index.calc.capital') }}</p>
          <input-prefix
            :value="capital"
            class="calculator__input"
            label="USD"
            :limit-to="5000"
            @value="(val) => (capital = val)"
          />

          <p>{{ $t('index.calc.average_income') }}</p>
          <input-prefix
            :value="average_income"
            class="calculator__input"
            label="%"
            @value="(val) => (average_income = val)"
          />

          <p>{{ $t('index.calc.commission') }}</p>
          <input-prefix
            :value="commission"
            class="calculator__input"
            label="%"
            @value="(val) => (commission = val)"
          />
        </div>
        <div class="calculator__col calculator__col--long">
          <h5>{{ $t('index.calc.income') }}</h5>
          <div class="calculator__box box">
            <div class="box__col">
              <h3><span>$</span> {{ oneDay }}</h3>
              <p>{{ $t('index.calc.day') }}</p>
            </div>
            <div class="box__col">
              <h3><span>$</span> {{ oneMonth }}</h3>
              <p>{{ $t('index.calc.month') }}</p>
            </div>
            <div class="box__col">
              <h3><span>$</span> {{ oneYear }}</h3>
              <p>{{ $t('index.calc.year') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InputPrefix from '@/components/shared/input-prefix'

export default {
  name: 'Calculator',
  components: {
    InputPrefix,
  },
  data: () => {
    return {
      capital: 5000,
      average_income: 1,
      commission: 5,
    }
  },
  computed: {
    percentage() {
      return (this.capital / 100) * this.average_income
    },
    oneDay() {
      let income = this.percentage
      if (isNaN(this.percentage)) income = 0
      return (income / 100) * 40
    },
    oneMonth() {
      return this.oneDay * 30
    },
    oneYear() {
      return this.oneDay * 365
    },
  },
}
</script>

<style lang="scss" scoped>
.calculator {
  padding: 0 0 170px;
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      background-size: 99% 99%;
      background-position: 50%;
      background-repeat: no-repeat;
      margin: 0 0 30px;
    }
  }
  &__card {
    display: flex;
    width: 100%;
    padding: 53px 82px 55px;
    border-radius: $border-radius-card-lg;
    box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
    background: linear-gradient(
      166deg,
      #2c3345 0%,
      #252935 30%,
      #252935 64%,
      #392751 100%
    );

    @include bp($lg) {
      padding: 53px 30px;
    }
    @include bp(900px) {
      flex-direction: column;
    }
  }
  &__col {
    flex: 1 0 322px;
    &:first-child {
      margin: 0 45px 0 0;
      p {
        padding: 0 0 0 5px;
        margin: 0 0 13px;
      }
      @include bp(900px) {
        margin: 0 0 40px;
        p {
          padding: 0;
        }
      }
    }
    p {
      color: #99a7b8;
    }
    &--long {
      flex: 1 0 calc(100% - 367px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h5 {
        align-self: flex-start;
        margin: 0 0 17px;
      }
    }
    @include bp($lg) {
      flex: 1 0 250px;
      &--long {
        flex: 0 0 calc(100% - 295px);
      }
    }

    @include bp(900px) {
      flex: auto;
    }
  }
  &__input {
    &:nth-child(2),
    &:nth-child(4) {
      margin: 0 0 25px;
    }
  }
  .box {
    display: -ms-grid;
    display: grid;
    gap: 0 16px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

    @include bp(700px) {
      grid-template-columns: 1fr;
      gap: 16px 0;
    }
    &__col {
      padding: 53px 0 47px 41px;
      border-radius: $border-radius-card-lg;
      box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
      background: linear-gradient(
        166deg,
        #2c3345 0%,
        #252935 30%,
        #252935 64%,
        #392751 100%
      );
      @include bp($lg) {
        padding: 30px 20px;
      }
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
        margin: 0 0 14px;

        span {
          vertical-align: middle;
          font-size: 18px;
          line-height: 0.75;
          letter-spacing: 1.08px;
        }
      }
    }
  }
}
</style>
