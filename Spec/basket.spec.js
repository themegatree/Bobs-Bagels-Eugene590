/* # Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
*/
let basket, item, result, test1, name1;

//Setup
const basket = new Basket()
let item = 'jerk bagel'
let result = true

//Execute
basket.add(item)


//Verify
let test1 = basket.items.includes(item)
let name1 = assertEquals (test1, result)

console.log(name1)


