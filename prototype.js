function Footballers(fname, lname, age, country) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.country = country;
}

Footballers.prototype.introduction = function () {
  console.log('Hey, I am ' + this.fname + ' ' + this.lname + ' I play for ' + this.country);
}

obj1 = new Footballers('Lionel', 'Messei', '45', 'Argentina');

console.log(obj1);