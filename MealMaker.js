let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        return menu.courses[courseName].push(dish ={
            name: dishName,
            price: dishPrice
        });
    },
    getRandomDishFromCourse(courseName) {
        let dishes = menu.courses[courseName]
        let i = Math.floor(Math.random() * dishes.length)
        return dishes[i]
    },
    generateRandomMeal() {
        let appetizer = menu.getRandomDishFromCourse('appetizers')
        let main = menu.getRandomDishFromCourse('mains')
        let dessert = menu.getRandomDishFromCourse('desserts')
        let cost = appetizer.price + main.price + dessert.price
        return `Your meal today starts with ${appetizer.name} as your appetizer, then ${main.name} as your main course, and finishes with ${dessert.name} as your dessert. The total cost of your meal is $${cost}.`
    }
};

menu.addDishToCourse('appetizers', 'shrimp cocktail', 3);

menu.addDishToCourse('appetizers', 'clams', 20);

menu.addDishToCourse('appetizers', 'wild mushroom salad', 7.50);

menu.addDishToCourse('mains', 'prime rib', 21);

menu.addDishToCourse('mains', 'salmon aioli', 17);

menu.addDishToCourse('mains', 'chicken cacciatore', 14);

menu.addDishToCourse('desserts', 'chocolate lava cake', 10);

menu.addDishToCourse('desserts', 'new york cheese cake', 8);

menu.addDishToCourse('desserts', 'cassata cake', 12);

let meal = menu.generateRandomMeal();

console.log(meal);
