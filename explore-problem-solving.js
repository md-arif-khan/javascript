
// ---------------------------------Remove duplicake item in Array --------------------
// function removeDuplicate(name){
//     const uniName = []
//     for(let i=0; i<name.length;i++){
//         const element = name[i]
//         if(uniName.includes(element)==false){
//             uniName.push(element);
//         }
//     }
//     return uniName;
// }
// const fName = ["Raib","Mobin","Roni", 'Sojib',"abu","Rabbi","Mobin","abu","Roni","Roni"]
// const result = removeDuplicate(fName)
// console.log(result)

//  --------------------------------------Find the Foo bar--------- -------------------

// for(let i =1; i<50; i++){
//     if(i%3==0 && i%5==0){
//         console.log("foobar")
//     }else if(i%3==0){
//         console.log("foo")
//     }else if(i%5==0){
//         console.log("bar")
//     }else{
//         console.log(i)
//     }
// }

// ---------------------------calculate wood for char, table and bed ------------------
// function woodCulculator(chairQuantity,tableQuantity,bedQuantity){
//         const perChairWood = 3;
//         const perTabelWood = 5;
//         const perBedWood = 50;
//         const chariWood = perChairWood*chairQuantity;
//         const tabelWood = perTabelWood*tableQuantity;
//         const bedWood = perBedWood*bedQuantity;
//         const totalWood = chariWood+tabelWood+bedWood;
//         return totalWood;
// }
// const result = woodCulculator(1,1,2)
// console.log(result)

//--------------------------------- calculation cheapest phone price ----------------------------

// const phones =[
//     {name:"iphone",camera:12, storage:"32gb",price:82000,color:"blue"},
//     {name:"vivo",camera:12, storage:"32gb",price:18000,color:"blue"},
//     {name:"Tecno",camera:12, storage:"32gb",price:15000,color:"blue"},
//     {name:"Oppo",camera:12, storage:"32gb",price:22000,color:"blue"},
//     {name:"HTC",camera:12, storage:"32gb",price:44000,color:"blue"},
//     {name:"Nokia",camera:12, storage:"32gb",price:80000,color:"blue"}
// ]
// function cheapPrice(phones){
//     let phonePrice =phones[0]
//     for(let i =0; i<phones.length;i++){
//         const perPhone = phones[i]

//         if(perPhone.price<phonePrice.price){
//             phonePrice=perPhone
//         }
//     }
//     return phonePrice
// }

// const result =cheapPrice(phones)
// console.log(result)



// const phones =[
//     {name:"iphone",camera:12, storage:"32gb",price:82000,color:"blue", quantity:5},
//     {name:"vivo",camera:12, storage:"32gb",price:18000,color:"blue", quantity:6},
//     {name:"Tecno",camera:12, storage:"32gb",price:15000,color:"blue", quantity:3},
//     {name:"Oppo",camera:12, storage:"32gb",price:22000,color:"blue", quantity:2},
//     {name:"Nokia",camera:12, storage:"32gb",price:80000,color:"blue" ,quantity:8}
// ]

// function totalPrice(phones){
//     let sum = 0;
//     for( let i =0; i<phones.length; i++){
//         const element =phones[i]
//         const allPrice = element.price*element.quantity;
//         sum = sum+allPrice;
//     }
//     return sum;
// }
// const result = totalPrice(phones)
// console.log(result)

function feetToInch(feet){
    const inch = feet*12;
    return inch;
}
const result = feetToInch(3)
console.log(result)