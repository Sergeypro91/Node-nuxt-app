<template>
  <div class="user-charts">
    <div class="doughnut">
      <chart-doughnut :chart-data="datadoughnut"></chart-doughnut>
    </div>

    <div class="line">
      <chart-line :chart-data="dataline"></chart-line>
    </div>
  </div>
</template>

<script>
import ChartDoughnut from './ChartDoughnut.vue'
import ChartLine from './ChartLine.vue'

export default {
  components: {
    ChartDoughnut,
    ChartLine
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

      dataline: {
        labels: ['First', 'Second'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [15, 20]
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [35, 47]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.doughnut {
  width: 100%;
  max-width: 500px;
}
</style>
