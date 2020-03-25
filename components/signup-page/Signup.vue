<template>
  <div class="login-form">
    <form class="login-form__wrapper" @submit.prevent="onSignup(userInfo)">
      <div class="login-form__head">
        <div class="h1 login-form__title">Sign up</div>
      </div>

      <div class="input hover">
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
          v-model="userInfo.username"
          type="text"
          placeholder="User name"
        />
      </div>

      <div class="input hover">
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
        <input v-model="userInfo.email" type="text" placeholder="User email" />
      </div>

      <div class="input hover">
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
          v-model="userInfo.password"
          type="password"
          placeholder="Password"
        />
      </div>

      <div class="btn btn_primary btn_full-width hover">
        <div class="btn__icon"></div>
        <button>Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    onSignup: {
      type: Function,
      default: null
    }
  },

  data() {
    return {
      userInfo: {
        username: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>
