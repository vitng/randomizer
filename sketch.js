//Pick your colors: 12

let colors = ["white", "red", "yellow" , "blue", "black", "brown", "grey", "purple","orange","violet", "green", "pink"];

function setup() {
  createCanvas(1000, 1000);
  background (180);

  //console.log(colors[2]);

  colors.pop();
  colors.push("mint");
  colors.shift();
  colors.unshift();

  colors.splice(2,2);
}

function draw() {
  background(220);
}
