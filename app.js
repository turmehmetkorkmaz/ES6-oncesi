// function Employee(){ //Yapici Fonksiyon- Constructor
// this.name = "Mustafa";
// }

// const emp1 = new Employee;
// console.log(emp1);

// function Employee (name,age,salary) {
//     this.name=name;
//     this.age=age;
//     this.salary=salary;

//     this.showInfos = function(){
//         console.log(this.name, this.age, this.salary); 
//     }


// }

// const emp1 = new Employee("Mustafa",25,4000);
// const emp2 = new Employee("Ahmet",25,4000);

// emp1.showInfos();

//Prototype-1

// function Employee (name, age){
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("Bilgiler Gosteriliyor");
//     }
//     this.toString = function(){
//         console.log("Bu bir Employee Objesidir...");
//     }
// }

// const emp1 = new Employee("Mustafa",25);
// console.log(emp1);
// console.log(emp1.toString());


//Prototype-2


// function Employee(name, age){
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("isim: " + this.name + "Yas " + this.age);
//     }
// }

// const emp1 = new Employee("Mustafa", 25);
// const emp2 = new Employee("Oguz", 25);

// console.log(emp1);
// console.log(emp2);
 
// burada showInfosu tum objelerde ayri ayri olsuturdum, bu durum 
//bellegimi dogru bir sekilde kullanmadigimi gosterir
//dogru olan ise objelerin icerisindeki prototypelara yazdirmaktir
//asagida bunu yapacagim.

// function Employee(name, age){
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype.showInfos = function(){
//     console.log("isim: " + this.name +"Yas: " + this.age);
// }
    


// const emp1 = new Employee("Mustafa", 25);
// const emp2 = new Employee("Oguz", 25);

// emp2.showInfos();
// emp1.showInfos();
// console.log(emp1);
// console.log(emp2);



//Object.Create
//bir obje olustururken, prototipini baska bir objeden olusturmamizi
//sagliyor


// const obj = {
//     test1:function(){
//         console.log("TEst 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// console.log(obj);
// const emp = Object.create(obj)
// emp.name = "Mustafa"
// console.log(emp);


/*function Person (){

}
Person.prototype.test1 = function(){
    console.log("Test1");
    
}
Person.prototype.test2 = function(){
    console.log("Test2");

}

const person = new Person();
//ben bu Person'in prototype'ini baska bir yerde kullanmak istiyroum
function Employee (name,age){
    this.name = name;
    this.age = age;

}
Employee.prototype = Object.create (Person.prototype);

const emp = new Employee("Mustafa",25);
emp.test1 = "Mehmet" //burada emp'e bir ozellik daha ekledim

console.log(emp);*/


//Prototype tabanli kalitim
/*Kalitim-inheritance */

function Person(name, age){
    this.name = name;
    this.age = age;
    
}

Person.prototype.showInfos = function(){
    console.log("Isim: " + this.name + "Yas: " + this.age);
}

function Employee (name, age, salary){

    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
const emp = new Employee("Mustafa", 25,4000);
console.log(emp);*/


//overrideing - iptal etme
/*Employee.prototype.showInfos = function(){
    console.log("Isim: " + this.name + "Yas: " + this.age + "Maas: " + this.salary);
}
const emp =new Employee("Mustafa", 25, 4000);

emp.showInfos();
  */