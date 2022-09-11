/**
 * Given Array of stock price , find maximum profit that can be earned by buying and selling multiple stocks
 * Note -- Can hold only one stock at a time
 * @param {Number[]} stocks 
 * @returns {Number} Maximum profit that can be obtained
 */

const maximizeStockProfit = (stocks) => {
    let sell_price = -1
    let profit = 0
    for(let i = stocks.length - 1; i >= 0; i--){
        let curr_price = stocks[i]
        if(curr_price > sell_price){
            sell_price = curr_price
        }else{
            profit += sell_price - curr_price
            sell_price = curr_price
        }
    }
    return profit
}

let stocks = [7,1,5,3,6,4,2,4,8]

let max_prof = maximizeStockProfit(stocks)
console.log('profit is', max_prof)