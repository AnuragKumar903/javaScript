function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(this.name + "make a sound");
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log(this.name + "barks");
}

const d1 = new Dog("kim", "lebra");

d1.speak();
d1.bark();