let sounds = new Tone.Players({
  'Drop'  : 'media/sound/Drop.mp3' ,
  'Explosion'   : 'media/sound/Explosion.ogg'  ,
  'Electricity' : 'media/sound/Electricity.ogg',
  'EvilLaugh'   : 'media/sound/EvilLaugh.ogg'
});
let button1;
let button2;
let button3;
let button4;
/*
sounds[1] = new Tone.Player('media/sound/Percussion.ogg');
sounds[2] = new Tone.Player('media/sound/Explosion.ogg');
sounds[3] = new Tone.Player('media/sound/Electricity.ogg');
sounds[4] = new Tone.Player('media/sound/EvilLaugh.ogg');
*/

function setup() {
  createCanvas(400, 400);
  sounds.toDestination();
  button1 = createButton("Drop");
  button1.position(0, 0);
  button1.mousePressed(() => playSound("1"));
  button2 = createButton("Explosion");
  button2.position(0, 20);
  button2.mousePressed(() => playSound("2"));
  button3 = createButton("Electricity");
  button3.position(0, 40);
  button3.mousePressed(() => playSound("3"));
  button4 = createButton("EvilLaugh");
  button4.position(0, 60);
  button4.mousePressed(() => playSound("4"));
}

function draw() {
  background(220);

}
/*
function keyPressed() {
  let sound;
  switch(key)
  {
    case "1": sound = sounds.player('Drop'); break;
    case "2": sound = sounds.player('Explosion')   ; break;
    case "3": sound = sounds.player('Electricity') ; break;
    case "4": sound = sounds.player('EvilLaugh')   ; break;
    default: sound = sounds.player('Percussion'); break;
  }
  sound.playbackRate = (800/mouseX) + 0.01;
  if (400 - mouseY > 200) {sound.reverse = true;}
  //sound.start();
  sounds.player('Percussion').start();
}*/

function playSound(number) {
  sounds.playbackRate = 0.25;//(40/mouseX) + 0.01;
  switch(number)
  {
    case "1": sounds.player('Drop').start(); break;
    case "2": sounds.player('Explosion').start();   ; break;
    case "3": sounds.player('Electricity').start(); ; break;
    case "4": sounds.player('EvilLaugh').start();   ; break;
    default: break;
  }
}