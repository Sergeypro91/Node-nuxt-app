<template>
  <div class="login-form">
    <form ref="form" class="login-form__wrapper" @submit.prevent="onLogin">
      <div class="login-form__head">
        <div class="h1 login-form__title">Login</div>

        <div class="login-form__addition">
          <n-link to="/signup" class="p_small login-form__sigin"
            >sign up</n-link
          >
          <n-link to="" class="p_small login-form__restore-password">
            forgot password?
          </n-link>
        </div>
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
          type="email"
          placeholder="User name"
          autocomplete="username"
        />
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
          autocomplete="current-password"
        />
      </div>

      <div
        class="btn btn_primary btn_full-width hover"
        :class="{ disabled: this.$v.$invalid }"
      >
        <div class="btn__icon"></div>
        <button v-if="this.$v.$invalid" disabled="disabled" type="submit">
          Login
        </button>
        <button v-if="!this.$v.$invalid" type="submit">Login</button>
      </div>

      <div class="p_small login-form__text">
        Login with <b>ONE</b> click from social. network:
      </div>
      <div class="login-form__social-login">
        <div class="btn btn_social-login btn_google hover">
          <div class="btn__icon">
            <svg
              class="icon icon_white icon_big"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.283 10.356H11.956V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.033 17.26 6.677 14.904 6.677 11.98C6.677 9.057 9.033 6.701 11.956 6.701C13.215 6.701 14.353 7.148 15.246 7.879L17.846 5.28C16.262 3.899 14.231 3.047 11.956 3.047C7.002 3.047 3.022 7.026 3.022 11.981C3.022 16.936 7.001 20.915 11.956 20.915C16.423 20.915 20.485 17.666 20.485 11.981C20.485 11.453 20.404 10.884 20.283 10.356Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="btn btn_social-login btn_facebook hover">
          <div class="btn__icon">
            <svg
              class="icon icon_white icon_big"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.397 20.997V12.801H16.162L16.573 9.59203H13.397V7.54803C13.397 6.62203 13.655 5.98803 14.984 5.98803H16.668V3.12703C15.849 3.03903 15.025 2.99703 14.201 3.00003C11.757 3.00003 10.079 4.49203 10.079 7.23103V9.58603H7.33197V12.795H10.085V20.997H13.397Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="btn btn_social-login btn_vk hover">
          <div class="btn__icon">
            <svg
              class="icon icon_white icon_big"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.579 6.85501C21.719 6.39001 21.579 6.04901 20.917 6.04901H18.724C18.166 6.04901 17.911 6.34401 17.771 6.66801C17.771 6.66801 16.656 9.38701 15.076 11.15C14.566 11.663 14.333 11.825 14.055 11.825C13.916 11.825 13.714 11.663 13.714 11.198V6.85501C13.714 6.29701 13.553 6.04901 13.088 6.04901H9.642C9.294 6.04901 9.084 6.30701 9.084 6.55301C9.084 7.08101 9.874 7.20301 9.955 8.69101V11.919C9.955 12.626 9.828 12.755 9.548 12.755C8.805 12.755 6.997 10.026 5.924 6.90201C5.715 6.29501 5.504 6.05001 4.944 6.05001H2.752C2.125 6.05001 2 6.34501 2 6.66901C2 7.25101 2.743 10.131 5.461 13.94C7.273 16.541 9.824 17.951 12.148 17.951C13.541 17.951 13.713 17.638 13.713 17.098V15.132C13.713 14.506 13.846 14.38 14.287 14.38C14.611 14.38 15.169 14.544 16.47 15.797C17.956 17.283 18.202 17.95 19.037 17.95H21.229C21.855 17.95 22.168 17.637 21.988 17.019C21.791 16.404 21.081 15.509 20.139 14.45C19.627 13.846 18.862 13.196 18.629 12.871C18.304 12.452 18.398 12.267 18.629 11.895C18.63 11.896 21.301 8.13401 21.579 6.85501Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      userInfo: {
        userName: '',
        password: ''
      }
    }
  },

  validations: {
    userInfo: {
      userName: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },

  methods: {
    async onLogin() {
      try {
        this.$v.$touch()

        if (this.$v.$invalid) {
          this.$store.dispatch('setSubmitStatus', 'ERROR')
        } else {
          const userFormData = {
            email: this.userInfo.userName.toLowerCase(),
            password: this.userInfo.password
          }

          this.$store.dispatch('setSubmitStatus', 'PENDING')

          await this.$store.dispatch('auth/login', userFormData)
          this.$store.dispatch('setSubmitStatus', 'OK')
          this.$router.push('/notes')
        }
      } catch (e) {
        this.$store.dispatch('setSubmitStatus', 'ERROR')
      }

      setTimeout(() => {
        this.$store.dispatch('setSubmitStatus', null)
      }, 3000)
    }
  }
}
</script>
