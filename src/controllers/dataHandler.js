function formatPricing(priceList) {
    // cut list to max to past 1 month only
    const priceCut = priceList.splice(0, 30)
    let formattedData = []
    // Format for rechart
    priceCut.forEach(function (arrayItem) {
        let obj = {
            date: parseISOString(arrayItem[0]),
            price: insertDecimal(arrayItem[1]),
        }
        formattedData.unshift(obj)
    })
    return formattedData
}

// Add decimal to format pricing
function insertDecimal(n) {
    return (n / 100).toFixed(2)
}

function parseISOString(s) {
    let d = new Date(s)
    return d.getDate() + '/' + d.getMonth()
}

function handleNewsData(newsFeed) {
    let slicedNews = newsFeed.items.slice(0, 4)
    //Regex from https://stackoverflow.com/questions/12393671/substring-regex-to-get-a-src-value-held-in-a-string
    let regex = /<img.*?src=['"](.*?)['"]/;
    slicedNews.forEach(function (arrayItem, index) {
        let imgSrc = regex.exec(arrayItem["content:encoded"])[1]
        slicedNews[index]["imgSrc"] = imgSrc
    })
    return slicedNews;
}

exports.formatPricing = formatPricing
exports.insertDecimal = insertDecimal
exports.handleNewsData = handleNewsData
