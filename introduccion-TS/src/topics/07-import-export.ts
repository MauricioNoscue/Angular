import { product,  taxCalculation } from './06-function-destructure';

const shoopingCar : product[] =[
    {
        description:'lechuga',
        price: 1.2,
    },
    {
        description:'lechuga',
        price: 1.2,
    }
];

const [total, taxTotal] = taxCalculation({
    products:shoopingCar,
    tax: 0.15
})

console.log(total, '07')
console.log(taxTotal, '07')
