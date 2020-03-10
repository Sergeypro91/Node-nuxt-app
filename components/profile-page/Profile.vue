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
          <svg
            class="icon icon_white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              d="M6,8c0,1.178,0.822,2,2,2s2-0.822,2-2S9.178,6,8,6S6,6.822,6,8z"
            />
            <path
              d="M19 8L17 8 17 11 14 11 14 13 17 13 17 16 19 16 19 13 22 13 22 11 19 11zM4 8c0 2.28 1.72 4 4 4s4-1.72 4-4-1.72-4-4-4S4 5.72 4 8zM10 8c0 1.178-.822 2-2 2S6 9.178 6 8s.822-2 2-2S10 6.822 10 8zM4 18c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2V18z"
            />
          </svg>
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
