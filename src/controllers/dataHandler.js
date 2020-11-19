function formatPricing(priceList) {
  // cut list to max to past 1 month only
  const priceCut = priceList.splice(0, 30)
  let formattedData = []
  // index 0 is date, index 1 is price
  priceCut.forEach(function (arrayItem) {
    let obj = {
      date: parseISOString(arrayItem[0]),
      price: insertDecimal(arrayItem[1]),
    }
    formattedData.push(obj)
  })
  return formattedData
}

// https://stackoverflow.com/questions/11524619/adding-decimal-place-into-number-with-javascript
function insertDecimal(num) {
  return (num / 100).toFixed(2)
}

function parseISOString(s) {
  var d = new Date(s)
  return d.getDate() + '/' + d.getMonth()
}

//https://stackoverflow.com/questions/12393671/substring-regex-to-get-a-src-value-held-in-a-string
function handleNewsData(newsFeed) {
    let slicedNews = newsFeed.items.slice(0,4)
    var regex = /<img.*?src=['"](.*?)['"]/;
    console.log(slicedNews);
    slicedNews.forEach(function (arrayItem, index) {
      let imgSrc = regex.exec(arrayItem["content:encoded"])[1]
      slicedNews[index]["imgSrc"] = imgSrc
    })
    console.log(slicedNews)
    return slicedNews;
}

exports.formatPricing = formatPricing
exports.insertDecimal = insertDecimal
exports.handleNewsData = handleNewsData
