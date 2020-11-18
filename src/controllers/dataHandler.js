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

function handleNewsData(newsFeed) {
    return newsFeed.items.slice(0,4)
}

exports.formatPricing = formatPricing
exports.insertDecimal = insertDecimal
exports.handleNewsData = handleNewsData
