function sumar (num1:number, num2:number){
    return num1 + num2;
}
sumar(3,8)





interface personajein{
    name :string,
    hp: number,
    mostrarVida: ()=> void;
}

const subirVida=(personaje:personajein,vidaextra:number)=>{
    personaje.hp += vidaextra;
}

const personajef:personajein ={
    name: 'Juan',
    hp: 100,
    mostrarVida (){
        console.log(`vida del personaje ${this.hp}`);
    }
}
subirVida(personajef,10)
personajef.mostrarVida()

export {};









