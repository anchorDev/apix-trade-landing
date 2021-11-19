<template>
  <iframe
    class="iframe"
    width="100%"
    height="100%"
    src="/demo_s/APIX.trade2.html"
  />
</template>

<script>
export default {
  name: 'Demo',
  layout: 'empty',
  head() {
    return {
      bodyAttrs: {
        class: 'iframe',
      },
    }
  },
  mounted() {
    window.addEventListener('message', this.handleMessage, false)
  },
  methods: {
    handleMessage(event) {
      switch (event.data) {
        case 'redirect':
          window.location = `${window.location.origin}?registration=true`
          break
        case 'pays':
          this.$router.push({ name: `demo-pays___${this.$i18n.locale}` })
          break
        case 'settings':
          this.$router.push({ name: `demo-settings___${this.$i18n.locale}` })
          break
      }
    },
  },
}
</script>

<style lang="scss">
.iframe {
  width: 100%;
  height: 100vh;
  border: none;
  display: block;
}
</style>
