export const state = () => ({
  popup: null,
})

export const mutations = {
  setPopup(state, popup) {
    state.popup = popup
  },
}

export const actions = {
  fetchRegistration(_, { telegramURL, telegramData }) {
    // todo: нуно chat_id добавить .env
    return this.$axios.post(
      telegramURL,
      JSON.stringify({
        chat_id: 1054589846,
        text: telegramData,
        disable_notification: false,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  },
}

export const getters = {
  hasOpenPopup({ popup }) {
    return popup
  },
}
