<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('治療終了者数')"
      :title-id="'number-of-treated-cases'"
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
    "治療終了者数": "治療終了者数",
    "人": "人"
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
