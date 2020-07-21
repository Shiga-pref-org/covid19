<template><div class="Parent">
  <h2 class="Parent-Heading">
    新型コロナウイルス感染症に関する支援制度
  </h2>
  <div>
    <div class="TextCard">
      <ul class="list_01">
        <li><nuxt-link to="/support/01_01#s01" class="current">収入が減っている</nuxt-link></li>
        <li><nuxt-link to="/support/02_01#s01">住宅を確保<br />して欲しい</nuxt-link></li>
        <li><nuxt-link to="/support/03_01#s01">学費・仕送り<br>の不安がある</nuxt-link></li>
        <li><nuxt-link to="/support/05_01#s01">子どもの休校で<br />働けない</nuxt-link></li>
        <li><nuxt-link to="/support/04_01#s01">手元に<br>生活資金がない</nuxt-link></li>
      </ul>

      <h3 id="s01" class="ttl_01">《 収入が減っている 》</h3>
      <ul class="list_02">
        <li><nuxt-link to="/support/01_01#s02"><span class="subdirectory-arrow-right"></span><p>売上が落ち込んでいる</p></nuxt-link></li>
        <li><nuxt-link to="/support/01_02#s02"><span class="subdirectory-arrow-right"></span><p>公共料金の支払いを延納したい</p></nuxt-link></li>
        <li><nuxt-link to="/support/01_03#s02"><span class="subdirectory-arrow-right"></span><p>納税の猶予・免除の手続をしたい</p></nuxt-link></li>
        <li><a href="#s02"><span class="subdirectory-arrow-right"></span><p>コロナウィルスに感染してしまった</p></a></li>
        <li><nuxt-link to="/support/01_05#s02"><span class="subdirectory-arrow-right"></span><p>会社の都合で休業・失業して手元に現金がない</p></nuxt-link></li>
      </ul>

      <div id="s02">
        <div class="editor main_contents">

          <h2>コロナウィルスに感染してしまった</h2>
          <h3>傷病手当金</h3>
          <div class="bg_gray">
            <p>傷病手当金は、健康保険等の被保険者が、業務災害以外の理由による病気やケガの療養のため仕事を休んだ場合に、所得保障を行う制度です。新型コロナウイルス感染症に感染し、その療養のために働くことができない方も、利用することができます。</p>
          </div>

          <div class="red-box">
            <p class="attention">下記の場合についても、傷病手当金の支給対象になりえます。</p>
            <li>自覚症状は無いが、検査の結果「新型コロナウイルス陽性」と判定を受け入院している</li>
            <li>発熱などの自覚症状があり、療養のために仕事を休んでいる</li>
          </div>

          <h4>支給要件</h4>
          <ul>
            <li>業務災害以外の病気やケガの療養のためにはたらくことができないこと</li>
            <p class="attention">業務または通勤に起因する病気やケガは労災保険給付の対象となります</p>
            <li>４日以上仕事を休んでいること</li>
            <p class="attention">療養のために連続して３日間仕事を休んだ後（待機期間）、４日目以降の仕事を休んだ日について支給されます</p>
            <p class="attention">待機期間には有給休暇、土日祝等の公休日を含みます</p>
          </ul>
          <h4>支給期間</h4>
            <p>支給を始めた日から最長１年６か月の間。</p>

          <div class="foot_contact">
            <p class="foot_ttl"><span>問い合わせ先</span></p>
            <p class="foot_txt">勤務先や加入している健康保険の窓口</p>
            <p class="foot_txt">※どの公的健康保険に加入しているかは保険証に記されています。</p>
          </div>

        </div>


        <div class="orange_box editor">
          <p class="ttl_02">特別定額給付金</p>
          <div class="orange_inner">
            <div class="bg_yellow">
              <p>新型コロナウイルス感染症の影響を踏まえ、定額により国民生活を支援する給付金です。</p>
            </div>
            <h4>対象者</h4>
            <ul>
              <li>４月２７日現在住民基本台帳に登録されている者</li>
            </ul>
            <h4>給付額</h4>
            <ul>
              <li>世帯構成員１人につき１０万円</li>
            </ul>
            <h4>申請方法</h4>
            <h5>郵送方式</h5>
            <ol>
              <li>市区町村から郵送される申請書に振込先口座情報を記入する</li>
              <li>本人確認書類および振込先口座の金融機関名、口座番号、口座名義人がわかる通帳やキャッシュカードの写しとともに、市区町村に郵送する</li>
            </ol>
            <h5>オンライン申請方式（要：マイナンバーカード）</h5>
            <ol>
              <li>マイナポータル上の特別定額給付金の申請画面にアクセスする</li>
              <li>世帯主および世帯員の情報並びに振込先口座情報の確認書類をアップロードし、電子申請を行う</li>
            </ol>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
</template>
<style src="./support.css"></style>