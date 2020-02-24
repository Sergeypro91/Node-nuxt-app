<template>
  <div class="login-page">
    <div class="login-form">
      <form action="" class="login-form__wrapper">
        <div class="login-form__head">
          <div class="h1 login-form__title">Login</div>

          <div class="login-form__addition">
            <a href="#" class="p_small login-form__sigin">sign up</a>
            <a href="#" class="p_small login-form__restore-password">
              forgot password?
            </a>
          </div>
        </div>

        <div class="input hover">
          <div class="input__icon">
            <img src="~static/img/icon/user-icon.svg" alt="" />
          </div>
          <input type="text" placeholder="User name" />
        </div>

        <div class="input hover">
          <div class="input__icon">
            <img src="~static/img/icon/password-icon.svg" alt="" />
          </div>
          <input type="text" placeholder="Password" />
        </div>

        <div class="btn btn_primary btn_full-width hover">
          <div class="btn__icon">
            <img src="~static/img/icon/login-icon.svg" alt="" />
          </div>
          <button>Login</button>
        </div>

        <div class="p_small login-form__text">
          Login with <b>ONE</b> click from social. network:
        </div>
        <div class="login-form__social-login">
          <div class="btn btn_social-login btn_google hover">
            <div class="btn__icon">
              <img src="~static/img/icon/google-icon.svg" alt="" />
            </div>
          </div>
          <div class="btn btn_social-login btn_facebook hover">
            <div class="btn__icon">
              <img src="~static/img/icon/facebook-icon_white.svg" alt="" />
            </div>
          </div>
          <div class="btn btn_social-login btn_vk hover">
            <div class="btn__icon">
              <img src="~static/img/icon/vk-icon_white.svg" alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="slogan-block">
      <div class="h0 slogan-text">Notes app</div>
      <div class="h1 slogan-text">notes for you and your friends</div>
      <div class="h3 slogan-text">
        Quickly and conveniently create, edit and share your notes, and more...
        This application is a test project and was created to learn new
        technologies and upgrade existing skills.
      </div>
    </div>
  </div>
</template>
