<template>
  <div data-vue-component-name="PopupShell">
    <close class="close" @click="onClose" />

    <slot name="default" />
  </div>
</template>

<script>
import Close from '@/assets/svg/close.svg?inline'
import { mapMutations } from 'vuex'

export default {
  name: 'PopupShell',
  components: {
    Close,
  },
  methods: {
    ...mapMutations(['setPopup']),
    onClose() {
      this.setPopup(null)
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='PopupShell'] {
  position: relative;
  padding: 47px 70px 46px 58px;
  border-radius: 17px;
  background: linear-gradient(
    158deg,
    rgba(42, 46, 62, 1) 0%,
    rgba(40, 43, 55, 1) 50%,
    rgba(37, 40, 52, 1) 100%
  );
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);

  .close {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 28px;
    height: 28px;
    fill: #99a7b8;
    cursor: pointer;
  }
}
</style>
