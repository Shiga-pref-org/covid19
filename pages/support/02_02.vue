<template><div class="Parent">
  <h2 class="Parent-Heading">
    新型コロナウイルス感染症に関する支援制度
  </h2>
  <div>
    <div class="TextCard">
      <ul class="list_01">
        <li><nuxt-link to="/support/01_01#s01">収入が減っている</nuxt-link></li>
        <li><nuxt-link to="/support/02_01#s01" class="current">住宅を確保<br />して欲しい</nuxt-link></li>
        <li><nuxt-link to="/support/03_01#s01">学費・仕送り<br />の不安がある</nuxt-link></li>
        <li><nuxt-link to="/support/05_01#s01">子どもの休校で<br />働けない</nuxt-link></li>
        <li><nuxt-link to="/support/04_01#s01">手元に<br />生活資金がない</nuxt-link></li>
      </ul>

      <h3 id="s01" class="ttl_01">《 家賃が払えない 》</h3>
      <ul class="list_02">
        <li><nuxt-link to="/support/02_01#s02"><span class="subdirectory-arrow-right"></span><p>家賃の支払いを支援してほしい</p></nuxt-link></li>
        <li><a href="#s02"><span class="subdirectory-arrow-right"></span><p>住宅を確保してほしい</p></a></li>
        <li class="nodata"></li>
        <li class="nodata"></li>
        <li class="nodata"></li>
      </ul>

      <div id="s02">
        <div class="editor main_contents">
          <h2>住宅を確保してほしい</h2>

          <h3>県営住宅での一時的な受け入れ</h3>

          <div class="bg_gray">
            <p>
              滋賀県では、新型コロナウイルス感染症に起因する解雇等により住宅の退去を余儀なくされた方を支援するため、県営住宅の一時的な受入れを開始します。
            </p>
          </div>

          <h4>対象者（個人）</h4>
          <p>
            新型コロナウイルス感染症に起因する解雇等により住宅の退去を余儀なくされた方。
          </p>

          <h4>申込方法、使用料等</h4>
          <p>詳細は滋賀県公式ホームページを参照してください。<br /><a href="https://www.pref.shiga.lg.jp/ippan/kendoseibi/zyuutaku/311712.html">https://www.pref.shiga.lg.jp/ippan/kendoseibi/zyuutaku/311712.html</a></p>

          <div class="foot_contact">
            <p class="foot_ttl_s"><span>問い合わせ先・お申込み</span></p>
            <p class="foot_txt">
              滋賀県庁土木交通部住宅課公営住宅管理係
            </p>
            <p class="foot_tel">
              <a href="077-528-4234">077-528-4234</a>
            </p>
          </div>
        </div>
      </div>

      <div class="orange_box editor">
        <p class="ttl_02">特別定額給付金</p>
        <div class="orange_inner">
          <div class="bg_yellow">
            <p>
              新型コロナウイルス感染症の影響を踏まえ、定額により国民生活を支援する給付金です。
            </p>
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
            <li>
              本人確認書類および振込先口座の金融機関名、口座番号、口座名義人がわかる通帳やキャッシュカードの写しとともに、市区町村に郵送する
            </li>
          </ol>
          <h5>オンライン申請方式（要：マイナンバーカード）</h5>
          <ol>
            <li>マイナポータル上の特別定額給付金の申請画面にアクセスする</li>
            <li>
              世帯主および世帯員の情報並びに振込先口座情報の確認書類をアップロードし、電子申請を行う
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style src="./support.css"></style>