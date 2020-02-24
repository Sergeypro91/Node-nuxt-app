<template>
  <div class="user-charts">
    <canvas ref="canvas"> </canvas>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,

  mounted() {
    this.setup()
  },

  methods: {
    setup() {
      this.renderChart({
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
      })
    }
  }
}
</script>
