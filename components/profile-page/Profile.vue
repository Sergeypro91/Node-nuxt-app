<template>
  <div class="user-profile">
    <div class="user-profile__wrapper">
      <div class="user-profile__header">
        <div class="user-profile__img">
          <img src="~static/img/users/user1.jpg" alt="" />
        </div>
        <div class="user-profile__descr">
          <div class="h2 user-profile__name">Sergeyprostoas</div>
          <div class="p_small user-profile__mail">sergeyprostoas@gmail.com</div>
        </div>
      </div>
      <div class="user-profile__body">
        <!-- <div class="user-profile__reg-date">14.02.2020</div>
        <div class="user-profile__notes-count">143</div>
        <div class="user-profile__contacts">89538101379</div> -->

        <table>
          <tbody>
            <tr>
              <th class="p">Registration date:</th>
              <th class="p">14.02.2020</th>
            </tr>

            <tr>
              <th class="p">Notes count:</th>
              <th class="p">143</th>
            </tr>

            <tr>
              <th class="p">Contact:</th>
              <th class="p">89538101379</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="user-profile__friends">
      <div class="user-profile__search">
        <div class="h2 user-profile__search-title">Friends:</div>
        <div class="input hover user-profile__search-input">
          <div class="input__icon">
            <img src="~static/img/icon/search-icon.svg" alt="" />
          </div>
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
      <div class="user-profile__list">
        <div class="user-profile__empty"></div>
        <div class="user-profile__not-empty">
          <table>
            <tbody>
              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>

              <tr>
                <th>
                  <img
                    src="~static/img/users/user2.jpg"
                    alt=""
                    class="user-profile__friend-img"
                  />
                </th>
                <th class="p">Daria_Starykh</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="user-profile__add-friends">
      <div class="btn btn_primary hover">
        <div class="btn__icon">
          <img src="~static/img/icon/friends-plus.svg" alt="" />
        </div>
        <button>Add</button>
      </div>
    </div>
  </div>
</template>
