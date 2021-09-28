<template>
  <article class="faq-item" @click="toggleFaq">
    <div class="faq-item__head">
      <h5>{{ data.title }}</h5>
      <arrow />
    </div>
    <div ref="body" class="faq-item__body">
      <p class="small">{{ data.text }}</p>
    </div>
  </article>
</template>

<script>
import Arrow from '@/assets/svg/arrow.svg?inline'

export default {
  name: 'FaqItem',
  components: {
    Arrow,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleFaq() {
      const faqs = document.querySelectorAll('.faq-item__body')
      const clickedItem = this.$refs.body
      // eslint-disable-next-line no-unused-vars
      const { height } = clickedItem.style
      faqs.forEach((item) => {
        item.style.height = '0px'
      })
      const bodyHeight = height === '0px' ? clickedItem.scrollHeight : 0
      clickedItem.style.height = `${bodyHeight}px`
    },
  },
}
</script>

<style lang="scss" scoped>
.faq-item {
  width: 100%;
  padding: 30px 47px;
  background: linear-gradient(
    158deg,
    rgba(42, 46, 62, 1) 0%,
    rgba(40, 43, 55, 1) 50%,
    rgba(37, 40, 52, 1) 100%
  );
  box-shadow: 5.1px 6.1px 16.8px 4.2px rgba(21, 19, 29, 0.43);
  border-radius: $border-radius-card-lg;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 15px;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      transform: scaleY(-1);
      transition: 0.3s;
    }

    &--active {
      svg {
        transform: scale(1);
      }
    }
  }

  &__body {
    overflow: hidden;
    transition: height 0.3s ease;
    height: 0;

    p {
      padding: 15px 0 6px;
      white-space: pre-line;
      color: #6e7594;
    }
  }

  @include bp(767px) {
    padding: 20px 30px;

    &__head {
      svg {
        width: 18px;
        height: 12px;
      }
    }
  }
}
</style>
