//Pick your colors: 12
//let colors = [{
//  name: "WHITE : White is associated with light, goodness, innocence, purity, and virginity. It is considered to be the color of perfection",
//  }, {
//    name: "RED : Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love. Red is a very emotionally intense color "
//  }, {
//    name: "YELLOW : On one hand yellow stands for freshness, happiness, positivity, clarity, energy, optimism, enlightenment, remembrance, intellect, honor, loyalty, and joy, but on the other, it represents cowardice and deceit "
//  }, {
//    name: "BLUE : Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven. Blue is considered beneficial to the mind and body. It slows human metabolism and produces a calming effect ",
//  }, {
//    name: "BLACK : Black is associated with power, fear, mystery, strength, authority, elegance, formality, death, evil, and aggression, authority, rebellion, and sophistication "
//  },
//  {
//    name: "BROWN : Brown, the color of earth, wood, stone, wholesomeness, reliability, elegance, security, healing, home, grounding, foundations, stability, warmth, and honesty, is a natural, neutral color that is typically associated with the seasons of fall and winter "
//  {
//  name: "GRAY : Gray is a cool, neutral, and balanced color. The color gray is an emotionless, moody color that is typically associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated. The color gray is a timeless and practical color that is often associated with loss or depression "
//  },
//  {
//    name: "PURPLE : The color purple is often associated with royalty, nobility, luxury, power, and ambition. Purple also represents meanings of wealth, extravagance, creativity, wisdom, dignity, grandeur, devotion, peace, pride, mystery, independence, and magic "
//  {
//    name: "ORANGE : Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics. Orange represents enthusiasm, fascination, happiness, creativity, determination, attraction, success, encouragement, and stimulation. ... In heraldry, orange is symbolic of strength and endurance "
//  },

//  {
//    name: "GREEN : Green, the color of life, renewal, nature, and energy, is associated with meanings of growth, harmony, freshness, safety, fertility, and environment. Green is also traditionally associated with money, finances, banking, ambition, greed, jealousy, and wall street"
//  },
//  {
//    name: "PINK : Pink, a delicate color that means sweet, nice, playful, cute, romantic, charming, feminine, and tenderness, is associated with bubble gum, flowers, babies, little girls, cotton candy, and sweetness. The color pink is the color of universal love of oneself and of others"
//  }
//];

let colors ;
// color :" white", meaning: "pure..."

let randomIndex;
let animating = false;
let imgs = [];
let imageCounter = 0;
let button;
let gamebackground;
function preload() {
  for (let i = 0; i <= 17; i++) {
    imgs[i] = loadImage(`colorcards/img${i+1}.jpg`)

  }
  gamebackground = loadImage('colorcards/randomizer.jpg');
}


function setup() {
  createCanvas(500, 500);
  background(200);
  textSize(32);

  imageMode(CENTER);

  frameRate(12);


  //console.log(colors[2]);
  //colors.pop();
  //colors.push("mint");
  //colors.shift();
  //colors.unshift();
  fill ('red');
  text("Choose your color ⁂𓃱𑁍 !!!", 60, 60);

  textStyle(BOLDITALIC);

  setTimeout(changeBackground, 1000);
  button = createButton("Play");

  button.class('mybuttonclass');
  // button.position (windowWidth / 2, windowHeight - 280);
  button.mousePressed(buttonPressed);
  // image(imgs[0], width/2, height/2, 200, 200);
}


function draw() {


  if (animating == true) {
    clear();


    if (imageCounter < imgs.length - 1) {
    imageCounter++;
  } else {

    imageCounter = 0;
  }
}

    console.log(imageCounter);
    image(imgs[imageCounter], width/2, height/2, 200, 200);
}

function randomizer() {
  animating = false;

  // if (colors[0]) {


    background(random(200, 250));
    randomIndex = int(random(0, 255));
    // text(randomIndex, 50, 50, 950, 950);

    image(imgs[round(random(0, imgs.length - 1))], width / 2, height / 2,200, 200);

    // colors.splice(randomIndex, 1);
  // } else {
  //   background(random(200, 255));
  //   text("nothing left!", 80, 80);
  //
  // }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}

function changeBackground() {
background(random(255), random(255), random(255));
}
