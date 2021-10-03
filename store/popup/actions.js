export default {
  fetchRegistration(_, formData) {
    return this.$axios.post('https://apix.trade/ajax/reg.php', formData)
  },
}
