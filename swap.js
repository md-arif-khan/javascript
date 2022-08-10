
// function tallest(num){
//     let tall =0
//     for(let i =0; i<num.length;i++){
//         const result=num[i]
//         if(tall<result){
//             tall=result;
//         }
//     }
//     return tall
// }
// const array = [22,33,44,55,77,8,88,9900,122,324,543]
// const tallestValue = tallest(array)
// console.log(tallestValue)

// function str(text){
//     let reversed = ""
//     for(let i=text.length-1; i>=0; i--){
//         let element = text[i]
//         reversed = reversed+element
//     }
//     return reversed;
// }
// const font ="I am a good boy"
// const result = str(font)
// console.log(result)
const friends = [33,44,66,77,12,45,78]
const age = [11,22,33,44,55,66,77,88,99]
const result=friends.concat(age)
console.log(result)