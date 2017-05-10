/* **************** Vehicle Constructor ******************
private vars: self, distance_traveled
private methods: updateDistanceTraveled: 

public properties:  _name: acquired from parameters
                    numwheels: acquired from parameters
                  	passengers: acquired from parameters
					speed: acquired from parameters

public methods:     makeNoise: adds a noise to a vehicle
                    move: runs updatedistance method
                    checkMiles: console.log distance traveled
return this
*****************  END *******************/

function VehicleConstructor(name, numwheels, passengers, speed){
	if(!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, numwheels, passengers, speed);
	}
	
	var vinchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	this.distance_traveled = 0;
	this._name = name;
	this.numwheels = numwheels;
	this.passengers = passengers;
	this.speed = speed;
	this.vin = createvin();

	function createvin(){
		var vin = "";
		for(var x = 0; x <=17; x++){
			vin += vinchar[Math.floor(Math.random()*35)];
			}
			console.log(vin);
			return vin;
		}
	}

	VehicleConstructor.prototype.makeNoise = function(noise){
		var noise = noise;
		console.log(noise)
		return this;
	};
	VehicleConstructor.prototype.move = function(){
		this.updateDistanceTraveled();
		this.makeNoise();
		return this;
	};
	VehicleConstructor.prototype.checkMiles = function(){
		console.log(this.distance_traveled);
		return this;
	};
	VehicleConstructor.prototype.updateDistanceTraveled = function(){
		this.distance_traveled += this.speed;
		console.log(this.distance_traveled);
		return this;
	}


var Bike = new VehicleConstructor("Bike", 2, 1, 50);
var Sedan = new VehicleConstructor("Sedan", 4, 8, 50);	
var Bus = new VehicleConstructor("Bus", 8, 50, 50);		


	Bike.makeNoise = function(){
	console.log("ring, ring!");
	return Bike;
		}


	Sedan.makeNoise = function(){
		console.log("Honk, Honk!");
		return Sedan;
		}

	Bus.pickup = function(people){
		if (typeof(people) == "number"){	
			Bus.passengers += people;
			console.log(Bus.passengers);
			return Bus;
		}

		return this;
	}

