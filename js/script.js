
// VIDEO LINKS
const links = [
"https://www.youtube.com/embed/b4Zp75xe6tE",
"https://www.youtube.com/embed/_7mLL7rpCbA",
"https://www.youtube.com/embed/OCGpwIkkuXQ",
"https://www.youtube.com/embed/-lEPX2fF4Ls",
"https://www.youtube.com/embed/V1bFr2SWP1I",
"https://www.youtube.com/embed/qjlVAsvQLM8",
"https://www.youtube.com/embed/hPOYc4a2RPY",
"https://www.youtube.com/embed/O06HgW5LRxM",
"https://www.youtube.com/embed/f-BY_TRGGlg",
"https://www.youtube.com/embed/bsfyVDlx2yY"
]

let counter = -1;

var colorCase = document.getElementById('colorCase')
var black = document.getElementById('black');
var white = document.getElementById('white');
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');


// CHANGE COLOR BLACK
black.addEventListener('click', setColorBlack);
function setColorBlack(){
  colorCase.className = "black";
  backward.style.color = 'rgb(69, 69, 69)';
  forward.style.color = 'rgb(69, 69, 69)';
  document.body.style.backgroundColor = 'rgb(20, 20, 20)';
  h1.style.color = 'white';
  h2.style.color = 'white';
}

//CHANGE COLOR WHITE
white.addEventListener('click',setColorWhite);
function setColorWhite(){
  colorCase.className = "white";
  backward.style.color = 'black';
  forward.style.color = 'black';
  document.body.style.backgroundColor = 'rgb(235, 235, 235)';
  h1.style.color = 'black';
  h2.style.color = 'black';
}

// BUTTONS
var backward = document.getElementById('backward');
var forward = document.getElementById('forward');
var playerFrame = document.getElementById('playerFrame');
var musicNumber = document.getElementById('musicNumber');

// DISPLAY VIDEO
function displayVideo(){
  if(counter>10){
    counter = 0;
  }
  switch(counter){
    case 0:
      playerFrame.src = links[0];
      break;
    case 1:
      playerFrame.src = links[1];
      break;
    case 2:
      playerFrame.src = links[2];
      break;
    case 3:
      playerFrame.src = links[3];
      break;
    case 4:
      playerFrame.src = links[4];
      break;
    case 5:
      playerFrame.src = links[5];
      break;
    case 6:
      playerFrame.src = links[6];
      break;
    case 7:
      playerFrame.src = links[7];
      break;
    case 8:
      playerFrame.src = links[8];
      break;
    case 9:
      playerFrame.src = links[9];
      break;
    case 10:
      playerFrame.src = links[10];
      break;
      default:
      playerFrame.src = links[0];    
  }
}

// FORWARD BUTTON
forward.addEventListener('click', setCounter);
function setCounter(){
  counter++
  if(counter>9){
    counter = 0;
  }
  musicNumber.textContent = counter+1
  console.log(counter);
  displayVideo();
}


// BACKWARD BUTTON
backward.addEventListener("click", myFunction);
function myFunction(){
  counter--
  if(counter<1){
    counter = 0;
  }
  musicNumber.textContent = counter+1
  console.log(counter);
  displayVideo();
}


class MusicPlayer {
  constructor(songs) {
      this.songs = songs;
  }
  displaySongDetails() {
    let divElement = document.getElementById("songsContainer");
    this.songs.forEach(function(song) {
      Object.keys(song).forEach((key,index) => {
        let pElement = document.createElement("p");
        pElement.textContent = `${song[key]}`;
        if(index === 0){
          pElement.classList.add("first-attribute");
        } else if(index === 1){
          pElement.classList.add("second-attribute");
        } else if(index === 2){
          pElement.classList.add("third-attribute");
        } else if(index === 3){
          pElement.classList.add("fourth-attribute");
        }
        divElement.appendChild(pElement);
      });
    });
  }
}
// ARRAY OF OBJECTS
let songs = [
  { Top: "#1", name: "FAST CAR",artist: "Luke Combs" , duration: "4:25" },
  { Top: "#2", name: "TRUSTFALL",artist: "PINK", duration: "3:56" },
  { Top: "#3", name: "FLOWERS",artist: "Miley Cyrus", duration: "3:19" },
  { Top: "#4", name: "HEY, SOUL SISTER",artist: "Train" , duration: "3:35" },
  { Top: "#5", name: "OVER THE RAINBOW",artist: "Israel Kamakawiwoʻole" , duration: "3:48" },
  { Top: "#6", name: "I WANT IT THAT WAY",artist: "Backstreet Boys" , duration: "3:32" },
  { Top: "#7", name: "AIN'T NO SUNSHINE",artist: "Bill Whithers" , duration: "2:06" },
  { Top: "#8", name: "MONSTERS",artist: "Lumix" , duration: "2:38" },
  { Top: "#9", name: "DUSK TILL DAWN",artist: "ZAYN & Sia" , duration: "3:58" },
  { Top: "#10", name: "ROOMMATES",artist: "Malcolm Todd" , duration: "3:36" },
];

let musicPlayer = new MusicPlayer(songs);
musicPlayer.displaySongDetails();



  







