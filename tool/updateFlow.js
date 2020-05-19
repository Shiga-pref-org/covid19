const fs = require('fs').promises
const _request = require('request')

const request = url =>
  new Promise((resolve, reject) => {
    _request(url, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.body)
      }
    })
  })

const base =
  'https://raw.githubusercontent.com/Shiga-pref-org/covid19-flow/master/templates/contents'

const templateUrls = {
  '01_01': `${base}/support01_01.html`,
  '01_02': `${base}/support01_02.html`,
  '01_03': `${base}/support01_03.html`,
  '01_04': `${base}/support01_04.html`,
  '01_05': `${base}/support01_05.html`,
  '02_01': `${base}/support02_01.html`,
  '02_02': `${base}/support02_02.html`,
  '03_01': `${base}/support03_01.html`,
  '04_01': `${base}/support04_01.html`,
  '05_01': `${base}/support05_01.html`
}

// const scriptUrl =
//   'https://raw.githubusercontent.com/Shiga-pref-org/covid19-flow/master/docs/support.js'
const styleUrl =
  'https://raw.githubusercontent.com/Shiga-pref-org/covid19-flow/master/docs/support.css'

const vueTemplate = `<template>{{html}}</template>
<style src="./support.css"></style>`

const main = async () => {
  const [style] = await Promise.all([
    // request(scriptUrl),
    request(styleUrl)
  ])

  await fs.writeFile('./pages/support/support.css', style)

  const pageTitles = Object.keys(templateUrls)
  const htmls = await Promise.all(
    pageTitles.map(key => request(templateUrls[key]))
  )

  for (let index = 0; index < htmls.length; index++) {
    const html = htmls[index].replace(
      /<a href="support(.+)\.html(.+)">(.+)<\/a>/g,
      (_, p1, p2, p3) => `<nuxt-link to="/support/${p1}${p2}">${p3}</nuxt-link>`
    )
    const pageTitle = pageTitles[index]
    const vue = vueTemplate.replace('{{html}}', html)
    // .replace('{{script}}', script)

    await fs.writeFile(`./pages/support/${pageTitle}.vue`, vue)
  }
}

main()
