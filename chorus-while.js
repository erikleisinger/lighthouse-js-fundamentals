// while loop song

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

// same loop, using if

const chorus2 = "Let's dance!";
let repeat2 = 0;
while (repeat2 < 10) {
  if (repeat2 === 5) {
    console.log("*change key*");
  }
  console.log(chorus2);
  repeat2++;
}
console.log("Until the sun comes up!");
