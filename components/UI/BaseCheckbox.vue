<template>
  <div data-vue-component-name="BaseCheckbox" @click="onClick">
    <div class="custom-checkbox" :class="{ active: value }" />

    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='BaseCheckbox'] {
  display: flex;
  align-items: center;
  cursor: pointer;

  .custom-checkbox {
    position: relative;
    width: 25px;
    height: 25px;
    box-shadow: inset 0 0 5.2px 1.8px rgba(186, 74, 255, 0.5);
    border: solid 1px #99a7b8;
    background: linear-gradient(
      158deg,
      rgba(42, 46, 62, 1) 0%,
      rgba(40, 43, 55, 1) 50%,
      rgba(37, 40, 52, 1) 100%
    );
    margin-right: 12px;
    display: inline-block;
    border-radius: 1px;
    transition: all 0.4s;

    &.active::before {
      content: '';
      position: absolute;
      top: 58%;
      left: 15%;
      width: 40%;
      height: 2px;
      background: #fff;
      transform: translate(0, -50%) rotate(45deg);
    }

    &.active::after {
      content: '';
      position: absolute;
      top: 48%;
      left: 30%;
      width: 76%;
      height: 2px;
      background: #fff;
      transform: translate(0, -50%) rotate(-51deg);
    }
  }

  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 1.2px;
    color: #99a7b8;
  }
}
</style>
