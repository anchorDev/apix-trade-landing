<template>
  <label class="input-prefix">
    <input v-model="inputVal" class="input-prefix__input" type="number" />
    <span class="input-prefix__label">{{ label }}</span>
  </label>
</template>

<script>
import { debounce } from '@/helpers/common'

export default {
  name: 'InputPrefix',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    limitTo: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.setInputValue(val, this)
      },
    },
  },
  methods: {
    setInputValue: debounce((val, self) => {
      if (self.limitTo > 0) {
        const newValue = parseInt(val)
        const clampedValue = Math.max(newValue, self.limitTo)
        self.$emit('value', clampedValue)
        self.$forceUpdate()
      } else {
        self.$emit('value', parseInt(val))
      }
    }, 500),
  },
}
</script>

<style lang="scss" scoped>
.input-prefix {
  display: block;
  width: 100%;
  position: relative;
  &__input {
    width: 100%;
    border-radius: 26px;
    box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
    border: solid 1px #99a7b8;
    background-color: transparent;
    padding: 14px 60px 13px 25px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0.9px;
    color: #99a7b8;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 23px;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0.9px;
    color: #99a7b8;
  }
}
</style>
