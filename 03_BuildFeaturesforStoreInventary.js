// 3.Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

function priceConversion(obj){
    const exchangeRate = 80

    const convertPrices = Object.entries(obj).map(([item,price]) => {

        const convertPrice = price * exchangeRate
        return {item, price: convertPrice}
    })
    return convertPrices
}

const obj = {
    item_1: 2,
    item_2: 4,
    item_3: 0,
    item_4: 15,
}

console.log(priceConversion(obj))
