<template>
  <iframe
    class="iframe"
    width="100%"
    height="100%"
    src="/demo_s/APIX.trade3.html"
  />
</template>

<script>
export default {
  name: 'DemoPays',
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
          window.location = window.location.origin
          break
        case 'home':
          this.$router.push('demo')
          break
        case 'settings':
          this.$router.push('demo-settings')
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
