var canvas = new fabric.Canvas('myCanvas');
blockImageWidth = 30;
blockImageHeight = 30
playerX = 10
playerY = 10
var playerObject = ""
var blockImageObject = ""

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Image) {
        playerObject = Image;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Image) {
        blockImageObject = Image;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if (e.shiftKey == true && keypressed == '77') {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '87') {
        newImage("wall.jpg");
    }
    if (keypressed == '87') {
        newImage("wall.jpg");
    }
    if (keypressed == '71') {
        newImage("ground.png");
    }
    if (keypressed == '76') {
        newImage("light_green.png");
    }
    if (keypressed == '84') {
        newImage("trunk.jpg");
    }
    if (keypressed == '82') {
        newImage("roof.jpg");
    }
    if (keypressed == '89') {
        newImage("yellow_wall.png");
    }
    if (keypressed == '68') {
        newImage("dark_green.png");
    }
    if (keypressed == '85') {
        newImage("unique.png");
    }
    if (keypressed == '67') {
        newImage("cloud.jpg");
    }
}

function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        console.log("blockImageHeight=" + blockImageHeight);
        console.log("when up arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + blockImageHeight;
        console.log("blockImageHeight=" + blockImageHeight);
        console.log("when down arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockImageWidth;
        console.log("blockImageWidth=" + blockImageWidth);
        console.log("when left arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if (playerX <= 850) {
        playerX = playerX + blockImageWidth;
        console.log("blockImageWidth=" + blockImageWidth);
        console.log("when right arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}