//  25|May|25

// set default values for function parameters 

// using defValues for a function parameter .
// Handling funPar through defining them individually and assigning value for each as an argument when calling the function 
function customGreeting(greeting,name,adjective,occasion){ // defining the function  with its parameters 
  return`${greeting},${name}!Have a ${adjective} ${occasion}.`;
}
//' passing values as an argument to the function 
customGreeting('Good Morning','Software engineer','fantastic','Monday');

