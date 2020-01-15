function Employee(name = String, age = Number, salary = Number) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  let bonus = 1000;

  let getDetails =()=> {
    console.log(name + ' is' + ' ' + age + ' years old and getting ' + (salary + bonus) + ' as net income.');
  }
  
  this.getFullDetails =()=> {
    getDetails()
  }
}


let emp1 = new Employee('Ankit', 20, 30000);
emp1.getFullDetails();
