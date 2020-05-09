# 滋賀県 新型コロナウイルス感染症対策サイト

![](https://github.com/shiga-pref-org/covid19/workflows/production%20deploy/badge.svg)

![](https://github.com/shiga-pref-org/covid19/workflows/development%20deploy/badge.svg)


[![Netlify Status](https://api.netlify.com/api/v1/badges/9a8952b2-4514-4dd1-88e6-751c364b3df7/deploy-status)]((https://app.netlify.com/sites/happy-roentgen-86f936/deploys))

[![滋賀県 新型コロナウイルス感染症対策サイト](https://github.com/Shiga-pref-org/covid19/raw/development/static/ogp.png)](https://stopcovid19.pref.shiga.jp/)

### [日本語](./README.md) | [English](./README_EN.md)


## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。

 
## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 本家東京版から派生したサイト

[Link先](./forkedSites.md)を御覧ください。


## 滋賀版独自の情報 

### 以下の方針で開発しています
- 展開速度を優先させるため、一旦は多言語対応を実施せずにリリースします
- 展開速度を優先させるため、一旦はflow系の機能を停止してリリースします
- 展開後の改善を容易にするため、使用しない部分はコードの最低限の改変によってUIから削除するに留め、残りの部分はUIから見えないコード中には残存させます。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install
$ yarn updateFlow # このスクリプトは、 /support/ ページをshiga-pref/covid19-flow から取得して更新します
# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映



 `master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stopcovid19.pref.shiga.jp/ が更新されます。

`development` ブランチに対してプルリクエストを作成すると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、プレビュー用の一時的なURL ( `https://deploy-preview-123--frosty-lamarr-66d313.netlify.com/` など)が発行されます。
