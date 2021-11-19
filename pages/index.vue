<template>
  <main class="container">
    <hero-main />
    <advantages-main />
    <stats />
    <functionality />
    <request-demo />
    <cabinet />
    <calculator />
    <about-product />
    <registration-offer />
    <steps-of-work-with-system />
    <faq />
    <start-to-earn />
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    if (this.$route.query.registration) {
      this.setPopup('PopupRegistration')
    }
  },
  methods: {
    ...mapMutations(['setPopup']),
  },
}
</script>

<style lang="scss"></style>
