<template>
  <div class="search-notes">
    <div class="search-notes__header"><div class="h1">Notes</div></div>
    <div class="search-notes__input">
      <div class="input hover">
        <div class="input__icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            />
          </svg>
        </div>
        <input type="text" placeholder="Find your note" />
      </div>
    </div>
    <div class="search-notes__filter">
      <svg
        class="icon icon_big icon_hover"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"
        />
        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
      </svg>

      <svg
        class="icon icon_big icon_hover"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z"
        />
        <path
          d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z"
        />
      </svg>
    </div>
  </div>
</template>
