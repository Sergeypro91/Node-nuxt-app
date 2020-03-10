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
          <n-link to="/notes" class="header__menu-link">Notes</n-link>
        </li>
        <li class="header__menu-li">
          <n-link to="/profile" class="header__menu-link">Profile</n-link>
        </li>
        <li class="header__menu-li">
          <n-link to="/" exact class="header__menu-link">Logout</n-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
