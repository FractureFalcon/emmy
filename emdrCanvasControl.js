var emdrTimer = 0;
var intervalID;

var canvas;
var context;

var x;
var y;

window.onresize = resizeCanvas;

window.onload = function () {
    resizeCanvas();

    x = canvas.width / 2;
    y = canvas.height / 2;

    intervalID = setInterval(update, 17);
};

function resizeCanvas() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

var frameTime = 0.016;

minStartDir = Math.PI / 6;
maxStartDir = Math.PI / 3;

var dir = Math.random() * (maxStartDir - minStartDir) + minStartDir;
dir *= Math.random() * 4 + 1;
var circleSpeed = 750;
var circleRadius = 35;
var circleBorderWidth = 10;

var collided = false;
var collisionTime = 0.2;
var collisionTimer = 0;

function update() {
  
  // check if we should exit
  emdrTimer += frameTime;
  if (emdrTimer >= emdrTime) {
    
    window.clearInterval(intervalID);
    // load the next window
    loadPostEMDRTreatment();
  }
  
  // update loop
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  updateCirclePosition();
  
  drawCircle(x, y);
}

function angleDotProduct(a, b) {
  return ((Math.cos(a) * Math.cos(b)) + (Math.sin(a) * Math.sin(b)));
}

function vectorDotProduct(a, b) {
  return ((a.x * b.x) + (a.y * b.y));
}

function vectorAdd(a, b) {
  return {x: a.x + b.x, y: a.y + b.y};
}

function vectorSub(a, b) { //a - b
  return {x: a.x - b.x, y: a.y - b.y};
}

function updateCirclePosition() {
  
  var collision = false;
  var n;
  
  // check for collision
  if(collided) {
    //console.log("not colliding");
    collisionTimer += frameTime;
    if(collisionTimer > collisionTime) {
      collided = false;
    }
  }
  else {
      var p = 10;
    if(x + circleRadius + circleBorderWidth + p >= canvas.width) {
      collision = true;
      n = {x: -1, y: 0};
    }
    else if(x - circleRadius - circleBorderWidth - p <= 0) {
      collision = true;
      n = {x: 1, y: 0};
    }
    else if(y + circleRadius  + circleBorderWidth + p >= canvas.height) {
      collision = true;
      n = {x: 0, y: -1};
    }
    else if(y - circleRadius - circleBorderWidth - p <= 0) {
      collision = true;
      n = {x: 0, y: 1};
    }
  }
  
  
  if(collision) {
    var dirVec = {x: Math.cos(dir), y: Math.sin(dir)};
    
    var dot = vectorDotProduct(dirVec, n);
    /* var u = {x: 2 * dot * n.x, y: 2 * dot * n.y};
    dirVec = vectorAdd(dirVec, u); */
    var u = {x: dot * n.x, y: dot * n.y};
    var w = vectorSub(dirVec, u);
    dirVec = vectorSub(w, u);
    
    dir = Math.atan2(dirVec.y, dirVec.x);
    
    collided = true;
    collisionTimer = 0;
  }
  
  /*while(dir > Math.PI * 2) {
    dir -= Math.PI * 2;
  }
  
  while(dir < 0) {
    dir += Math.PI * 2;
    
  }*/
  
  // update position with direction
  x += Math.cos(dir) * circleSpeed * frameTime;
  y += Math.sin(dir) * circleSpeed * frameTime;
  //console.log(/*"X: " + x + " Y: " + y + */"Dir: " + (dir * 180 / Math.PI));
}

function drawCircle(x, y) {
  var centerX = x;
  var centerY = y;
  var radius = circleRadius;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = circleBorderWidth;
  context.strokeStyle = '#66ff66'
  context.stroke();
}
