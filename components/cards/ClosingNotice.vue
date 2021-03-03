<template>
  <div class="ClosingNotice">
    <h3>閉鎖のお知らせ</h3>
    <p>当サイトは2021年3月末をもって閉鎖いたします。</p>
    <p>
      当初は新型コロナ感染症に関して見やすくまとまった情報が少なく、有志の協力を得て当サイトは立ち上げられました。
      しかし、現在、<a
        href="https://www.pref.shiga.lg.jp/ippan/kenkouiryouhukushi/yakuzi/309252.html"
        >滋賀県の公式サイト</a
      >で見やすくまとまった情報が提供されるようになってきました。
      そのため、本サイトは一定の役割は終えたものと判断し閉鎖することとなりました。
    </p>
    <br />
    <p>
      2021年4月以降は<a
        href="https://www.pref.shiga.lg.jp/ippan/kenkouiryouhukushi/yakuzi/309252.html"
        >滋賀県の公式サイト</a
      >で情報を確認頂きますよう、よろしくお願いいたします。
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {}
})
</script>

<style lang="scss">
.ClosingNotice {
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
  > p {
    font-size: 14px;
    margin-bottom: 7px;
  }
}
</style>
