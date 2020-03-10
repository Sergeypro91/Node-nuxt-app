<script>
import { Doughnut, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  // eslint-disable-next-line
  props: ['options'],

  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
