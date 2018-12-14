function Footballers(fname, lname, age, country) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.country = country;
}

// Working on figuring out methods.

// Footballers.prototype = introduction = function (Lionel, Messi, Argentina) {
//   console.log('Hey, I am ' + this.fname + ' ' + this.lname + ' I play for ' + this.country);
// }

obj1 = new Footballers('Lionel', 'Messei', '45', 'Argentina');

console.log(obj1);

introduction('Lionel', 'Messi', 'Argentina');