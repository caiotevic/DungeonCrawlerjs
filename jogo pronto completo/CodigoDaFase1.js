


document.addEventListener("DOMContentLoaded", function() {
  
  var playerImg = new Image();
  playerImg.src = 'scottcorrendo.gif';
  var chave = new Image();
  chave.src = 'chavedentrodojogo.png';
  var portaA = new Image();
  portaA.src = 'portaaberta.png'; 
  var portaF = new Image();
  portaF.src = 'porta.jpg'; 

  var vidas = 2;
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const matriz = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", "*", " ", "*", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", "*"],
    ["*", "*", "D", "*", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", "#", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", "#", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "@", " ", "*"],
    ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ];

  const cellWidth = canvas.width / 15;
  const cellHeight = canvas.height / 15;

  function drawMatrix() {
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        const cell = matriz[i][j];
        ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);
        if(cell === "D"){
          ctx.drawImage(portaF, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
        if(cell === "="){
          ctx.drawImage(portaA, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
        if(cell === "@"){
          ctx.drawImage(chave, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
        if (cell === "*") {
          ctx.fillStyle = "black";
          ctx.fillText("*", j * cellWidth, i * cellHeight + cellHeight);
        } else if (cell === " ") {
          ctx.fillStyle = "white";
          ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
      }
    }
  }

 
  const player = {
    x: 2,
    y: 2
  };

 
  function movePlayer(event) {
    let nextX = player.x;
    let nextY = player.y;

    switch (event.key) {
      case "w":
        nextY = player.y - 1;
        break;
      case "s":
        nextY = player.y + 1;
        break;
      case "a":
        nextX = player.x - 1;
        break;
      case "d":
        nextX = player.x + 1;
        break;
      case "i":
        if (matriz[player.y][player.x] === "@") {
          
          const portax = 2;
          const portay = 5;
          const chavex = 12;
          const chavey = 12;


          matriz[portay][portax] = "=";
          matriz[chavey][chavex] = " ";
        }
        break;

    }

   
    if (matriz[nextY][nextX] === "*" || matriz[nextY][nextX] === "D") {
      return; 
    }
    if (matriz[nextY][nextX] === "=") {
      window.location.href = 'TelaFase2.html';
      
    }

  
    player.x = nextX;
    player.y = nextY;


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMatrix();

   
    ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);


    
    
  }

  document.addEventListener("keydown", movePlayer);

  drawMatrix();

  ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);
});

