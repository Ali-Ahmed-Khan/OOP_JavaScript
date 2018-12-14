class Patient {
  constructor(fname, lname, age, gender, illness) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.illness = illness;
  }
  // report = function () {
  //   console.log('Patient Info ' + fname + ' ' + lname + ' ' + age + ' ' + gender);
  // }
}


var obj1 = new Patient("John", "Smith", 90, "Male", "None");

console.log(obj1);


// Need to figure out methods