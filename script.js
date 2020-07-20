/** @format */

class Employee {
	constructor(name, salary, hireDate) {
		this.name = name;
		this.salary = salary;
		this.hireDate = hireDate;
	}
	getName() {
		console.log(this.name.toUpperCase());
	}
	getSalary() {
		console.log(this.salary);
	}
	getHireDate() {
		console.log(this.hireDate);
	}
}

class Manager extends Employee {
	constructor(descriptionOfJob, name, salary, hireDate) {
		super(name, salary, hireDate);
		this.descriptionOfJob = descriptionOfJob;
	}
	jobDescription() {
		console.log( 'Hello, my name is, ' + this.name + 	'. I was hired on ' + this.hireDate + ', I have a salary of $' + this.salary + ', and I am currently a ' + this.descriptionOfJob + 	'.' );
	}
}

class Designer extends Employee {
	constructor(experience, name, salary, hireDate) {
		super(name, salary, hireDate);
		this.experience = experience;
	}
	yearsExperience() {
		console.log( 'Hello, my name is, ' + this.name + '. I was hired on ' + this.hireDate + ', I have a salary of $' + this.salary + ', and I have ' + this.experience + ' years of experience.' );
	}
}

class SalesAssociate extends Employee {
	constructor(degree, name, salary, hireDate) {
		super(name, salary, hireDate);
		this.degree = degree;
	}
	degreeCompleted() {
		console.log( 'Hello, my name is, ' + 	this.name + '. I was hired on ' + this.hireDate + ', I have a salary of $' + this.salary + ', and I have completed my ' + this.degree + ' degree.' );
	}
}

let dave = new Manager('Wholesale Manager', 'Dave Slay', 100000, '2/21/2001');
let chuck = new Designer('12 years', 'Chuck Malloy', 80000, '7/13/2010');
let susie = new SalesAssociate('Criminal Justice', 'Susie Queue', 650000, '10/29/2014');

dave.jobDescription();
chuck.yearsExperience();
susie.degreeCompleted();
