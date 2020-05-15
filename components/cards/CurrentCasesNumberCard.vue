<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('現在患者数')"
      :title-id="'number-of-current-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('人')"
    >
      <dl>
        <dt>
          {{ $t('補足') }}
        </dt>
        <dd>
          {{
            $t(
              '現在患者数とは陽性患者数から治療終了者数（死亡者数を含む）を除いた人数です。死亡者数は滋賀県のホームページをご覧ください。'
            )
          }}
        </dd>
      </dl>
    </time-bar-chart>
  </v-col>
</template>

<i18n>
{
  "ja": {
    "現在患者数": "現在患者数",
    "人": "人",
    "補足": "補足",
    "現在患者数とは陽性患者数から治療終了者数（死亡者数を含む）を除いた人数です。死亡者数は滋賀県のホームページをご覧ください。": "現在患者数とは陽性患者数から治療終了者数（死亡者数を含む）を除いた人数です。死亡者数は滋賀県のホームページをご覧ください。"
  },
  "en": {
    "現在患者数": "Number of current cases",
    "人": "persons"
  },
  "zh-cn": {
    "現在患者数": "确诊人数",
    "人": "人"
  },
  "zh-tw": {
    "現在患者数": "確診人數",
    "人": "人"
  },
  "ko": {
    "現在患者数": "확진자 수",
    "人": "인"
  },
  "ja-basic": {
    "現在患者数": "びょうきの ひとの かず",
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
