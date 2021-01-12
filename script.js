//Deel A

// Make a sandwich with cheese
// step 1 rasp the cheese
// step 2 put butter on the sandwich
// step 3 add the cheese

const makeSandwichWithCheese = function() {
    console.log("Rasp the cheese");
    console.log("Put butter on the sandwich");
    console.log("Add the cheese");
  };
  
  makeSandwichWithCheese();


//Deel B
//function declaration
const makeSandwich = function() {
    console.log("There you go, a sandwich with");
    console.log(topping);
    
  };

  
  let topping = "peanutbutter";
//function call
  makeSandwich();
topping = "marmalade"
makeSandwich();

//Deel C

const calculateDiscountedPrice = function(totalAmaunt, discount) {
    return Math.round (totalAmaunt - discount);
};

console.log(calculateDiscountedPrice(10, 1,5));

//Deel D
const calculateDiscountedPriceCheck = function(totalAmaunt, discount) {
    if (totalAmount >= 25) {
    return Math.round (totalAmaunt - discount);}
    else {
        return totalAmaunt
    }
};
console.log(calculateDiscountedPrice(25, 5));
console.log(calculateDiscountedPrice(10, 5));



