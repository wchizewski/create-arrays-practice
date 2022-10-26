let array1 = ["January", "June", "July"];
console.log(array1);

let array2 = [];
for (let n = 0; n < 700; n++) {
  array2.push("joy");
}
console.log(array2);

let array3 = [];
for (let n = 0; n < 500; n++) {
  array3.push(7);
}
console.log(array3);

let array4 = [];
for (let n = 0; n < 5000; n++) {
  array4.push(Math.random() * 100);
}
console.log(array4);

let array5 = [];
for (let n = 0; n < 300; n++) {
  array5.push(Math.random() * 40);
}
console.log(array5);

let array6 = [];
for (let n = 20; n < 800; n += 4) {
  array6.push(n);
}
console.log(array6);

let array7 = [];
for (let n = 100; n >= 10; n -= 2) {
  array7.push(n);
}
console.log(array7);

let colorsStr = "red,orange,yellow,green,blue,indigo,violet";
let array8 = colorsStr.split(",");
console.log(array8);

let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";
let array9 = citiesStr.split(";");
console.log(array9);

let array10 = [];
while (true) {
  let name = prompt("enter a name");
  if (name != "done") {
    array10.push(name);
  } else if (name === "done") {
    break;
  }
}
console.log(array10);
