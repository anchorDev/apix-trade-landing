<template>
  <div v-click-outside="onClose" data-vue-component-name="PopupRegistration">
    <popup-shell>
      <h4>Регистрация</h4>

      <form action="#" @submit="onSubmit">
        <div>
          <base-input v-model="form.email" label="Ваш Емайл" />
        </div>

        <div>
          <base-input
            v-model="form.telegramChannel"
            label="Ваш телеграм канал"
          />
        </div>

        <div>
          <base-input
            v-model="form.personalTelegram"
            label="Ваш телеграм для связи"
          />
        </div>

        <div>
          <base-checkbox
            v-model="form.iWantDemoAccount"
            label="Хочу DEMO аккаунт"
          />
        </div>

        <div>
          <base-button
            type="gradient"
            :is-disabled="!isValidForm"
            @click="onSubmit"
          >
            Отправить
          </base-button>
        </div>
      </form>
    </popup-shell>
  </div>
</template>

<script>
import PopupShell from '@/components/hoc/popup-shell'
import BaseInput from '@/components/UI/BaseInput'
import BaseCheckbox from '@/components/UI/BaseCheckbox'
import BaseButton from '@/components/UI/BaseButton'
import { mapMutations } from 'vuex'

export default {
  name: 'PopupRegistration',
  components: {
    BaseButton,
    BaseInput,
    PopupShell,
    BaseCheckbox,
  },
  data() {
    return {
      form: {
        email: '',
        telegramChannel: '',
        personalTelegram: '',
        iWantDemoAccount: false,
      },
    }
  },
  computed: {
    isValidForm() {
      const { email, telegramChannel, personalTelegram } = this.form
      return !!(
        email.length &&
        telegramChannel.length &&
        personalTelegram.length
      )
    },
  },
  methods: {
    ...mapMutations('popup', ['setPopup']),
    onClose() {
      this.setPopup(null)
    },
    onSubmit() {
      console.log('### onSubmit', this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='PopupRegistration'] {
  color: #fff;
  width: 631px;

  h4 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
    line-height: 1;
    letter-spacing: 1.44px;
    color: #99a7b8;
  }

  form > div {
    margin-bottom: 33px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
