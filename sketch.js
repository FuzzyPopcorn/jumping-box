var canvas;
var music;
var box
var tile1
var tile2
var tile3
var tile4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    tile1 = createSprite(100, 575, 185, 25)
    tile1.shapeColor = "green"

    tile2 = createSprite(300, 575, 185, 25)
    tile2.shapeColor = "purple"

    tile3 = createSprite(500, 575, 185, 25)
    tile3.shapeColor = "blue"

    tile4 = createSprite(700, 575, 185, 25)
    tile4.shapeColor = "yellow"

    //create box sprite and give velocity
    box = createSprite(random(20,750), 450, 25, 25)
    box.shapeColor = "white"
    box.velocityX = -2
    box.velocityY = 2
}

function draw() {
    background("grey");

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
  

    //add condition to check if box touching surface and make it box

    if(box.y - tile1.y < box.height/2 + tile1.height/2){
       // box.velocityY = box.velocityY * (-1)
        //box.velocityX = box.velocityX * (-1)
    }

    if(box.isTouching(tile1)||box.isTouching(tile2)||box.isTouching(tile3)||box.isTouching(tile4)){
        if(box.isTouching(tile1)){
            box.velocityY = box.velocityY * (-1)
            box.shapeColor = "green"
        }
        else if(box.isTouching(tile2)){
            box.velocityY = box.velocityY * (-1)
            box.shapeColor = "purple"
            music.play();
        }
        else if(box.isTouching(tile3)){
            box.velocityY = box.velocityY * (-1)
            box.shapeColor = "blue"
        }
        else{
            box.shapeColor = "yellow"
            box.velocityX = 0;
            box.velocityY = 0;
            music.stop();
        }
    }

    drawSprites();
}
