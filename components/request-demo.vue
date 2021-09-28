<template>
  <section class="wrapper">
    <blockquote v-in-viewport.once class="request-demo fade-in">
      <p class="big">
        <b>{{ $t('index.request.text') }}</b>
      </p>
      <button class="btn btn--header">{{ $t('index.request.btn') }}</button>
    </blockquote>
  </section>
</template>

<script>
export default {
  name: 'RequestDemo',
  components: {},
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.request-demo {
  margin: 0 auto 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 140px 20px;
  background: linear-gradient(
    166deg,
    #2c3345 0%,
    #252935 30%,
    #252935 64%,
    #392751 100%
  );
  border-radius: 42px;
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);

  p {
    color: #99a7b8;
    white-space: pre-line;
    margin: 0 26px 0 0;
  }

  .btn {
    white-space: nowrap;
  }

  @include bp(1200px) {
    padding: 19px 30px 20px;
    margin: 0 0 80px;
  }

  @include bp(767px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    border-radius: $border-radius-card-lg;

    p {
      white-space: unset;
      margin: 0 0 15px;
    }
  }
}
</style>
