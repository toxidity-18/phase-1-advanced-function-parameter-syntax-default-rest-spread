//  25|May|25

// set default values for function parameters 

// using defValues for a function parameter .
// Handling funPar through defining them individually and assigning value for each as an argument when calling the function 
function customGreeting(greeting,name,adjective,occasion){ // defining the function  with its parameters 
  return`${greeting},${name}!Have a ${adjective} ${occasion}.`;
}
//' passing values as an argument to the function 
customGreeting('Good Morning','Software engineer','fantastic','Monday');

// the rest and spread operators helps in handling this complex parameter situation much better 
 
// working for an e-com prepping for post holiday sales thus reduce price by 25% discount 
// itemPrice the original price ...
function discountedPrice(itemPrice){
  return itemPrice-(itemPrice*0.25) // applying 25% discount 
}
 
// make it more flexible thus discount rate will be placed as a parameter 
function discountedPrice(itemPrice,discountRate){
  returnPrice(itemPrice-(itemPrice*discountRate));
}

// setting default value or strict value for the discount rate = 25%
function discountedPrice(itemPrice,discountedRate=0.25){// assigning default values to the discountRate unless otherwise specified
  return itemPrice - (itemPrice * discountedRate);
}

// when we want a new discountRate value simply pass it as an argument unless otherwise stated 
discountedPrice(100,0.15)

// NaN may result from misplacement of default parameter values 
function discountedPrice(discountedRate=0.25,itemPrice){
  return itemPrice - (itemPrice * discountedRate);
}
discountedPrice(100) // NaN will result from this as the itemPrice is not defined first

// when we want to add tax added to the total sales 
function discountedPrice(itemPrice,tax,discountedRate=0.25){
let discountPrice = itemPrice - (itemPrice*discountedRate)
return discountPrice + (discountPrice * tax)
}

// ... thus solving more complex event when handling parameters 

// Using javascript spread operator in a function call 
// spread operator many function is to copy arrays and objects  the element of the original to a new 
// Using the spread operator to pass the elements of an array as an argument into a function call 
function add(a,b,c){
  return a+b+c
}
const arr = [1,2,3]; // an array of numbers
add(...arr)// this copy the elements of the array and pass them as an argument to the function call
