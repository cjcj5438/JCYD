/**
 * async 的基本用法 和函数内部的执行顺序
 * @param name
 * @returns {Promise<*>}
 */
function getSotckSymbol(name) {
    console.log(1)
    return name;
}
function getStockPrice(symbol) {
    console.log(2)
    return symbol
}

async function getStockPriceByName(name) {
    const symbol = await getSotckSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return  stockPrice;
}
getStockPriceByName('goog').then(result=>{
    console.log(result);
});