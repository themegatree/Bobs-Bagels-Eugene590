
//requires

const Basket = requires('../src/basket.js')

let item, result, test1, name1, test2, name2;

//-----------------------------

/* As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket */


//Setup
const basket = new Basket();
let item = 'jerk bagel';
let result = true;

//Execute
basket.add(item);
let test1 = basket.items.includes(item);

//Verify
let name1 = assertEquals (test1, result);

console.log(name1);

//-----------------------------

/* As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
*/

// Object | Property       | Message         | Output
// basket | items[@bagel]  | remove(@bagel)  | items[@bagel]   

//Setup
basket = new Basket();
let item = 'jerk bagel';
let item2 = 'just-a-bagel';
let result = false;

//Execute
basket.add(item);
basket.add(item2);
basket.remove(item);

let test2 = basket.items.includes(item);

//Verify
let name2 = assertEquals(test2, result);


//-----------------------------
//-----------------------------
//-----------------------------
//-----------------------------

