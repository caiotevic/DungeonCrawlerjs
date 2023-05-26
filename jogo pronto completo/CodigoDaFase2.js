

document.addEventListener("DOMContentLoaded", function() {
  var playerImg = new Image();
  playerImg.src = 'scottcorrendo.gif';  
  var espinhos = new Image();
  espinhos.src = 'espinhodentrodojogo.png'; 
  var portaA = new Image();
  portaA.src = 'portaaberta.png'; 
  var portaF = new Image();
  portaF.src = 'porta.jpg'; 
  var chave = new Image();
  chave.src = 'chavedentrodojogo.png';
  var botao = new Image();
  botao.src = 'botaodentrodojogo.png';
  var portal = new Image();
  portal.src = 'portal.gif';
  
  var vidas = 2;
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    const matriz = [
      ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
      ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
      ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "O", " ", "*"],
      ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
      ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", "#", "*", " ", " ", " ", " ", " ", "*", " ", "@", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", "#", " ", "#", "#", "#", "#", "#", " ", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", "#", "#", "#", "#", "#", "#", "#", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "#", "#", "*", "#", "#", " ", "#", "#", "#", "#", "#", "#", "#", "#", "#", " ", "#", "#", "*"],
      ["*", " ", "#", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", "#", "#", "*", "*", "*", "#", "#", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", "#", "#", " ", "*", "#", "#", " ", "#", "#", "#", "*", "*", "*", "#", "#", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", "#", "#", "*", "*", "*", "#", "#", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "#", "#", "*", "#", "#", " ", "#", "#", "#", "*", "D", "*", "#", "#", "#", " ", "#", "#", "*"],
      ["*", " ", "#", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", "#", "#", "#", " ", "#", "#", "#", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", "#", "#", " ", "*", "#", "#", " ", "#", " ", " ", " ", " ", " ", " ", " ", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "#", "#", "*", "#", "#", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", " ", "#", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", "#", "#", " ", "*", "#", "#", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "#", "#", "*", "#", "#", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", " ", "#", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", "#", "#", " ", "*", "#", "#", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "#", "#", "*", "#", "#", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", " ", "#", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", "*", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "*"],
      ["*", " ", " ", " ", " ", "#", " ", " ", " ", "#", " ", " ", " ", "#", " ", " ", " ", "#", " ", "#", " ", " ", " ", "#", " ", "#", " ", "#", "#", "*"],
      ["*", "#", " ", "#", " ", " ", " ", "#", " ", " ", " ", "#", " ", " ", " ", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
      ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ];
  
   

    const cellWidth = canvas.width / 30;
    const cellHeight = canvas.height / 30;
  
    function drawMatrix() {
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
          const cell = matriz[i][j];
          ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);
          if(cell === "D"){
            ctx.drawImage(portaF, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
          }
          if(cell === "#"){
            ctx.drawImage(espinhos, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
          }
          if(cell === "O"){ 
            ctx.drawImage(botao, j * cellWidth, i * cellHeight, cellWidth, cellHeight);
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
            
            const portax = 21;
            const portay = 13;
            const chavex = 11;
            const chavey = 6;
            
            matriz[portay][portax] = "=";
            matriz[chavey][chavex] = " ";
          }
          if (matriz[player.y][player.x] === "O") {
            
            const abreparedex = 2;
            const abreparedey = 4;
            
            matriz[abreparedey][abreparedex] = " ";
          }
          break;
  
      }
  
     
      if (matriz[nextY][nextX] === "*" || matriz[nextY][nextX] === "D") {
        return;
      }

      
      if (matriz[nextY][nextX] === "=") {
        window.location.href = 'TelaFase3.html';
        
      }
      
   
      player.x = nextX;
      player.y = nextY;
  
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
   
      drawMatrix();

   
    ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);

      
      
      if (matriz[nextY][nextX] === "#") {
        if (vidas === 0) {
          alert("voce gastou todas as suas chances");
            window.location.href = 'gameover.html';
        }
        else{
           
            alert("voce perdeu uma vida");
            player.y=2;
            player.x=2;
            vidas--;
            
        }
            
      }
    }
  
    document.addEventListener("keydown", movePlayer);
  
  
    drawMatrix();
   
    ctx.drawImage(playerImg, player.x * cellWidth, player.y * cellHeight, cellWidth, cellHeight);
  })
  
  