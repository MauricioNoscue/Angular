const skills: string[] =['bash','counter'];

interface personaje{
    name:string;
    age:number;
    skills: string[];
    casa?:string;
}

const objeto: personaje ={
    name: 'John',
    age:23,
    skills: ['bash','counter']
}
console.log(skills)
console.log(objeto)

export {};