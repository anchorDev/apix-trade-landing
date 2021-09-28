<template>
  <div data-vue-component-name="Step">
    <div v-if="stepNumber" class="step-number">
      <span>{{ stepNumber }}</span>
    </div>

    <h1 v-if="title">
      {{ title }}
    </h1>

    <p v-if="description">
      {{ description }}
    </p>

    <picture>
      <slot name="image" class="image" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    stepNumber: {
      type: [Number, String],
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='Step'] {
  position: relative;
  padding: 73px 38px 34px;
  border-radius: 32px;
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
  background: linear-gradient(130deg, #2a3145 0%, #242834 50%);

  .step-number {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 76px;
    height: 76px;
    box-shadow: inset 0 0 5.2px 1.8px rgba(25, 133, 195, 0.74);
    background-color: #262b38;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    span {
      white-space: pre-line;
      background-image: linear-gradient(to right, #6dcaff, #c663ff),
        linear-gradient(to left, #bfbccd, #bfbccd);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-size: 31.5px;
    }
  }

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #99a7b8;
    margin-bottom: 13px;
  }

  p {
    text-align: center;
    font-size: 15px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.9px;
    color: #99a7b8;
    margin-bottom: 33px;
  }

  picture {
    display: flex;
    text-align: center;
    width: 143px;
    height: 143px;
    margin: 0 auto;
    box-shadow: inset 0 0 5.2px 1.8px rgba(25, 133, 195, 0.74);
    background-color: #2c2b3f;
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    .image {
      width: 50%;
    }
  }
}
</style>
