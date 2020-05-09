<template>
  <div v-if="data">
    <confirmed-cases-number-card
      v-if="this.$route.params.card == 'number-of-confirmed-cases'"
      :data="data.patients_summary.data"
      :date="data.patients_summary.date"
    />
    <confirmed-cases-attributes-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
      :summary="data.patients_summary.data"
      :data="data.patients.data"
      :date="data.patients.date"
    />
    <consults-number-card
      v-else-if="this.$route.params.card == 'number-of-consultation'"
      :data="data.consults.data"
      :date="data.consults.date"
    />
    <tests-number-card
      v-else-if="this.$route.params.card == 'number-of-tests'"
      :data="data.tests.data"
      :date="data.tests.date"
    />
    <querents-number-card
      v-else-if="this.$route.params.card == 'number-of-querents'"
      :data="data.querents.data"
      :date="data.querents.date"
    />
    <general-querents-number-card
      v-else-if="this.$route.params.card == 'number-of-general-querents'"
      :data="data.generalQuerents.data"
      :date="data.generalQuerents.date"
    />
    <ohashi-trafic-card
      v-else-if="this.$route.params.card == 'ohashi-trafic'"
      :data="data.ohashi"
      :date="data.ohashi.date"
    />
    <line-invitation-card
      v-else-if="this.$route.params.card == 'line-invitation'"
      :value="data.lineFriends.value"
      :date="data.lineFriends.date"
    />
    <!-- <tested-number-card
      v-else-if="this.$route.params.card == 'number-of-tested'"
    /> -->
    <!-- <confirmed-cases-details-card
      v-else-if="this.$route.params.card == 'details-of-confirmed-cases'"
    /> -->
    <!-- <telephone-advisory-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-telephone-advisory-center'
      "
    /> -->
    <!-- <consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-consultation-desk'
      "
    /> -->
  </div>
</template>

<i18n>
{
  "ja": {
    "検査陽性者の状況": "検査陽性者の状況",
    "陽性患者数": "陽性患者数",
    "陽性患者の属性": "陽性患者の属性",
    "検査実施数": "検査実施数",
    "新型コロナコールセンター相談件数": "新型コロナコールセンター相談件数",
    "新型コロナ受診相談窓口相談件数": "新型コロナ受診相談窓口相談件数",
    "都営地下鉄の利用者数の推移": "都営地下鉄の利用者数の推移",
    "都庁来庁者数の推移": "都庁来庁者数の推移"
  },
  "en": {
    "検査陽性者の状況": "Details of confirmed cases",
    "陽性患者数": "Number of confirmed cases",
    "陽性患者の属性": "Confirmed patient attributes",
    "検査実施数": "Number of tests conducted",
    "新型コロナコールセンター相談件数": "Number of inquiries to COVID-19 telephone advisory center",
    "新型コロナ受診相談窓口相談件数": "Number of inquiries to combined telephone advisory center",
    "都営地下鉄の利用者数の推移": "The predicted number of Toei subway passengers",
    "都庁来庁者数の推移": "Trend in the number of TMG visitors"
  },
  "zh-cn": {
    "検査陽性者の状況": "确诊案例状况",
    "陽性患者数": "确诊人数",
    "陽性患者の属性": "确诊患者的信息",
    "検査実施数": "送检件数",
    "新型コロナコールセンター相談件数": "新型冠状病毒咨询中心咨询件数",
    "新型コロナ受診相談窓口相談件数": "新冠肺炎就诊咨询窗口的咨询数",
    "都営地下鉄の利用者数の推移": "都营地下铁搭乘人数趋势",
    "都庁来庁者数の推移": "东京都厅来访人数推移"
  },
  "zh-tw": {
    "検査陽性者の状況": "確診案例狀況",
    "陽性患者数": "確診人數",
    "陽性患者の属性": "確診案例概況",
    "検査実施数": "送檢件數",
    "新型コロナコールセンター相談件数": "新型冠狀病毒諮詢中心諮詢件數",
    "新型コロナ受診相談窓口相談件数": "就診窗口諮詢數",
    "都営地下鉄の利用者数の推移": "都營地下鐵搭乘人數走勢",
    "都庁来庁者数の推移": "東京都廳來訪人數走勢"
  },
  "ko": {
    "検査陽性者の状況": "확진자의 현황",
    "陽性患者数": "확진자 수",
    "陽性患者の属性": "확진 사례의 세부 사항",
    "検査実施数": "검사실시수",
    "新型コロナコールセンター相談件数": "코로나 19 콜센터 문의 건수",
    "新型コロナ受診相談窓口相談件数": "코로나19 진찰 상담 창구 상담 건수",
    "都営地下鉄の利用者数の推移": "도에이 지하철 의 예상 승객 수",
    "都庁来庁者数の推移": "도쿄도 청사 방문자 수"
  },
  "ja-basic": {
    "検査陽性者の状況": "びょうきの ひとは いま",
    "陽性患者数": "びょうきの ひとの かず",
    "陽性患者の属性": "びょうきの ひとの じょうほう",
    "検査実施数": "けんさした かず",
    "新型コロナコールセンター相談件数": "コロナウイルス そうだんで でんわが あった かず",
    "新型コロナ受診相談窓口相談件数": "コロナのことで とうきょうと に そうだんした ひとの かず",
    "都営地下鉄の利用者数の推移": "とえいちかてつを つかった ひとの かず",
    "都庁来庁者数の推移": "都庁（とちょう）に 来（き）た 人（ひと）の 合計（ごうけい）"
  }
}
</i18n>

