const pizzas = [
    {
        "id": 1,
        "nombre": "Promo Pizza Especial",
        "ingredientes": ["salsa", "queso", "jamon", "morron"],
        "precio": 590
    },
    {
        "id": 2,
        "nombre": "4 Quesos",
        "ingredientes": ["salsa", "mozzarella", "roquefort", "parmesano", "tybo"],
        "precio": 1000
    },
    {
        "id": 3,
        "nombre": "Pollo",
        "ingredientes": ["salsa", "queso", "pollo", "crema"],
        "precio": 970
    },
    {
        "id": 4,
        "nombre": "Tropical",
        "ingredientes": ["salsa", "queso", "jamon", "cerezas", "anana"],
        "precio": 1050
    },
    {
        "id": 5,
        "nombre": "Puerro",
        "ingredientes": ["salsa", "queso", "oregano"],
        "precio": 950
    },
    {
        "id": 6,
        "nombre": "Roquefort",
        "ingredientes": ["salsa", "queso", "roquefort"],
        "precio": 1200
    },
]
console.log(`Las pizzas que tiene el ID impar son: ${pizzas.filter(pizza => pizza.id % 2 !== 0).map(pizza => pizza.nombre)}`)

console.log(`Las pizzas por menos de $600 son: ${pizzas.filter(pizza => pizza.precio < 600).map(pizza => pizza.nombre)}`)

console.log(`Las nombres de todas las pizzas son: ${pizzas.map(pizza => pizza.nombre)}`)

console.log(`Los precios de todas las pizzas son: ${pizzas.map(pizza => pizza.precio)}`)

pizzas.forEach(pizzas => console.log("La pizza", pizzas.nombre, " tiene un costo de: ", "$",pizzas.precio));