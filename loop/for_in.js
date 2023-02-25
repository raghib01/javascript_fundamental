let array = [2, 3, 4, 5];
for (let i in array) {
  console.log(i);
}

// object

let object = {
  Dhaka: "Capital of Bangladesh.",
  Chittagong: "Business center.",
};

let text = "";
for (let data in object) {
  console.log(data + " is a " + object[data]);
}

//  for in loop give us objects properties...
