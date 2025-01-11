 export interface product {
    description: string,
    price: number,
}

const phone:product ={
    description:'Nokia A1',
    price: 1000
};

const tablet:product ={
    description:'ipad 7',
    price: 255
};

interface taxCalculationOptions {
    tax: number,
    products:product[]
}
// argumentos
export function taxCalculation (options:taxCalculationOptions):number[]{
    const {tax, products} = options
    let total = 0;
    products.forEach(({price}) =>{
        total += price
    })
    return[total, total * tax]
}

const shoppinCar =[phone, tablet]
const tax = 0.15;
// des
const [total, taxTotal] = taxCalculation({
    tax: tax,
    products: shoppinCar
})

console.log(total)
console.log(taxTotal)

