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

    p {
      margin: 0 auto 54px;
      text-align: center;
      max-width: 930px;
      background-image: linear-gradient(to right, #6dcaff, #c663ff),
        linear-gradient(to left, #bfbccd, #bfbccd);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
}
</style>
