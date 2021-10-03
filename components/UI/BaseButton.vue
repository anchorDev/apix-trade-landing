<template>
  <div data-vue-component-name="BaseButton">
    <button
      type="button"
      :class="[type, isDisabled && 'disabled']"
      v-on="!isDisabled ? { click: onClick } : {}"
    >
      <span>
        <slot name="default" />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'gradient'].includes(value)
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='BaseButton'] {
  button {
    &.gradient {
      display: flex;
      align-items: center;
      padding: 15px 56px 13px 49px;
      border-radius: $border-radius-btn;
      box-shadow: 0 0 15px 3px rgba(223, 46, 255, 0.6);
      transition: 0.3s;
      overflow: hidden;
      position: relative;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      outline: none;
      border: none;
      color: #fff;
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 200%;
        height: 100%;
        background-image: linear-gradient(
          to right,
          #4ffff9 0%,
          #19d1ff 10%,
          #df2eff 50%,
          #df2eff 51%,
          #19d1ff 90%,
          #4ffff9 100%
        );
        z-index: 1;
        transition: 0.5s ease-in-out;
      }

      span {
        line-height: 1;
        color: $white;
        font-weight: 600;
        position: relative;
        top: -1px;
        text-shadow: 0.2px 3px 8px #000000;
        z-index: 2;
      }

      img {
        position: relative;
        z-index: 2;
      }

      &:hover {
        &:after {
          width: 200%;
          transform: translate(-50%, 0);
        }

        box-shadow: 0.3px 5px 70px 2px rgba(223, 46, 255, 0.3);
      }
    }

    &.primary {
      padding: 15px 26px;
      color: #dae1e9;
      border-radius: $border-radius-btn;
      background: linear-gradient(to bottom, #2e2b41, #2e2b41),
        radial-gradient(circle at 0 0, #06c7ff, #f14cf4);
      box-shadow: inset 0 0 5px 2px rgba(186, 74, 255, 0.74);
      transition: 0.3s;
      border: none;
      cursor: pointer;

      &:hover {
        box-shadow: inset 0 0 5px 2px rgba(115, 237, 251, 0.8);
      }
    }

    &.disabled {
      filter: grayscale(100%);
      cursor: not-allowed;
    }
  }
}
</style>
