<template>
  <section
    id="steps-of-work-with-system"
    class="steps-of-work-with-system wrapper"
  >
    <h2
      v-in-viewport.once
      class="fade-in"
      v-html="$t('index.stepsOfWorkWithSystem.title')"
    />

    <ul class="step-list">
      <step
        v-for="(step, idx) in steps"
        :key="idx"
        class="step"
        :step-number="step.stepNumber"
        :title="step.title"
        :description="step.description"
      >
        <template #image>
          <component :is="step.image" />
        </template>
      </step>
    </ul>
  </section>
</template>

<script>
// icons
import Hero3 from 'assets/svg/hero3.svg?inline'
import Cabinet2 from '@/assets/svg/cabinet2.svg?inline'

import Step from '~/components/UI/Step'

// icons

export default {
  name: 'StepsOfWorkWithSystem',
  components: {
    Step,
    Hero3,
    Cabinet2,
  },
  data() {
    return {
      steps: [
        {
          stepNumber: 1,
          title: this.$t('index.stepsOfWorkWithSystem.steps[0].title'),
          description: this.$t(
            'index.stepsOfWorkWithSystem.steps[0].description'
          ),
          image: Hero3,
        },
        {
          stepNumber: 2,
          title: this.$t('index.stepsOfWorkWithSystem.steps[1].title'),
          description: this.$t(
            'index.stepsOfWorkWithSystem.steps[1].description'
          ),
          image: Hero3,
        },
        {
          stepNumber: 3,
          title: this.$t('index.stepsOfWorkWithSystem.steps[2].title'),
          description: this.$t(
            'index.stepsOfWorkWithSystem.steps[2].description'
          ),
          image: Cabinet2,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.steps-of-work-with-system {
  margin: 0 auto 136px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0 auto 108px;
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

  .step-list {
    display: flex;
    justify-content: space-between;

    @include bp(1200px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    .step {
      margin-right: 16px;

      @include bp(1200px) {
        flex: 0 0 40%;
        margin-right: 24px;
        margin-bottom: 60px;
      }

      @include bp(767px) {
        flex: 0 0 90%;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
