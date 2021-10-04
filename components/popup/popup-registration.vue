<template>
  <div v-click-outside="onClose" data-vue-component-name="PopupRegistration">
    <popup-shell>
      <h4>Регистрация</h4>

      <form action="#" @submit="onSubmit">
        <p
          v-if="message"
          :class="['form-message', message.type]"
          v-html="message.text"
        />
        <div>
          <base-input
            v-model="form.email"
            label="Ваш E-mail"
            :is-require="true"
          />
        </div>

        <div>
          <base-input
            v-model="form.telegramChannel"
            label="Ваш Telegram канал"
            :is-require="true"
          />
        </div>

        <div>
          <base-input
            v-model="form.personalTelegram"
            label="Ваш Telegram для связи"
            :is-require="true"
          />
        </div>

        <div>
          <base-checkbox
            v-model="form.agreeWithTheTermsOfUse"
            class="agreeWithTheTermsOfUse"
            label="Ознакомился и согласен с условиями пользования и политикой конфиденциальности"
            :is-require="true"
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

        <div class="require-description">
          <span class="require-char">*</span>
          - обязательные поля для заполнения
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

import isEmail from 'is-email'

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
      if (this._.isEmpty(this.form)) return false

      const {
        email,
        telegramChannel,
        personalTelegram,
        agreeWithTheTermsOfUse,
      } = this.form

      const tgRegex = /\s/g

      return !!(
        email.length &&
        isEmail(email) &&
        telegramChannel.length &&
        !tgRegex.test(telegramChannel) &&
        personalTelegram.length &&
        !tgRegex.test(personalTelegram) &&
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
    ...mapMutations('popup', ['setPopup']),
    ...mapActions('popup', ['fetchRegistration']),
    onClose() {
      this.setPopup(null)
    },
    onSubmit() {
      this.isLoading = true
      this.message = {
        type: 'loading',
        text: 'Отправка запроса',
      }

      this.fetchRegistration(this.form)
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
      this.form = this._.cloneDeep(defaultForm)
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
