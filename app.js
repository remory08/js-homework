//Number Sequences

var num = function([arr]) {
    var i = arr.length -1;
    var newval = arr[i];
    console.log(newval*2);
 };

num([1,2,4,8,16,32]);


/* Fibonacci and Prime
Fibonacci start at 0, 1 or 1,1 and each subsequent number is the sum of the previous two.
Prime- only divisible by itself and 1





var Fibo= function(num) {
  var arr = [0,1],
    a = arr.length - 1,
    b = arr.length - 2,
    result= arr[a] + arr[b];
  while ( result < num) {
    newvar = arr.push(result);
  }
  console.log(arr);
};

Fibo(145);



number
fibonacci math   num1 + num2 = num3

  var Fibo = function(num) {
  for(i=0 ; i+j < num; i++ && j++)
      result= i+j;
      console.log(result);
  }

  Fibo(145);

var arr= [0,1];


  for (var i = 0; i < arr.length; i++) {
      var result = arr[i] + arr[i+1]
      arr.push(result);
      console.log(arr);
  }
  */
//   var arr = [0,1];
//   var Fibo = function(num) {
//     for (i=2; fib < num; i++) {
//       var j = i-1;
//       var k = i-2;
//      var fib = arr[j] + arr[k];
//      var update = arr.push(fib);
//     }
//     console.log(arr);
//   }
//
// Fibo(145);

// var fib = [0,1];
// var i = 0;
// result= 0;
// var Fibo = function (number) {
// for(i = 2; result < number; i++) {
//     result = fib[i-2] + fib[i-1];
//     fib [i] = result;
// }
// console.log(fib);
//
// };
//
// Fibo(145);
//
//
// var fib = [0,1];
// for(var i=fib.length; i<10; i++) {
//     fib[i] = fib[i-2] + fin[i-1];
// }
// console.log(fib);


var fib = [0,1];
var Fibo = function (number) {
  i = 2;
  fib[i] = fib[i-1] + fib[i-2];
  result = fib[i];
  while (result < number) {
    return result;
    i++;
  }
  console.log(fib[i]);
};

Fibo(145);
//
// var Fibo = function(num) {
//   var a = 0;
//   b = 1,
//   c = 0;
//   while (c <= num) {
//     c = a + b;
//     return c;
//     a = b;
//     b = c;
//   }
//   //return c;
// }

//Fibo(145);


// Loops and Accumulator

var logAll = function(arr) {
  var i = 0;
  var result = 0;
  while (arr.length > i){
        result =(arr[i]);
        console.log(result);
        i++;
  }
};

logAll([1,2,3,4,5]);

var sum = function (arr){
     var result = 0;
     var i =0;
    while(i < arr.length){
        console.log(arr[i]);
        result = result + arr[i];
        i++;
    }
    return result;
}

sum([1,2,3]);

var subtract = function(arr) {
  var i   = 0,
   result = 100;
  while (i<arr.length) {
    result = result - arr[i];
    i++;
  }
  return result;
}

var myTotal = subtract([10,10,10]);
console.log(myTotal);

var subtract = function(arr) {
  var i   = 0,
   result = 2400;
  while (i < arr.length) {
  result = result - arr[i];
  i++;
}
return result;
};

myTotal= subtract([345, 234, 123,]);

var largest = function(arr){
    var     i = 0,
        large = 0;
    while (i < arr.length){
        if (arr[i] > large) {
            large = arr[i];
        }
            i++;
    }
    return large;
};



var big= largest([1,9,7, 200, 33, 234,2]);
big


var smallest = function (arr) {
    var i =0,
        result = 999999;
    while (i < arr.length) {
        if (arr[i] < result) {
            result = arr[i];
        }
            i++;
    }
    return result;
}

var absoluteSmallest = smallest([20,19,40]);
absoluteSmallest

var average = function (arr){
  var i =0,
  result = 0,
  sum = 0;
  while (arr.length > i){
   var sum = arr[i] + sum;
   i++;
  }
   return sum / arr.length;

}

average([10,20,30]);
