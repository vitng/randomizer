//Pick your colors: 12
let colors = [{
    name: "WHITE : White is associated with light, goodness, innocence, purity, and virginity. It is considered to be the color of perfection",
  }, {
    name: "RED : Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love. Red is a very emotionally intense color "
  }, {
    name: "YELLOW : On one hand yellow stands for freshness, happiness, positivity, clarity, energy, optimism, enlightenment, remembrance, intellect, honor, loyalty, and joy, but on the other, it represents cowardice and deceit "
  }, {
    name: "BLUE : Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven. Blue is considered beneficial to the mind and body. It slows human metabolism and produces a calming effect ",
  }, {
    name: "BLACK : Black is associated with power, fear, mystery, strength, authority, elegance, formality, death, evil, and aggression, authority, rebellion, and sophistication "
  },
  {
    name: "BROWN : Brown, the color of earth, wood, stone, wholesomeness, reliability, elegance, security, healing, home, grounding, foundations, stability, warmth, and honesty, is a natural, neutral color that is typically associated with the seasons of fall and winter "
  },
  {
    name: "GRAY : Gray is a cool, neutral, and balanced color. The color gray is an emotionless, moody color that is typically associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated. The color gray is a timeless and practical color that is often associated with loss or depression "
  },
  {
    name: "PURPLE : The color purple is often associated with royalty, nobility, luxury, power, and ambition. Purple also represents meanings of wealth, extravagance, creativity, wisdom, dignity, grandeur, devotion, peace, pride, mystery, independence, and magic "
  },
  {
    name: "ORANGE : Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics. Orange represents enthusiasm, fascination, happiness, creativity, determination, attraction, success, encouragement, and stimulation. ... In heraldry, orange is symbolic of strength and endurance "
  },

  {
    name: "GREEN : Green, the color of life, renewal, nature, and energy, is associated with meanings of growth, harmony, freshness, safety, fertility, and environment. Green is also traditionally associated with money, finances, banking, ambition, greed, jealousy, and wall street"
  },
  {
    name: "PINK : Pink, a delicate color that means sweet, nice, playful, cute, romantic, charming, feminine, and tenderness, is associated with bubble gum, flowers, babies, little girls, cotton candy, and sweetness. The color pink is the color of universal love of oneself and of others"
  }
];
// color :" white", meaning: "pure..."

let randomIndex;

//let img;

function setup() {
  createCanvas(1000, 1000);
  background(200);
  textSize(32);
  //console.log(colors[2]);
  //colors.pop();
  //colors.push("mint");
  //colors.shift();
  //colors.unshift();
  text("Hi there !!!", 50, 50);
  setTimeout(changeBackground, 1000);

  //image(img, 0, 0, 100, 100);
}

//function preload() {
  //img = loadImage('colorcards/1.jpg');


//}

function draw() {

}

function changeBackground() {
  background(random(255), random(255), random(255));


}

function mousePressed() {
  background(random(200, 250));
  randomIndex = int(random(colors.length));
  text(colors[randomIndex].name, 50, 50, 950, 950);
  colors.splice(randomIndex, 1);

}