<script>
import GeneralQuerentsNumberCard from '@/components/cards/GeneralQuerentsNumberCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConsultsNumberCard from '@/components/cards/ConsultsNumberCard.vue'
import TestsNumberCard from '@/components/cards/TestsNumberCard.vue'
import QuerentsNumberCard from '@/components/cards/QuerentsNumberCard.vue'
import OhashiTraficCard from '@/components/cards/OhashiTraficCard.vue'
import LineInvitationCard from '@/components/cards/LineInvitationCard.vue'

// import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
// import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'

export default {
  components: {
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConsultsNumberCard,
    TestsNumberCard,
    QuerentsNumberCard,
    GeneralQuerentsNumberCard,
    OhashiTraficCard,
    LineInvitationCard

    // ConfirmedCasesDetailsCard,
    // TestedNumberCard,
    // TelephoneAdvisoryReportsNumberCard,
    // ConsultationDeskReportsNumberCard
  },
  data() {
    let title
    switch (this.$route.params.card) {
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        break
      case 'number-of-consultation':
        title = this.$t('帰国者・接触者専門外来受診件数')
        break
      case 'number-of-tests':
        title = this.$t('PCR検査実施件数')
        break
      case 'number-of-querents':
        title = this.$t('帰国者・接触者相談センター相談件数')
        break
      case 'number-of-general-querents':
        title = this.$t('新型コロナウイルスに関する一般相談件数')
        break
      case 'ohashi-trafic':
        title = this.$t('琵琶湖大橋通行台数')
        break
      case 'line-invitation':
        title = this.$t(
          'LINE公式アカウント「滋賀県-新型コロナ対策パーソナルサポート」友だち数'
        )
        break

      // case 'details-of-confirmed-cases':
      //   title = this.$t('検査陽性者の状況')
      //   updatedAt = Data.inspections_summary.date
      //   break
      // case 'number-of-tested':
      //   title = this.$t('検査実施数')
      //   updatedAt = Data.inspections_summary.date
      //   break
      // case 'number-of-reports-to-covid19-telephone-advisory-center':
      //   title = this.$t('新型コロナコールセンター相談件数')
      //   updatedAt = Data.contacts.date
      //   break
      // case 'number-of-reports-to-covid19-consultation-desk':
      //   title = this.$t('新型コロナ受診相談窓口相談件数')
      //   updatedAt = Data.querents.date
      //   break
    }

    return { title, lastUpdate: '', data: undefined }
  },
  async mounted() {
    const data = await fetch(
      'https://shiga-pref-org.github.io/covid19-data/data.json'
    ).then(res => res.json())
    this.data = data
    this.lastUpdate = data.lastUpdate
  },
  head() {
    const url = 'https://stopcovid19.pref.shiga.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      url +
      '/ogp/' +
      this.$i18n.locale +
      '/' +
      this.$route.params.card +
      '.png?t=' +
      timestamp
    const description = this.$t(
      '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、滋賀県が開設したものです。'
    )

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('滋賀県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            this.$t('対策サイト')
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
