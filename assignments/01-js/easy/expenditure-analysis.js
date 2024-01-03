/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {}
  transactions.forEach(element => {
    if (!(element.category in map)) {
      map[element.category]=0
    }
    map[element.category]+=element["price"]
  });
  let res=[]
  for (let key in map) {
    let currObj = { category: key, totalSpent: map[key] }
    res.push(currObj)
  }

  console.log(map)
  return res;
}


module.exports = calculateTotalSpentByCategory;
