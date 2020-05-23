<template>
  <div class="login-form">
    <form
      enctype="multipart/form-data"
      class="login-form__wrapper"
      @submit.prevent="onSignup"
    >
      <div class="login-form__head">
        <div class="h1 login-form__title">Sign up</div>
      </div>
      <div class="login-form__body">
        <div class="login-form__body-left">
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
              autocomplete="name"
            />
          </div>
          <div
            v-if="!$v.userInfo.userName.minLength"
            class="p_extra-small error"
          >
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
              autocomplete="email"
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
          <div
            v-if="!$v.userInfo.password.minLength"
            class="p_extra-small error"
          >
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
              autocomplete="off"
            />
          </div>
          <div
            v-if="!$v.userInfo.repeatPassword.sameAsPassword"
            class="p_extra-small error"
          >
            Passwords must be identical.
          </div>
        </div>

        <div class="login-form__body-rigt">
          <div
            class="input upload hover"
            :class="{ hover__upload: ondragover === 'dragover' }"
          >
            <label class="upload-label">
              <div v-if="images" class="upload-image-block">
                <div v-for="image in images" :key="image">
                  <img :src="image" class="upload-image" />
                </div>
              </div>

              <img
                v-if="!userInfo.userImage"
                src="~/static/img/users/empty-user.png/"
                class="upload-image"
              />

              <div class="input__icon">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.944,11.112C18.507,7.67,15.56,5,12,5C9.244,5,6.85,6.611,5.757,9.15C3.609,9.792,2,11.82,2,14c0,2.757,2.243,5,5,5h3h1	h2h1h4c2.206,0,4-1.794,4-4C22,13.12,20.695,11.538,18.944,11.112z M13,14v3h-2v-3H8l4-5l4,5H13z"
                  />
                </svg>
              </div>

              <div class="input__header">
                <div
                  v-if="
                    (!ondragover && !userInfo.userImage) ||
                      (!userInfo.userImage && ondragover === 'dragleave') ||
                      (!userInfo.userImage && ondragover === 'drop')
                  "
                  class="p"
                >
                  Press / Drag and drop image here.
                </div>
                <div v-if="ondragover === 'dragover'" class="p">Drop File!</div>
                <div
                  v-if="userInfo.userImage && ondragover != 'dragover'"
                  class="p"
                >
                  {{ userInfo.userImage.name }}
                </div>
              </div>
            </label>

            <input ref="image" type="file" @change="selectFile" />
          </div>
        </div>
      </div>

      <div class="login-form__footer">
        <div
          class="btn btn_primary btn_full-width hover"
          :class="{ disabled: this.$v.$invalid }"
        >
          <div class="btn__icon"></div>
          <button v-if="this.$v.$invalid" disabled="disabled" type="submit">
            Sign up
          </button>
          <button v-if="!this.$v.$invalid" type="submit">
            Sign up
          </button>
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
        repeatPassword: '',
        userImage: ''
      },
      ondragover: null,
      images: []
    }
  },

  mounted() {
    this.$refs.image.ondragover = (e) => {
      this.ondragover = e.type

      console.log(`Drag ON!`)
    }

    this.$refs.image.ondragleave = (e) => {
      this.ondragover = e.type

      console.log(`Drag OFF!`)
    }

    this.$refs.image.ondrop = (e) => {
      this.ondragover = e.type

      console.log(`Drop!`)
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
    selectFile() {
      this.images = []
      ;[this.userInfo.userImage] = this.$refs.image.files

      console.log(this.userInfo.userImage)

      this.createImage(this.$refs.image.files)
    },

    createImage(files) {
      const vm = this

      for (let index = 0; index < files.length; index += 1) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const imageUrl = event.target.result
          vm.images.push(imageUrl)
        }
        reader.readAsDataURL(files[index])
      }

      console.log(this.images)
    },

    async onSignup() {
      try {
        this.$v.$touch()

        if (this.$v.$invalid) {
          this.$store.dispatch('setSubmitStatus', 'ERROR')
        } else {
          const userFormData = {
            userName: this.userInfo.userName.toLowerCase(),
            email: this.userInfo.email.toLowerCase(),
            password: this.userInfo.password,
            image: this.userInfo.userImage
          }

          this.$store.dispatch('setSubmitStatus', 'PENDING')
          console.log(userFormData)

          await this.$store.dispatch('auth2/signup', userFormData)
          this.$store.dispatch('setSubmitStatus', 'OK')
          this.userInfo.userName = ''
          this.userInfo.email = ''
          this.userInfo.password = ''
          this.userInfo.repeatPassword = ''
          this.userInfo.userImage = ''
          this.$router.push('/')
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
