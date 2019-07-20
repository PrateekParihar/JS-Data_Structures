
/*

[7,1,5,3,6,4]

0 -6 -2 -4 -1 -3

profit 

[7,6,4,3,1]
*/

// Brute-force
// check the profit or loss of each day sell with the particular day buy
var maxProfit = function(prices){

    let maxProfit = -Infinity;

    for(let i=0; i< prices.length; i++){

        for(let j= i; j< prices.length; j++ ){
            
            maxProfit =Math.max(maxProfit,(prices[j] - prices[i]))
        }
    }
    console.log(maxProfit)
    return maxProfit;
}

// Profit  from a particular day is depends upon each days profit  (current day price- previous day price) + previous day profit 

var maxProfit2 = function(prices){
    if(prices.length == 0) return 0;
    let maxProfit = -Infinity;

    let currentDayMaxProfit = 0; // depends upon the difference of current price and min price from previous days
    let minPrice = Infinity;
    for(let i =0; i <prices.length; i++){
        minPrice = Math.min(minPrice,prices[i])
        currentDayMaxProfit = prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, currentDayMaxProfit)
    }
    console.log(maxProfit);
    return maxProfit;
}



var maxProfit3 = function (prices){
    let currMax = 0,
        maxSofar = 0;

        for(let i =1; i< prices.length; i++){
            currMax = Math.max(0, currMax += prices[i] - prices[i-1]);
            maxSofar = Math.max(maxSofar, currMax)
        }

        console.log(maxSofar);

        return maxSofar;
}
maxProfit2([7, 1, 5, 3, 6, 4])
maxProfit3([7, 1, 5, 3, 6, 4])
            // 0 -6 -2 -4 -1 -3
            //    0  4  2  5  3
            //       0 -2 -1 -1
            //          0  3  1
            //             0 -2
            //                0
     