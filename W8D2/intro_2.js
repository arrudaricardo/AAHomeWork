
const titleize = (array, callback) => {
    array = array.map((el) => `Mx. ${el} Jingleheimer Schmidt` )
    array.forEach((el) => callback(el))
}

function printCallback(el) {
    console.log(el)
}

// titleize(["Mary", "Brian", "Leo"], printCallback);
//
//
//

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}


Elephant.prototype.trumpet = function() {
    console.log(`${this.name} goes 'prhRRRRR'`)
}

Elephant.prototype.grow = function() {
    this.height = this.height + 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick)
}

Elephant.prototype.play = function() {
    let i = Math.floor(Math.random() * this.tricks.length)
    return this.tricks[i]
}


let ele = new Elephant('Diddo', 200, ['rool', 'dance','kick'])


// console.log(ele)
// ele.trumpet()
// ele.grow()
// console.log(ele.height)
// ele.addTrick('die')
// console.log(ele.tricks)
// console.log(ele.play())


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];


Elephant.paradeHelper = function(ele) {
    console.log(`hello it's ${ele.name}!`)
}

// herd.forEach(
//     (el) => Elephant.paradeHelper(el)
// )


const dinerBreakfast = () => {
    orders = ['cheesy scrambled eggs']
    console.log(`Id like ${orders} please`)
    return function(newOrder) {
        orders.push(newOrder)
        console.log(`Id like ${orders} please`)
    }
}

 let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");


