<template>
  <section class="start-to-earn wrapper">
    <h4 v-in-viewport.once class="fade-in">{{ $t('index.start.title') }}</h4>
    <button v-in-viewport.once class="btn btn--gradient fade-in">
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
  </section>
</template>

<script>
export default {
  name: 'StartToEarn',
  components: {},
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.start-to-earn {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  h4 {
    max-width: 656px;
    color: #dae1e9;
    margin: 0 auto 40px;
    text-shadow: 0 0 10px rgba(29, 182, 253, 0.52);
  }
}
</style>
