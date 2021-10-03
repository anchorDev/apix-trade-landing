<template>
  <div
    v-if="hasOpenPopup"
    data-vue-component-name="PopupWorker"
    :class="{
      'blur-background': hasOpenPopup,
    }"
  >
    <component :is="popup" class="popup" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PopupRegistration from '@/components/popup/popup-registration.vue'

export default {
  name: 'PopupWorker',
  components: {
    PopupRegistration,
  },
  computed: {
    ...mapState('popup', ['popup']),
    ...mapGetters('popup', ['hasOpenPopup']),
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='PopupWorker'] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;

  &.blur-background {
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.3);
  }

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    z-index: 501;
  }
}
</style>
