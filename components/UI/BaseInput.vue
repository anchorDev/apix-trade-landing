<template>
  <div data-vue-component-name="BaseInput">
    <label>{{ label }}</label>

    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='BaseInput'] {
  label {
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 1.2px;
    color: #99a7b8;
    display: block;
    margin-bottom: 23px;
  }

  input {
    width: 100%;
    border-radius: 26px;
    box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
    border: solid 1px #99a7b8;
    background-color: transparent;
    padding: 10px 60px 10px 25px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0.9px;
    color: #99a7b8;
  }
}
</style>
