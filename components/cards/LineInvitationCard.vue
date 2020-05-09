<template>
  <v-col cols="12" md="6" class="DataCard">
    <simple-number-card
      :title="
        $t(
          'LINE公式アカウント「滋賀県-新型コロナ対策パーソナルサポート」友だち数'
        )
      "
      :title-id="'line-invitation'"
      :number="number"
      :unit="$t('人')"
      :date="date"
    >
      <p>
        {{
          $t(
            'LINEを通じてあなたの状態に合わせた新型コロナウイルスに関する情報をお知らせしています。'
          )
        }}
        <a href="https://www.pref.shiga.lg.jp/ippan/kurashi/ict/310749.html">{{
          $t('詳しくはこちら')
        }}</a>
      </p>
      <p :style="{ textAlign: 'center' }">
        <a href="https://lin.ee/9YlwvHu">
          <img
            :style="{ border: '0', height: '36px' }"
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            :alt="$t('LINEの友だち追加')"
          />
        </a>
      </p>
    </simple-number-card>
  </v-col>
</template>

<i18n>
{
  "ja": {
    "LINE公式アカウント「滋賀県-新型コロナ対策パーソナルサポート」友だち数": "LINE公式アカウント「滋賀県-新型コロナ対策パーソナルサポート」友だち数",
    "LINEを通じてあなたの状態に合わせた新型コロナウイルスに関する情報をお知らせしています。": "LINEを通じてあなたの状態に合わせた新型コロナウイルスに関する情報をお知らせしています。",
    "詳しくはこちら": "詳しくはこちら",
    "LINEの友だち追加": "LINEの友だち追加"
  }
}
</i18n>

<style lang="scss" scoped></style>

<script>
import SimpleNumberCard from '@/components/SimpleNumberCard.vue'

export default {
  components: {
    SimpleNumberCard
  },
  props: {
    value: { type: String, default: '' },
    date: { type: String, default: '' }
  },
  data() {
    const number = parseInt(this.value, 10)
    const data = {
      number: Number.isNaN(number) ? 0 : number
    }
    return data
  }
}
</script>
