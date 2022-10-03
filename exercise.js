const car = {
    doors: 2, 
    color: "silver", 
    engine(){
        console.log(`No of doors ${this.doors} and the color is ${this.color}`)
    }
}

car.engine();

const vehicle = Object.create(car);
vehicle.doors = 3;
vehicle.color = "red";
vehicle.engine = function(){
    console.log("The engine goes vroom");
}

vehicle.engine();

for (let [keys] of Object.entries(vehicle)){
    console.log(`${keys}`);
}

for (let [keys, values] of Object.entries(vehicle)){
    console.log(`${keys} ${values}`);
}