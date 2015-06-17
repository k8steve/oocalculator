//Define the Person class
var Person = function(name, age, origin, gender){
	this.name = name;
	this.age = age;
	this.origin = origin;
	this.gender = gender;

	this.initialize();
};

Person.prototype.initialize = function(){
	console.log('Initializing a new object of the class Person');
};

Person.prototype.message = function(){
	console.log("Hi I'm " + name + " from " + origin + " and I am " + age + " years old.")
};

var adam = new Person('Adam', 52, 'Eden', 'male'); //=> 'Initializing a new object of the class Person'

adam.message() //=> 'Hi I'm Adam from Eden and I am 52 years old'

var Man = function(name, age, origin){
	Person.call(this, name, age, origin, 'male');
};

//Copy the 'prototype', which is all the methods of a Class, and set it as the prototype of the Man class
Man.prototype.__proto__ = Person.protoype;

Man.prototype.initialize = function(){
	console.log('Initializing a new object of the class Man');
};

var gerald = new Man('Gerald', 40); //=>'Initializing a new object of the class Man'

gerald.gender //=> 'male'


Person('bob', 78, 'africa', 'male');
