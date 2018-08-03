// this is a manifest to hold the different JS functions that I have 
// created in an attempt to save them for later use.

//1. Add the digits of a two-digit integer and return the sum
// example For n = 29, the output should be.. addTwoDigits(n) = 11.

function addTwoDigits(n) {
    
    var input = n;
    
    var string = n.toString();
    
    var split = string.split("");
    
    var number1 =  Number(split[0]);
    
    var number2 = Number(split[1]);
    
    return number1 + number2;
}

//2. return the largest number for x place of 10
// ex. n = 2, the output should be largestNumber(n) = 99.
function largestNumber(n) {
        
    var output = Math.pow(10,n) -1;
    
    return output;
    

}

//3. The total number of pieces of candy the children
// will eat provided they eat as much as they can 
// and all children eat the same amount.

//exFor n = 3 and m = 10, the output should be candies(n, m) = 9.
//Each child will eat 3 pieces. So the answer is 9.

function candies(n, m) {

    var input = Math.floor(m/n);
    
    var output = input * n;
    
    return output;
    
    
}

// 4. Number of people in a movie theather behind you and to the exit
// ex. For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) = 96.

function seatsInTheater(nCols, nRows, col, row) {
    
   var genPopCol = nCols;
   var genPopRow = nRows;
    
    //you need to include the -1 because your col is included.
    var uCol = col - 1;
    var uRow = row;
    
    var differenceCol = genPopCol - uCol;
    
    var differenceRow = genPopRow - uRow;
    
    var peopleBehindU = differenceCol * differenceRow;
    
    return peopleBehindU;

}

// 5. General add any 2 numbers

function add(param1, param2) {

    var p1 = param1;
    var p2 = param2;
    
    var answer = p1 + p2; 
    
    return answer;
    
    
}

// 6. get the century from the inputted year
function centuryFromYear(year) {    
    
    if (year % 100 == 0) {
        
       var year = year;    
       var century = Math.floor(year / 100);
    
    return century;
   
    } else {
        
      var year = year;    
      var century = Math.floor(year / 100) + 1;
        
        return century;
    }  
        
}

// 7. Check to see if the input is a Palindrome

function checkPalindrome(inputString) {
    
    var str = inputString;
    
    var str_split = str.split("");
    
    var str_reverse = str_split.reverse("");
    
    var str_join = str_reverse.join("");
    
    var new_str = str_join;
    
    if(str == new_str){
        
        return true;
        
    } else {
        
        return false;
    }

}

// 8. Find the largest product from two consecutive elements in ar array
function adjacentElementsProduct(inputArray) {
      
var productArray = []; 
var product;

    
   for (i = 0; i < inputArray.length -1; i++) {
            

     product = inputArray[i] * inputArray[i + 1];
         
     productArray.push(product);

    }

 return Math.max.apply(null, productArray);
    
       
}

// 9.  find the area of a polygon for a given n
//ex or n = 2, the output should be shapeArea(n) = 5;

function shapeArea(n) {
    
    for (n >= 0; n <=10000; n++ ){
        
        var sqr = Math.pow(n,2) + Math.pow((n-1),2);
        
        return sqr;
        
        
    }

}

//10. minimal number of statues that need to be added to existing 
//statues such that it contains every integer size from an interval 
//[L, R] (for some L, R) and no other sizes.
// in a set of numbers, how many things to be added in order to make a straight number set

//Ex. For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.
//Ratiorg needs statues of sizes 4, 5 and 7

function makeArrayConsecutive2(statues) {

    var statues_array = statues;    
        //sort the array from small to large
    var statues_sort = statues_array.sort(function(a,b){return a-b})       
    var statues_needed = 0;

//commence for loop that goes until one before the end    
    
    for (i=0; i < statues_sort.length -1; i++) {
        
 //get the abs value of consecutive array postions subtracted       
 var statues_added = Math.abs(statues_sort[i] - statues_sort[i + 1]);
        
        //condition if there is a greater than 1 difference, empty int variable 
        //gets an addition of whatever the difference -1
        if(statues_added > 1) {
            
            statues_needed += statues_added -1;
            
        } else {
            statues_needed += 0;
        }               
   
        
    }  
  
    return statues_needed;
    
}

//11. Find the largest integer given a divisor and a bound 
// ex. For divisor = 3 and bound = 10, the output should be maxMultiple(divisor, bound) = 9.
//The largest integer divisible by 3 and not larger than 10 is 9.

function maxMultiple(divisor, bound) {

     var bound = bound;
     var divisor = divisor;
//the answer cannot be larger than bound, so i start with bound and count down until I 
//find the integer with no remainder.      
     
     for(i=0; i<= bound; i++){
          
          if (bound % divisor !== 0){
               bound --;
               
          } else {
               return bound;

          }            
          
     }          
     
}

//12. Find the opposite point in a circle given the number of nodes and the 
// point of interest
//ex. For n = 10 and firstNumber = 2, the output should be circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
    
    var n = n;
    var fnumber = firstNumber;
    
    var output = fnumber + (n/2);
    
    //you need the if statement because if > than n, the number will start to leave the circle
    //instead of giving you the opposite side.
         
        if(output >= n){
            
            return output - n;
            
        }else {
            
            return output;
        }
    }
    
//13. find how many hours in minutes and then add the sum of the hours and minutes in integers
// for a new whole number
// ex. For n = 808, the output should be lateRide(n) = 14.

function lateRide(n) {
    
    var n = n;
    
    var hours = Math.floor(n/60); 
    var minutes = n % 60;
    
// hours splits
    
    if(hours < 10){
        
    var sumHours = hours;
        
    }else {
    
    var stringH = hours.toString();
    
    var splitH = stringH.split("");
    
    var number1H =  Number(splitH[0]);
    
    var number2H = Number(splitH[1]);
    
    var sumHours = number1H + number2H;
    
    }
    
// minutes spilt 

    if(minutes < 10){
        
        var sumMins = minutes;
        
    }else {

    var stringM = minutes.toString();
    
    var splitM = stringM.split("");
    
    var number1M =  Number(splitM[0]);
    
    var number2M = Number(splitM[1]);
    
    var sumMins = number1M + number2M;
    
    }
    
    return sumHours + sumMins;
    

}



//14. Find the first duplicate number in an array
    //this looks to see if the if statement is true by verfying that all of the elements are the same
    //if false it changes it to true so that you can continue in the array

function firstDuplicate(a) {
    var arr = [];
    
    
    if (a.length === 1) return -1;
    
    
    for (var i = 0; i < a.length; i++) {
        
        if (arr[a[i]] === true) 
            
            return a[i];
        
        
        else arr[a[i]] = true;
        
    }
    
    return -1;
}


//15. Find the first non-duplicative char in the array string
//this looks to see if the char at postsition i can be found throughout the array. If it cannot it returns, otherwise 
// returns the required string. 

function firstNotRepeatingCharacter(s) {
    
    let c;
    
    if(s.length < 2) { return s[0]; }
    
    for (i = 0; i < s.length; i++){     
        
        c = s.charAt(i);
        
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
              return c;
            } 
      
    }
    
    return '_';
    
        
    }
    
