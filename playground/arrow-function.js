var square = x => x + x;

console.log(square(99));

var user = {
	name: 'Isaac',
	sayHi: () => {
		console.log(`Hi, I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
};

user.sayHiAlt(1,2,3);