export const state = () => ({
  popup: null,
})

export const mutations = {
  setPopup(state, popup) {
    state.popup = popup
  },
}

export const actions = {
  fetchRegistration(_, formData) {
    return this.$axios.post('https://apix.trade/ajax/reg.php', formData)
  },
}

export const getters = {
  hasOpenPopup({ popup }) {
    return popup
  },
}
