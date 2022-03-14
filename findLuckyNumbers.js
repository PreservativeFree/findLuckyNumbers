// Write your code below this line.
let luckyNumbers = function(userNum) {
    let x = 0;
    let luckyNums = [];

   while (x < userNum) {
       luckyNums.push(Math.floor(Math.random()*10) + 1);
       x++;
   }
   if(userNum == 1)
        return luckyNums; //only 1 value in array
          
    for (let i = 0; i < luckyNums.length; i++) { 
        for (let j = 0; j < luckyNums.length; j++) {
            if(luckyNums[i] == luckyNums[j] && i != j) { 
                return 'Not lucky';
            }
        }
    } 
    return luckyNums;
}
console.log(luckyNumbers(5));
//The numbers generated are considered lucky if none of the numbers in the array match each other 
//The user won't create an array of n < 0 and they won't create an array greater than 10 numbers