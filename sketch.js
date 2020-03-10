let colors = [];
let randomIndex;
let animating = false;
let imgs = [];
let imageCounter = 0;
let button;
//let addMoreButton;
let gamebackground;
let nameInputs = [];


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




  setTimeout(changeBackground, 1000);
  button = createButton("Play");

  button.class('mybuttonclass');
  // button.position (windowWidth / 2, windowHeight - 280);
  button.mousePressed(buttonPressed);
  // image(imgs[0], width/2, height/2, 200, 200);

  //addMoreButton = select ('#addMmoreButton')
  //addMoreButton.mousePressed (addAnotherInput);

  //for (let i = 0; i < 3; i++) {
    //nameInputs.push(createInput());
    //nameInputs[nameInputs.length - 1].parent("#inputField");
  //}
}


function draw() {
//trying with time
  //let hr = hour ();
  //let mn = minute ();
  //let sc = second ();

  //fill (255);
  //noStroke ();
  //textSize (50);
  //text (hr + ':' + mn + ':' + sc, 200,50);

  if (animating == true) {
    clear();


    if (imageCounter < imgs.length - 1) {
      imageCounter++;
    } else {

      imageCounter = 0;
    }
  }

  //console.log(imageCounter);
  image(imgs[imageCounter], width / 2, height / 2, 200, 200);
}

function addAnotherInput() {

  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputField");



}

function randomizer() {
  animating = false;


  background(random(200, 250));
  randomIndex = int(random(0, 255));


  image(imgs[round(random(0, imgs.length - 1))], width / 2, height / 2, 200, 200);
  text(colors[randomIndex], width / 2, height - 55);


}

function buttonPressed() {
  for (let i = 0; i < nameInputs.length; i++) {

    colors.push(nameInputs[i].value());

  }


  animating = true;
  setTimeout(randomizer, 2000);

}

function changeBackground() {
  background(random(255), random(255), random(255));
}
