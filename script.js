
var side = 20;
var socket = io();

function setup() {

  frameRate(4);
  createCanvas(20 * side, 20 * side);
  background("#acacac");
  
  // for (let i = 0; i < WaterArr.length; i++) {
  //   const water = WaterArr[i];
  //   water.waterColor();
  // }
}

function nkarel(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("red");
      } else if (matrix[y][x] == 4) {
        fill("blue");
      } else if (matrix[y][x] == 5) {
        fill("orange");
      }
      rect(x * side, y * side, side, side);
    }
  }

  
}

function AddGrass(){
  socket.emit("AddGrass");
}

function AddGrassEater(){
  socket.emit("AddGrassEater");
}

function AddFier(){
  socket.emit("AddFier");
}

function clearm() {
  socket.emit("Clear");
}

function rand() {
  socket.emit("Random")
}

function stop() {
  socket.emit("Stop")
}

function run() {
  socket.emit('Run');
}

setInterval(
  function () {
  socket.on('send matrix', nkarel)
  },700
)