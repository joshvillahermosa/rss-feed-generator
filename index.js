import fs from 'fs'
import rss from 'rss'
import weekendersDrinkInfo from './feeds/weekenders-drink'
import items from './feeds/weekenders-drink/items'

const feed = new rss(weekendersDrinkInfo)
items.forEach(item => feed.item(item))
const xml = feed.xml()
const callback = (err) => {
  if(err) throw err
  console.log('Success creating XML: ', xml)
}
fs.writeFile('rss.xml', xml, 'ascii', callback)
