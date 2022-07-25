class Person {
  constructor()
  {
    this.name = 'vicky';
  }
  
  printMyName()
  {
    console.log(this.name);
  }
}


const person = new Person();
person.printMyName();


class age extends Person
  {
    constructor()
    {
      super();
      this.gender = "male"
    }
    
    printGender()
    {
      console.log(this.gender);
    }
  }


const Perage = new age();
Perage.printGender();
Perage.printMyName();



//Nest generation java script same code as above but properties syntax and method syntax is different 

class Person {
  
  // in eS6/BABEL NO need to call constructor function
    name = 'vicky';
  
  
  printMyName =() => 
  {
    
    //here it is important to use this just like we were using 
    console.log(this.name);
  }
}


const person = new Person();
person.printMyName();


class age extends Person
  {
   
//       super(); No need to call super 
    
          gender = "male"
    
    
    printGender = () =>
    {
      console.log(this.gender);
    }
  }


const Perage = new age();
Perage.printGender();
Perage.printMyName();









/// MIne few things left 

class Person
{
  constructor(name,age)
  {
    this.name = name;
    this.age = age;
  }
  
  PrintNameAge()
  {
    var agee = this.age ;
    console.log("My name is " + this.name + " and my age is " + agee);
  }
}
var Ap = new Person("vicky", 23);

Ap.PrintNameAge();



class Human extends Person
  {
    constructor(name,gender,age)
    {
      super();
      this.name = name ;
      this.age = age;
      this.gender = gender;
      
    }
    
    PrintHuman()
    {
      console.log(this.gender)
    }
  }

const HumPer = new Human("vikcy", 23, "make");

HumPer.PrintHuman();
HumPer. PrintNameAge()













