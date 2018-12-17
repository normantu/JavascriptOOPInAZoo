var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var bear = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var Rarity = new Unicorn("rarity");
    Rarity.eat("marshmallows");
    var Gemma = new Giraffe("Gemma")
    Gemma.eat("meat");
    Gemma.eat("leaves");
    var Stinger = new Bee("Stinger")
    Stinger.eat("ice cream");
    Stinger.eat("pollen");
    var Zookeeper = new Zookeeper("Zookeeper");
    var animals = [tigger, bear, Rarity, Gemma, Stinger];
    Zookeeper.feedAnimals(animals, "chicken");



}


class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;

    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food){
        this.food = food;
        console.log(this.name + " eats " + this.food);
        this.favoriteFood == food ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(this.name);
    }
    static getPopulation() {
        return animalPopulation;
    }

}


class Tiger extends Animal {
    constructor(name) {
        super(name,"meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name,"fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}


class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}


class Giraffe extends Animal {
    constructor(name) {
        super(name,"leaves");
    }
    eat(food){
        this.food = food;
        if(this.favoriteFood === food){
            console.log(this.name + " eats " + this.food);
            console.log("YUM! " + this.name + " wants more " + food);
            this.sleep(this.name);
        }else{
            console.log("YUCK! " + this.name + " will not eat " + food);
        }
    }

}


class Bee extends Animal {
    constructor(name) {
        super(name,"pollen");
    }
    sleep() {
        console.log(this.name + " never sleeps");
    }
    eat(food){
        this.food = food;
        if(this.favoriteFood === food){
            console.log(this.name + " eats " + this.food);
            console.log("YUM! " + this.name + " wants more " + food);
            this.sleep(this.name);
        }else{
            console.log("YUCK! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeeper {
    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals, food) {
        this.food = food;
        console.log(this.name + " is feeding " + this.food + " to " + animals.length + " of " + animalPopulation + " animals");
        for(var i=0; i< animals.length; i++){
            animals[i].eat(this.food);
        }
    }

}