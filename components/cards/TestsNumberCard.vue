<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('PCR検査実施件数')"
      :title-id="'number-of-tests'"
      :chart-id="'time-bar-chart-tnumber-of-tests'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('件')"
    />
  </v-col>
</template>

<i18n>
{
  "ja": {
    "帰国者・接触者外来受診件数": "PCR検査実施件数",
    "件": "件"
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
