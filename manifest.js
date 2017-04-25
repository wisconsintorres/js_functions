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
