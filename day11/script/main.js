let dog = {
    name: "Ki",
    age: 2,
    bread: "corgi",
    gender: "Duc",
    color: "Vang",
    legs: 4,
    favoriteFood: "Pate",

    eat(food) {
        console.log(this.name, "is eating", this.favoriteFood, "yum yum");
    },
    run(leg) {
        console.log(this.name, "is running on", this.legs);
    },
    brak(bark) {
        console.log("Woof woof woof ...");
    }
};

dog.eat();
dog.run();
dog.brak();

console.log(dog);
console.log(dog.name);
console.log(dog.favoriteFood);

dog.color = "Brown";
dog.age = 4;
console.log(dog.eat);

for (let key in dog) {
    value = dog[key];
    console.log(key, value);
}