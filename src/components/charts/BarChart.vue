<script>
import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
      datasets: [
        {
          label: 'Data One',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          backgroundColor: "#2ea7d9",// цвет линии
          pointBackgroundColor: '#77b7cd',
          // по умолчанию точки прозрачные, что не всегда красиво
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      /* график действительно адаптируется под мобильные экраны, но для более точной
      настройки приходится уточнить количество и точность подписей на осях */
      maintainAspectRatio: false,
      legend: {
        display: false // отключает легенду, бесполезную когда на графике одна линия
      },
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            precision: 2, // точность округления значений по оси y
            maxTicksLimit: 4 // максимальное количество значений (и рёбер сетки) по оси y
          }
        }],
        xAxes: [{
          display: true,
          ticks: {
            maxTicksLimit: 5 // максимальное количество значений (и рёбер сетки) по оси x
          }
        }]
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}

</script>

<style scoped>

</style>