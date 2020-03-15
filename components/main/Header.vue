<template>
  <div class="header__wrapper">
    <div class="header__logo">
      <n-link to="/">
        <div class="header__logo-text header__logo-text_white">Note</div>
        <div class="header__logo-text header__logo-text_black">s</div>
        <div class="header__logo-bg"></div>
      </n-link>
    </div>
    <nav class="header__menu">
      <ul class="header__menu-ul">
        <li class="header__menu-li">
          <n-link to="/notes" class="header__menu-link">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h8c0.131,0,0.26-0.026,0.381-0.076s0.232-0.123,0.326-0.217l7-7 c0.086-0.086,0.147-0.187,0.196-0.293c0.014-0.03,0.022-0.061,0.033-0.093c0.028-0.084,0.046-0.17,0.051-0.259 C20.989,13.041,21,13.021,21,13V5C21,3.897,20.103,3,19,3z M5,5h14v7h-6c-0.553,0-1,0.448-1,1v6H5V5z M14,17.586V14h3.586 L14,17.586z"
              />
            </svg>
            Notes
          </n-link>
        </li>
        <li class="header__menu-li">
          <n-link to="/profile" class="header__menu-link">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 11H22V13H15zM16 15H22V17H16zM14 7H22V9H14zM4 19h8 1 1v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h1H4zM8 12c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"
              />
            </svg>
            Profile
          </n-link>
        </li>
        <li class="header__menu-li">
          <n-link to="/" exact class="header__menu-link">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16 13L16 11 7 11 7 8 2 12 7 16 7 13z" />
              <path
                d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"
              />
            </svg>
            Logout
          </n-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
