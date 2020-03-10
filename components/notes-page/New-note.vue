<template>
  <div class="new-note">
    <div class="new-note__header">
      <div class="new-note__title">
        <div class="input imput_without-icon hover">
          <input type="text" placeholder="Enter notes title ..." />
        </div>
      </div>
      <div class="new-note__type">
        <div class="new-note__type-child">
          <label>
            <input id="radio-button-child" type="radio" name="radioType" />
            <span>Standart</span>
          </label>
        </div>
        <div class="new-note__type-child">
          <label>
            <input id="radio-button-child" type="radio" name="radioType" />
            <span>Priority</span>
          </label>
        </div>
        <div class="new-note__type-child">
          <label>
            <input id="radio-button-child" type="radio" name="radioType" />
            <span>important</span>
          </label>
        </div>
      </div>
    </div>
    <div class="new-note__footer">
      <div class="new-note__description">
        <div class="input imput_without-icon hover">
          <textarea placeholder="This is test" />
        </div>
      </div>
      <div class="btn btn_primary hover">
        <div class="btn__icon">
          <img src="~/static/img/icon/plus-icon.svg" alt="" />
        </div>
        <button>new note</button>
      </div>
    </div>
  </div>
</template>
