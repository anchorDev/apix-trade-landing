<template>
  <section
    id="about-product"
    data-vue-component-name="AboutProduct"
    class="about-product"
  >
    <div class="wrapper about-product__wrap">
      <h2 v-in-viewport.once class="fade-in">
        {{ $t('index.aboutProduct.title') }}
      </h2>
      <p
        v-in-viewport.once
        class="fade-in small"
        v-html="$t('index.aboutProduct.text')"
      />
    </div>

    <div class="container">
      <div class="img">
        <picture>
          <source
            srcset="
              ~assets/img/api-defender.png,
              ~assets/img/api-defender@2x.png 2x
            "
          />
          <img src="~assets/img/api-defender.png" alt="apix.trade" />
        </picture>
      </div>

      <div class="information">
        <h2>
          Наш продукт объединяет трейдеров и инвесторов<br />
          для защищенного сотрудничества
        </h2>

        <p>
          Мы видим нашу платформу, как то место, где инвестор смог бы с полной
          уверенностью вложить свои деньги, доверив их профессиональным
          трейдерам, <span>безопасно умножая свой капитал</span>, в то время как
          трейдер получает возможность управления множеством аккаунтов
          инвесторов единовременно, извлекая максимум прибыли от своей торговли.
        </p>

        <p>
          <span>Уникальные возможности</span> нашей платформы позволят открыть
          мир безопасных инвестиционных возможностей как для профессионалов, так
          и для начинающих.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutProduct',
}
</script>

<style lang="scss" scoped>
.about-product {
  padding: 0 0 170px;

  @include bp(1200px) {
    padding: 0 0 70px;
  }

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
      margin: 0 0 8px;
    }

    p {
      margin: 0 auto -25px;
      text-align: center;
      max-width: 960px;
      background-image: linear-gradient(to right, #6dcaff, #c663ff),
        linear-gradient(to left, #bfbccd, #bfbccd);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: 600;
    }
  }

  .container {
    display: flex;
    flex-direction: row;

    @include bp(1200px) {
      flex-direction: column;
    }

    .img {
      flex: 0 0 861px;

      @include bp(1200px) {
        flex: 0 0 auto;
        margin: 0 auto 15px auto;
      }

      img {
        max-width: 100%;
      }
    }

    .information {
      flex: 0 0 440px;
      color: #99a7b8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 95px;
      margin-left: -14px;

      @include bp(1200px) {
        max-width: 450px;
        margin: 0 auto;
      }

      h2 {
        font-size: 24px;
        line-height: 1.25;
        letter-spacing: 1.44px;
        margin-bottom: 27px;
        font-weight: 700;
      }

      p {
        color: #6e7594;
        margin-bottom: 39px;
        font-size: 15px;
        font-weight: 400;

        &:last-child {
          margin-bottom: 0;
        }

        span {
          color: #99a7b8;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
