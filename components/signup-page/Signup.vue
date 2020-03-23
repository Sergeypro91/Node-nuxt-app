<template>
  <div class="login-form">
    <form action="" class="login-form__wrapper">
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
        <input type="text" placeholder="User name" />
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
        <input type="text" placeholder="Password" />
      </div>

      <div class="btn btn_primary btn_full-width hover">
        <div class="btn__icon"></div>
        <button>Sign up</button>
      </div>
    </form>
  </div>
</template>
