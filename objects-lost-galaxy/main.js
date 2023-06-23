//Create a dog object that has four properties and three methods


// Object w/NO CONSTRUCTOR
let pizza = {}

pizza.size = 'large'
pizza.toppings = ['spinach', 'mushrooms', 'pepperoni', 'basil']
pizza.crust = 'NY Style'
pizza.sauce = 'extra'

pizza.estimatedDeliveryTime = function() {
    console.log('Caluculating...')
}
pizza.burnMouth = function() {
    console.log('#@%&*(%^$$!!!*%^&*')
}
pizza.frisbee = function()  {
    console.log('Yikessss!!')
}

// OBJECT w/CONSTRUCTOR

function MakeCar(carMake,carModel,carColor,numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function() {
        alert('BEEP BEEP FUCKER')
    }
    this.lock = function() {
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let volkswagonGTI = new MakeCar ('Volkswagon', 'GTI', 'Red', 2)
let toyotaPrius = new MakeCar('Toyota', 'Prius', 'orange', 4)