// let cars = [{
//     tot: 10000,
//     broken_cars: 5051
//   }];

//   function machine(cars) {
//     let total = cars[0].tot;

//     let broken = cars[0].broken_cars;

//     let brokenPercentage = (broken / total) * 100;
//     return brokenPercentage;
// }

// console.log(machine(cars)); 

// machine(cars)


// За 7-октября


// let products = [
//     {   
//         name: "milk",
//         type: "milk",
//         price: 16000
//     },
//     {   
//         name: "cheese",
//         type: "milk",
//         price: 25999
//     },
//     {   
//         name: "tvorog",
//         type: "milk",
//         price: 12000
//     },
//     {   
//         name: "govyadina",
//         type: "meat",
//         price: 90000
//     },
//     {   
//         name: "baranina",
//         type: "meat",
//         price: 94000
//     },
//     {   
//         name: "kuryatina",
//         type: "meat",
//         price: 45000
//     },
//     {   
//         name: "vodka",
//         type: "alcohol",
//         price: 20000
//     },
//     {   
//         name: "tekila",
//         type: "alcohol",
//         price: 50000
//     },
//     {   
//         name: "pivo",
//         type: "alcohol",
//         price: 17000
//     },
//     {   
//         name: "champain",
//         type: "alcohol",
//         price: 100000
//     },
// ]
//  1. посчитать общую сумму всех товаров
//  2. посчитать общую сумму всех товаров конкретной категории
//  3. посчитать сколько товаров конкретной категории 
//  4. найти средний прайс всех товаров

// products.forEach(item => {
//     total += item.price
//     if(audit[item.type]){

//         audit[item.type].count++

//         audit[item.type].total += item.price
//     }
// })

// average = total / products.length

// console.table(audit);

// console.table(total);

// console.table(average);


