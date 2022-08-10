
// inch to feet
// function inchToFeet (inch){
//     const feet = inch/12;
//     return feet;
// }
// const dadaInch = 144;
// const result = inchToFeet(dadaInch)
// console.log(result)

// meles to kilomiters

// function milesTokilo(miles){
//     const kilometer = miles*1.609;
//     return kilometer;
// }
// const mile= 89
// const result = milesTokilo(mile)
// console.log(result)

//------------------- even or odd number-----------------------
// function isEven(number){
//     const reminder = number%2;
//     if(reminder == 0){
//         return "this is even";
//     }else{
//         return "this is odd";
//     }
// }
// const result=isEven(455)
// console.log(result)

//----------------------------- is leap year -----------------

// function isLeapYear(year){
//     const remainder = year%4;
//     if(remainder==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const result =isLeapYear(2025)
// console.log(result)

// -------------------------array sum -----------------

// function arraySum(numbers){
//     let sum = 0
//     for(let i= 0; i<numbers.length;i++){
//         let element = numbers[i]
//         sum=sum+element;
//     }

//     return sum;
// }
// let array = [22,33,44,55,66,12,44,8]
// let result = arraySum(array)
// console.log(result)
// function odd(numbers){
//     let odd = []
//     for(let i=1; i<numbers.length; i+=2){
//         let element =numbers[i]
//         let reminder = element%2;
//          if(reminder !=0){
//             odd.push(element);
//          }

//     }
//     return odd;
// }
// let array = [22,33,44,55,66,12,44,8,459,19]
// let result=odd(array)
// console.log(result)

// let sum =1;
// for(let i = 1;i<7;i++){
//     sum=sum*i;
//     console.log(i,sum)
// }

    // function factorial (fact){
    //     let result = 1;
    //     for(let i =1; i<=fact;i++){
    //         result = result*i;
    //     }
    //     return result;
    // }

    // let ans = factorial(5)
    // console.log(ans)
    // function factorial (num){
    //     let result = 1;
    //     for(let i=num; i>=1;i--){
    //         result=result *i
    //     }
    //     return result;
    // }
    // let fact = factorial(6)
    // console.log(fact)

    function factorial (num){
        let result =1
        let i =num;
        while(i>=1){
            result= result*i;
            i--;
        }
        return result;
    }
    let total = factorial(6)
    console.log(total)