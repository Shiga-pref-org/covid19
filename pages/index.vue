<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="lastUpdate"
    />
    <hero-link class="mb-4" />
    <whats-new v-if="newsItems" class="mb-4" :items="newsItems" />
    <v-row v-if="data" class="DataBlock">
      <confirmed-cases-number-card
        :data="data.patients_summary.data"
        :date="data.patients_summary.date"
      />
      <confirmed-cases-attributes-card
        :summary="data.patients_summary.data"
        :data="data.patients.data"
        :date="data.patients.date"
      />
      <consults-number-card
        :data="data.consults.data"
        :date="data.consults.date"
      />
      <tests-number-card :data="data.tests.data" :date="data.tests.date" />
      <querents-number-card
        :data="data.querents.data"
        :date="data.querents.date"
      />
      <general-querents-number-card
        :data="data.generalQuerents.data"
        :date="data.generalQuerents.date"
      />
      <ohashi-trafic-card :data="data.ohashi" :date="data.ohashi.date" />
      <line-invitation-card
        :value="data.lineFriends.value"
        :date="data.lineFriends.date"
      />
    </v-row>
  </div>
</template>

<i18n src="./index.i18n.json"></i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'

import HeroLink from '@/components/cards/HeroLink.vue'

import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConsultsNumberCard from '@/components/cards/ConsultsNumberCard'
import TestsNumberCard from '@/components/cards/TestsNumberCard'
import QuerentsNumberCard from '@/components/cards/QuerentsNumberCard'
import GeneralQuerentsNumberCard from '@/components/cards/GeneralQuerentsNumberCard'
import OhashiTraficCard from '@/components/cards/OhashiTraficCard'
import LineInvitationCard from '@/components/cards/LineInvitationCard'

export default {
  components: {
    PageHeader,
    HeroLink,
    WhatsNew,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConsultsNumberCard,
    TestsNumberCard,
    QuerentsNumberCard,
    GeneralQuerentsNumberCard,
    OhashiTraficCard,
    LineInvitationCard
  },
  data() {
    return {
      data: undefined,
      lastUpdate: '',
      newsItem: undefined,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向')
      }
    }
  },
  async mounted() {
    const [data, newsItems] = await Promise.all([
      fetch(
        'https://shiga-pref-org.github.io/covid19-data/data.json'
      ).then(res => res.json()),
      fetch('https://shiga-pref-org.github.io/covid19-data/news.json')
        .then(res => res.json())
        .then(json => json.newsItems)
    ])
    this.data = data
    this.lastUpdate = data.lastUpdate
    this.newsItems = newsItems
  },
  head() {
    return {
      title: this.$t('県内の最新感染動向')
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
