<template>
  <div v-click-outside="onClose" data-vue-component-name="PopupRegistration">
    <popup-shell>
      <h4>{{ $t('index.popup.title') }}</h4>

      <form action="#" @submit="onSubmit">
        <p
          v-if="message"
          :class="['form-message', message.type]"
          v-html="message.text"
        />
        <div>
          <base-input
            v-model="form.email"
            :label="$t('index.popup.labelOne')"
            :is-require="true"
          />
        </div>

        <div>
          <base-input
            v-model="form.telegramChannel"
            :label="$t('index.popup.labelTwo')"
            :is-require="true"
          />
        </div>

        <div>
          <base-input
            v-model="form.personalTelegram"
            :label="$t('index.popup.labelThree')"
            :is-require="true"
          />
        </div>

        <div>
          <base-checkbox
            v-model="form.agreeWithTheTermsOfUse"
            class="agreeWithTheTermsOfUse"
            :label="$t('index.popup.checkbox')"
            :is-require="true"
          />
        </div>

        <div>
          <base-button
            type="gradient"
            :is-disabled="!isValidForm"
            @click="onSubmit"
          >
            {{ $t('index.popup.send') }}
          </base-button>
        </div>

        <div class="require-description">
          <span class="require-char">*</span>
          {{ $t('index.popup.required') }}
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
import { mapMutations, mapActions } from 'vuex'

const defaultForm = {
  email: '',
  telegramChannel: '',
  personalTelegram: '',
  iWantDemoAccount: false,
  agreeWithTheTermsOfUse: true,
}

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
      isLoading: false,
      message: null,
      form: {},
    }
  },
  computed: {
    isValidForm() {
      if (this.isEmpty(this.form)) return false

      const {
        email,
        telegramChannel,
        personalTelegram,
        agreeWithTheTermsOfUse,
      } = this.form

      const tgRegex = /^[#@]?[A-Za-z0-9_]*$/gi

      const isTelegramChannelValidation =
        telegramChannel.match(tgRegex) && telegramChannel.match(tgRegex)[0]
          ? !!telegramChannel.match(tgRegex)[0].length
          : false
      const isPersonalTelegramValidation =
        personalTelegram.match(tgRegex) && personalTelegram.match(tgRegex)[0]
          ? !!personalTelegram.match(tgRegex)[0].length
          : false

      return (
        email.length &&
        this.isEmail(email) &&
        telegramChannel.length &&
        isTelegramChannelValidation &&
        personalTelegram.length &&
        isPersonalTelegramValidation &&
        agreeWithTheTermsOfUse &&
        !this.isLoading
      )
    },
  },
  watch: {
    form: {
      deep: true,
      handler() {
        if (this.message) {
          this.message = null
        }
      },
    },
  },
  mounted() {
    this.setDefaultForm()
  },
  methods: {
    ...mapMutations(['setPopup']),
    ...mapActions(['fetchRegistration']),
    onClose() {
      this.setPopup(null)
    },
    onSubmit() {
      this.isLoading = true
      this.message = {
        type: 'loading',
        text: 'Отправка запроса',
      }
      // todo: нуно api key добавить .env
      const telegramURL =
        'https://api.telegram.org/bot2055967352:AAHB3ziCQoHalL6CZZeaBac0IOSBt0AN6sY/sendMessage'
      const telegramData = `Время: ${this.formatDate()}\nE-mail: ${
        this.form.email
      }\nTelegram канал: ${this.form.telegramChannel}\nTelegram для связи: ${
        this.form.personalTelegram
      }`

      this.fetchRegistration({ telegramURL, telegramData })
        .then(this.onSuccessRegistration)
        .catch(this.onErrorRegistration)
        .then(() => (this.isLoading = false))
    },
    onSuccessRegistration() {
      this.setDefaultForm()
      this.message = {
        type: 'success',
        text:
          'Ваша заявка отправлена.<br>Скоро наш менеджер с вами свяжется в Telegram',
      }
    },
    onErrorRegistration() {
      this.message = {
        type: 'error',
        text:
          'Произошла ошибка отправки заявки на регистрацию.<br>Попробуйте еще раз',
      }
    },
    setDefaultForm() {
      this.form = { ...defaultForm }
    },
    isEmpty(obj) {
      for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false
        }
      }

      return JSON.stringify(obj) === JSON.stringify({})
    },
    isEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    formatDate() {
      const d = new Date()
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      const year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    },
  },
}
</script>

<style lang="scss" scoped>
[data-vue-component-name='PopupRegistration'] {
  color: #fff;
  max-width: 631px;
  width: calc(100% - 30px);

  h4 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
    line-height: 1;
    letter-spacing: 1.44px;
    color: #99a7b8;
  }

  form {
    p.form-message {
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 12px;

      &.success {
        color: #c5ffc7;
      }

      &.error {
        color: #ffccc5;
      }

      &.loading {
        color: #ffefc5;
      }
    }
  }

  form > div {
    margin-bottom: 33px;

    &:last-child {
      margin-bottom: 0;
    }

    ::v-deep .agreeWithTheTermsOfUse {
      span {
        font-size: 12px;
      }
    }
  }

  .require-description {
    color: #535353;
    font-size: 14px;
    font-weight: 600;

    span.require-char {
      color: red;
    }
  }
}
</style>
