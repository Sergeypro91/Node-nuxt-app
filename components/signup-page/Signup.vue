<template>
  <div class="login-form">
    <form class="login-form__wrapper" @submit.prevent="onSignup">
      <div class="login-form__head">
        <div class="h1 login-form__title">Sign up</div>
      </div>

      <div
        class="input hover"
        :class="{
          input_error: $v.userInfo.userName.$error,
          input_valid: $v.userInfo.userName.required
        }"
      >
        <div class="input__icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle fill="none" cx="12" cy="7" r="3" />
            <path
              d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"
            />
          </svg>
        </div>
        <input
          v-model.trim="$v.userInfo.userName.$model"
          type="text"
          placeholder="User name"
          autocomplete="off"
        />
      </div>
      <div v-if="!$v.userInfo.userName.minLength" class="p_extra-small error">
        Name must have at least
        {{ $v.userInfo.userName.$params.minLength.min }} letters.
      </div>

      <div
        class="input hover"
        :class="{
          input_error: $v.userInfo.email.$error,
          input_valid: $v.userInfo.email.required
        }"
      >
        <div class="input__icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle fill="none" cx="12" cy="7" r="3" />
            <path
              d="M21.555,8.168l-9-6c-0.336-0.224-0.773-0.224-1.109,0l-9,6C2.167,8.354,2,8.666,2,9v11c0,1.103,0.897,2,2,2h16 c1.103,0,2-0.897,2-2V9C22,8.666,21.833,8.354,21.555,8.168z M12,4.202L19.197,9L12,13.798L4.803,9L12,4.202z M4,20v-9.131 l7.445,4.963C11.613,15.944,11.807,16,12,16s0.387-0.056,0.555-0.168L20,10.869L19.997,20H4z"
            />
          </svg>
        </div>
        <input
          v-model.trim="$v.userInfo.email.$model"
          type="text"
          placeholder="User email"
          autocomplete="username"
        />
      </div>
      <div v-if="!$v.userInfo.email.email" class="p_extra-small error">
        It doesn't look like on email address
      </div>

      <div
        class="input hover"
        :class="{
          input_error: $v.userInfo.password.$error,
          input_valid: $v.userInfo.password.required
        }"
      >
        <div class="input__icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M7,17c2.414,0,4.435-1.721,4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102C11.435,8.721,9.414,7,7,7c-2.757,0-5,2.243-5,5 S4.243,17,7,17z M7,9c1.654,0,3,1.346,3,3s-1.346,3-3,3s-3-1.346-3-3S5.346,9,7,9z"
            />
          </svg>
        </div>
        <input
          v-model.trim="$v.userInfo.password.$model"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
        />
      </div>
      <div v-if="!$v.userInfo.password.minLength" class="p_extra-small error">
        Password must have at least
        {{ $v.userInfo.password.$params.minLength.min }} letters.
      </div>

      <div
        class="input hover"
        :class="{
          input_error: $v.userInfo.repeatPassword.$error,
          input_valid: $v.userInfo.repeatPassword.required
        }"
      >
        <div class="input__icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M7,17c2.414,0,4.435-1.721,4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102C11.435,8.721,9.414,7,7,7c-2.757,0-5,2.243-5,5 S4.243,17,7,17z M7,9c1.654,0,3,1.346,3,3s-1.346,3-3,3s-3-1.346-3-3S5.346,9,7,9z"
            />
          </svg>
        </div>
        <input
          v-model.trim="$v.userInfo.repeatPassword.$model"
          type="password"
          placeholder="Repeat password"
          autocomplete="new-password"
        />
      </div>
      <div
        v-if="!$v.userInfo.repeatPassword.sameAsPassword"
        class="p_extra-small error"
      >
        Passwords must be identical.
      </div>

      <div class="btn btn_primary btn_full-width hover">
        <div class="btn__icon"></div>
        <button type="submit">Sign up</button>
      </div>

      <div class="message">
        <div v-if="submitStatus === 'OK'" class="message-ok">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"
            />
          </svg>
          <div class="p">
            Thanks for your submission!
          </div>
        </div>
        <div v-if="submitStatus === 'ERROR'" class="message-error">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
            />
          </svg>
          <div class="p">
            Please fill the form correctly.
          </div>
        </div>
        <div v-if="submitStatus === 'PENDING'" class="message-pending">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"
            />
          </svg>
          <div class="p">
            Sending...
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      userInfo: {
        userName: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      submitStatus: null
    }
  },

  validations: {
    userInfo: {
      userName: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },

  methods: {
    onSignup() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          userName: this.userInfo.userName.toLowerCase(),
          email: this.userInfo.email.toLowerCase(),
          password: this.userInfo.password
        }

        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          console.log(user)
        }, 1000)
      }

      setTimeout(() => {
        this.submitStatus = null
      }, 2000)
    }
  }
}
</script>
