<template>
  <div v-click-outside="onClose" data-vue-component-name="PopupRegistration">
    <popup-shell>
      <h4>Регистрация</h4>

      <form action="#" @submit="onSubmit">
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
import { mapMutations } from 'vuex'

import isEmail from 'is-email'

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
        agreeWithTheTermsOfUse: true,
      },
    }
  },
  computed: {
    isValidForm() {
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
        agreeWithTheTermsOfUse
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
