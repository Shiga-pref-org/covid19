<template>
  <v-col cols="12" md="6" class="DataCard">
    <ohashi-trafic-bar-chart
      :title="$t('琵琶湖大橋有料道路通行台数 対前年 同曜日比較')"
      :title-id="'ohashi-trafic'"
      :chart-id="'ohashi-trafic-bar-chart'"
      :chart-data="ohashiGraph"
      :chart-option="ohashiGraphOption"
      :date="date"
    />
  </v-col>
</template>

<i18n src="./OhashiTrafic.i18n.json"></i18n>

<script>
import OhashiTraficBarChart from '@/components/OhashiTraficBarChart.vue'

export default {
  components: {
    OhashiTraficBarChart
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        transition: { datasets: [] },
        average: { datasets: [] }
      })
    },
    date: {
      type: String,
      default: ''
    }
  },
  data() {
    // ohashiGraph ツールチップ title文字列
    // this.$t を使うため ohashiGraphOption の外側へ
    const ohashiGraphTooltipTitle = (tooltipItems, _) => {
      const [label2019, label2020] = tooltipItems[0].label.split(' vs. ')
      const label = tooltipItems[0].datasetIndex === 0 ? label2019 : label2020

      return this.$t('日付: {duration}', {
        duration: this.$t(label)
      })
    }
    // ohashiGraph ツールチップ label文字列
    // this.$t を使うため ohashiGraphOption の外側へ
    const ohashiGraphTooltipLabel = (tooltipItem, data) => {
      const currentData = data.datasets[tooltipItem.datasetIndex]
      return this.$t('通行台数: {trafic}台', {
        trafic: currentData.data[tooltipItem.index].toLocaleString()
      })
    }

    const data = {
      ohashiGraph: this.data,
      ohashiGraphOption: {
        responsive: true,
        legend: {
          display: true,
          onHover: e => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: e => {
            e.currentTarget.style.cursor = 'default'
          },
          labels: {
            boxWidth: 20,
            useLineStyle: true
          }
        },
        scales: {
          xAxes: [
            {
              stacked: false,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                minRotation: 0,
                callback: label => {
                  return label
                    .split(' vs. ')[1]
                    .split('/')[2]
                    .replace(/\(.\)/, '')
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
                gridLines: {
                  display: true
                },
                callback: label => {
                  const monthStringArry = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]
                  const month = monthStringArry.indexOf(label.split(' ')[0]) + 1
                  return month + '月'
                }
              },
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                suggestedMin: 0,
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  return value.toFixed(0)
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: ohashiGraphTooltipTitle,
            label: ohashiGraphTooltipLabel
          }
        }
      }
    }
    return data
  }
}
</script>
