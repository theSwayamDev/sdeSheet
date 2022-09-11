/**
 * given array of stock price , maximize the profit. as data is on daily basis, can not sell on a previous index of buy
 * @param {Number[]} stocks 
 * @returns {Number} max profit earned
 */
const findMaxProfit = (stocks) => {
    let sell = 1
    let buy = 0
    let max_profit = 0
    while(sell < stocks.length){
        if(stocks[sell] < stocks[buy]){
            //if selling price is less than buying price, simply buy at selling price and move on
            buy = sell
        }else{
            let local_profit = stocks[sell] - stocks[buy]
            max_profit = Math.max(local_profit, max_profit)
        }
        sell += 1
    }
    return max_profit
}

let stocks = [100, 23, 567, 231, 780, 333, 120]

let profit = findMaxProfit(stocks)

console.log('profit earned', profit)