
// First element on canvas
/*
var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'purple';
ctx.fillRect(260,260,80,80);
*/


const draw = () => {
  const canvas1 = document.getElementById('example1');
  const ctx1 = canvas1.getContext('2d');

  const canvas2 = document.getElementById('example2');
  const ctx2 = canvas2.getContext('2d');

  const canvas3 = document.getElementById('example3');
  const ctx3 = canvas3.getContext('2d');

  const canvas4 = document.getElementById('example4');
  const ctx4 = canvas4.getContext('2d');

  const canvas5 = document.getElementById('example5');
  const ctx5 = canvas5.getContext('2d');
  
  // Canvas 1

  // Rectangles
  //ctx1.fillRect(25, 25, 100, 100);
  //ctx1.clearRect(45, 45, 60, 60);
  //ctx1.strokeRect(50, 50, 50, 50);

  // Paths
  //ctx1.beginPath();
  //ctx1.moveTo(50, 50);
  //ctx1.lineTo(250, 50);
  //ctx1.lineTo(250, 100);
  //ctx1.stroke();
  //ctx1.closePath();
  //ctx1.beginPath();
  //ctx1.moveTo(75,50);
  //ctx1.lineTo(100,75);
  //ctx1.lineTo(100, 25);
  //ctx1.fill();

  // Arcs
  /*
  ctx1.beginPath();
  ctx1.arc(300, 300, 75, 0, Math.PI * 2);
  ctx1.lineWidth = 20;
  ctx1.strokeStyle = "green";
  ctx1.stroke();
  ctx1.closePath();

  ctx1.beginPath();
  ctx1.arc(300, 300, 35, 0, Math.PI * 2);
  ctx1.fillStyle = 'red';
  ctx1.fill();
  ctx1.closePath();
  */
  
  // fillStyle

  for(let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
      ctx1.fillStyle = 'rgba(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 100)';
      ctx1.fillRect(j * 50, i * 50, 50, 50);
    }
  }

  // Canvas 2

  for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
      ctx2.strokeStyle = 'rgba(0, ' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ')';
      ctx2.beginPath();
      ctx2.arc(25 + j * 50, 25 + i * 50, 20, 0, Math.PI *2, true);
      ctx2.stroke();
    }
  }

  // Canvas 3

  ctx3.fillStyle = '#FFDD00';
  ctx3.fillRect(0, 0, 150, 150);
  ctx3.fillStyle = '#66CC00';
  ctx3.fillRect(150, 0, 150, 150);
  ctx3.fillStyle = '#0099FF';
  ctx3.fillRect(0, 150, 150, 150);
  ctx3.fillStyle = '#ff3300';
  ctx3.fillRect(150, 150, 150, 150);
  ctx3.fillStyle = '#ffffff';

  ctx3.globalAlpha = 0.5;

  for( i= 0; i< 7; i++){
    ctx3.beginPath();
    ctx3.arc(150, 150, 20 + 20 * i, 0, Math.PI * 2, true);
    ctx3.fill();
  }
  

  // Canvas 4

  const lineJoin = ['round', 'bevel', 'miter'];
  ctx4.lineWidth = 20;
  for(let i = 0; i < lineJoin.length; i++){
    ctx4.lineWidth = 20 + i;
    ctx4.lineJoin = lineJoin[i];
    ctx4.beginPath();
    ctx4.moveTo(-10, 10 + i * 80);
    ctx4.lineTo(70, 90 + i * 80);
    ctx4.lineTo(150, 10 + i * 80);
    ctx4.lineTo(230, 90 + i * 80);
    ctx4.lineTo(310, 10 + i * 80);
    ctx4.stroke();
  }

  // Canvas 5

  ctx5.font = '48px serif';
  ctx5.fillText('Hello there!', 35, 125);
  ctx5.font = '48px serif';
  ctx5.strokeText('Hello there!', 35, 200);

};

// Canvas 6
const rect = (_x,_y) => {
  const canvas6 = document.getElementById('example6');
  const ctx6 = canvas6.getContext('2d');

  ctx6.fillStyle = 'green';
  ctx6.clearRect(0, 0, 600, 600);
  ctx6.fillRect(_x, _y, 50, 50);
}
const moveRectX = (a, b, c, d) => {
  intervalId = 0;
  intervalId = setInterval(() => {
    a += c;
    b += d;
    return rect(a,b);
  }, 100);
}

window.addEventListener('load', draw);
window.addEventListener('load', moveRectX(0, 0, 1, 0));

