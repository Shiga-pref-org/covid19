<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('人')"
    />
  </v-col>
</template>

<i18n>
{
  "ja": {
    "陽性患者数": "陽性患者数",
    "人": "人"
  },
  "en": {
    "陽性患者数": "Number of confirmed cases",
    "人": "persons"
  },
  "zh-cn": {
    "陽性患者数": "确诊人数",
    "人": "人"
  },
  "zh-tw": {
    "陽性患者数": "確診人數",
    "人": "人"
  },
  "ko": {
    "陽性患者数": "확진자 수",
    "人": "인"
  },
  "ja-basic": {
    "陽性患者数": "びょうきの ひとの かず",
    "人": "にん"
  }
}
</i18n>

<script>
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  props: {
    date: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    chartData() {
      return formatGraph(this.data)
    }
  }
}
</script>
