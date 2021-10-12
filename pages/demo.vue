<template>
  <iframe
    class="iframe"
    width="100%"
    height="100%"
    src="/demo/APIX.trade.html"
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
}
</script>

<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 100vh;
  border: none;
  display: block;
}
</style>
