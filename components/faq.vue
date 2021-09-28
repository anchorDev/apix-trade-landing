<template>
  <section id="faq" class="faq wrapper">
    <h2 v-in-viewport.once class="fade-in">{{ $t('index.faq.title') }}</h2>
    <faq-item
      v-for="(item, i) in $t('index.faq.list')"
      :key="i"
      v-in-viewport.once
      :data="item"
      class="fade-in"
    />
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
.faq {
  margin: 0 auto 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0 auto 45px;
    text-align: center;
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
  }

  @include bp(1200px) {
    h2 {
      display: block;
    }
    margin: 0 auto 80px;
  }

  @include bp(1100px) {
    h2 {
      width: 120px;
    }
  }
}
</style>
