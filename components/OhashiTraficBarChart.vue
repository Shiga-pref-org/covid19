<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <data-selector-2 v-model="dataKind" :target-id="chartId" />
    </template>
    <line-chart
      :chart-id="chartId"
      :chart-data="displayData"
      :options="chartOption"
      :height="240"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>

    <ul>
      <li class="ohashi-note">
        {{ $t('2019年のグラフは同一期間の曜日を合わせて表示しています') }}
      </li>
      <li v-if="dataKind == 'average'" class="ohashi-note">
        {{ $t('値は過去7日間の通行台数の平均を表示しています') }}
      </li>
    </ul>
  </data-view>
</template>

<i18n src="./OhashiTraficBarChart.i18n.json"></i18n>

<style lang="scss">
.ohashi-note {
  list-style: none;
  &::before {
    content: '※';
  }
  font-size: 12px;
  color: rgb(128, 128, 128);
}
.OhashiGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
// import moment from 'moment'
import DataView from '@/components/DataView.vue'
import DataSelector2 from '@/components/DataSelector2.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataSelector2, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'metro-bar-chart'
    },
    chartData: {
      type: Object,
      required: false,
      default: () => {}
    },
    chartOption: {
      type: Object,
      required: false,
      default: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return { dataKind: 'transition' }
  },
  computed: {
    displayInfo() {
      if (this.dataKind !== 'transition' && this.dataKind !== 'average') {
        // invalid data case
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      } else {
        const { datasets } = this.chartData[this.dataKind]
        const lastData = datasets[datasets.length - 1]
        const [, month, dateDay] = lastData
          ? lastData.label.split(' vs. ')[1].split('/')
          : ['--', '--', '--']
        const date = dateDay.replace(/\(.\)/g, '')

        return {
          lText: lastData ? lastData.data[1].toLocaleString() : '-',
          sText: this.$t('{date} 前年の同時期との比較: {percent}%', {
            date: `${month}/${date}`,
            percent: lastData
              ? Math.round((100 * lastData.data[1]) / lastData.data[0])
              : '-'
          }),
          unit: this.$t('台')
        }
      }
    },

    displayData() {
      if (this.dataKind !== 'transition' && this.dataKind !== 'average') {
        return {
          labels: [],
          datasets: []
        }
      } else {
        const { datasets, labels } = this.chartData[this.dataKind]

        const determinColor = arg => {
          const {
            dataset: { label: year }
          } = arg
          const weekdayColors = ['#c0e2f0', '#30b9f0']
          return weekdayColors[labels.indexOf(year)]
        }

        return {
          labels: datasets.map(d => `${d.label}`),
          datasets: labels.map((label, i) => {
            return {
              label,
              data: datasets.map(d => d.data[i]),
              fill: false,
              borderColor: determinColor,
              backgroundColor: determinColor,
              borderWidth: 0
            }
          })
        }
      }
    }
  }
}
</script>
