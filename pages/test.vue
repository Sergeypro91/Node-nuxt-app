<template>
  <div class="container">
    <div class="h0">This is test</div>

    <div class="h1">This is test</div>

    <div class="h2">This is test</div>

    <div class="p">This is test</div>

    <div class="p_small">This is test</div>

    <div class="p_extra-small">This is test</div>

    <form action="" style="width: 300px">
      <div class="input hover">
        <div class="input__icon">
          <img src="~static/img/icon/user-icon.svg" alt="" />
        </div>
        <input type="text" placeholder="This is test" />
      </div>
      <div class="input imput_without-icon input_darck hover">
        <input type="text" placeholder="This is test" />
      </div>
      <div class="input imput_without-icon input_darck hover">
        <textarea placeholder="This is test" />
      </div>
    </form>

    <div class="btn btn_primary hover">
      <div class="btn__icon">
        <img src="~/static/img/icon/plus-icon.svg" alt="" />
      </div>
      <button>Login</button>
    </div>
  </div>
</template>
