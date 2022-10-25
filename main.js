/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).*/ 

const pizza = [{
    id:1,
    nombre: "pizza muzza",
    ingredientes: ["salsa", "muzza"],
    precio: "500"
},{
    id:2,
    nombre: "pizza fugazata",
    ingredientes : ["muzza", "cebolla"],
    precio: "1500"
},{
    id:3,
    nombre: "pizza napolitana",
    ingredientes: ["salsa", "muzza", "jamon"],
    precio: "1900"
},{
    id:4,
    nombre: "pizza anchoas",
    ingredientes: ["salsa", "muzza", "anchoas"],
    precio: "1200"
},{
    id:5,
    nombre: "pizza morron",
    ingredientes: ["salsa", "muzza", "morron"],
    precio: "1600"
},{
    id:6,
    nombre: "pizza panceta",
    ingredientes: ["salsa", "muzza", "panceta"],
    precio: "1400"
}
]

/*🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
a)  Las pizzas que tengan un id impar.*/
const numImpar = pizza.filter((pizza)=> {
    if(pizza.id % 2 === 1){
        console.log(`la ${pizza.nombre} tiene id impar`)

    }
})

/*b) ¿Hay alguna pizza que valga menos de $600?*/
const pizzaMenor600 = pizza.some((pizza)=>{
    if(pizza.precio < 600)
    console.log(`la ${pizza.nombre} es menor a 600$`)

})

 

/*c) El nombre de cada pizza con su respectivo precio.*/
const pizzas = pizza.forEach((pizza) =>{
    console.log(pizza.nombre +" su precio es de "+ pizza.precio +"$")
})

/* d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.*/

const pizzaIngrediente = pizza.forEach((pizza) =>{
    console.log(pizza.nombre +" sus ingredientes son "+ pizza.ingredientes)
})