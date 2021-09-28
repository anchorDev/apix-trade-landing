<template>
  <section id="faq" class="faq wrapper">
    <h2 v-in-viewport.once class="fade-in">{{ $t('index.faq.title') }}</h2>

    <div v-for="(group, i) in $t('index.faq.list')" :key="i" class="faq--group">
      <h4>{{ group.groupName }}</h4>

      <faq-item
        v-for="(item, idx) in group.items"
        :key="idx"
        v-in-viewport.once
        :data="item"
        class="fade-in"
      />
    </div>
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

  &--group {
    width: 100%;
    margin-bottom: 64px;

    &:last-child {
      margin-bottom: 0;
    }
  }

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

  h4 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #99a7b8;
    margin-bottom: 16px;
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
