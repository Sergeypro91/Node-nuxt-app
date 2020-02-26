<template>
  <div class="user-profile">
    <div class="user-profile__wrapper">
      <div class="user-profile__data">
        <div class="user-profile__header">
          <div class="user-profile__img">
            <img src="~static/img/users/user1.jpg" alt="" />
          </div>
          <div class="user-profile__descr">
            <div class="h2 user-profile__name">Sergeyprostoas</div>
            <div class="p_small user-profile__mail">
              sergeyprostoas@gmail.com
            </div>
          </div>
        </div>
        <div class="user-profile__body">
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
      <div class="user-profile__chart">
        <div class="doughnut">
          <chart-doughnut
            :chart-data="datadoughnut"
            :options="options"
          ></chart-doughnut>
        </div>
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

<script>
import ChartDoughnut from '~/components/profile-page/charts/ChartDoughnut.vue'

export default {
  components: {
    ChartDoughnut
  },

  data() {
    return {
      datadoughnut: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#000000e6',
              '#000000cc',
              '#000000b3',
              '#00000099',
              '#000000b3',
              '#000000cc'
            ],
            // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)'
            // ],
            hoverBackgroundColor: '#444ce0',
            borderWidth: 1
          }
        ]
      },

      options: {
        legend: {
          position: 'right',
          labels: {
            padding: 15
          }
        }
      }
    }
  }
}
</script>
