class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(100,300);
    player1.addImage("player1",player1_img);
    player1.scale=0.4;
    
    player2 = createSprite(1300,300);
    player2.addImage("player2", player2_img);
    player2.scale=0.4;

    rock= createSprite(400,350);
    rock.addImage("rock",rockImg);
    rock.scale=0.3;

    paper= createSprite(750,350);
    paper.addImage("paper",paperImg);
    paper.scale=0.3;

    scissors= createSprite(1100,350);
    scissors.addImage("scissors",scissorsImg);
    scissors.scale=0.3;

    players=[player1,player2];
    //player1.collide(player2);
    //player2.collide(player1);
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1400, 700);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     if(index-1<2){
                     x = 200-allPlayers[plr].distance;
                     y=500;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                         textSize(20);
                         text(allPlayers[plr].name ,x-25,y+25);
                     }
                    if(player1.isTouching(rock)&& player2.isTouching(paper)){
                        paper.scale= 0.5;
                        scissors.scale=0.3;
                        rock.scale=0.3;
                        //if(rock === rock||paper === paper||scissors === scissors){
                        fill("yellow");
                         textSize(40);
                         //font("Stencil");
                         text("YOU ARE WRAPPED",550,200);
                         sound.play();

                        }

                        if(player1.isTouching(paper)&& player2.isTouching(scissors)){
                            scissors.scale= 0.5;
                            rock.scale=0.3;
                            paper.scale=0.3;
                            //if(rock === rock||paper === paper||scissors === scissors){
                            fill("yellow");
                             textSize(40);
                             text(" YOU ARE CHOPPED",550,200);
                             sound.play();
    
                            }

                            if(player1.isTouching(scissors)&& player2.isTouching(rock)){
                                rock.scale= 0.5;
                                paper.scale=0.3;
                                scissors.scale=0.3;
                                //if(rock === rock||paper === paper||scissors === scissors){
                                fill("yellow");
                                 textSize(40);
                                 font("cantal");
                                 text("HITTED HARDLY",550,200);
                                 sound.play();
        
                                }

                                if(player1.isTouching(paper)&& player2.isTouching(paper)){
                                    //scissors.scale= 0.7;
                                    //if(rock === rock||paper === paper||scissors === scissors){
                                    rock.scale= 0.3;
                                    paper.scale=0.3;
                                    scissors.scale=0.3;
                                    fill("yellow");
                                     textSize(40);
                                     text("MATCH DRAWN",550,200);
                                     sound.stop();
            
                                    }

                                    if(player1.isTouching(scissors)&& player2.isTouching(scissors)){
                                        //scissors.scale= 0.7;
                                        //if(rock === rock||paper === paper||scissors === scissors){
                                            rock.scale= 0.3;
                                            paper.scale=0.3;
                                            scissors.scale=0.3;
                                        fill("yellow");
                                         textSize(40);
                                         text("MATCH DRAWN",550,200);
                                         sound.stop();
                
                                        }

                                        if(player1.isTouching(rock)&& player2.isTouching(rock)){
                                           // scissors.scale= 0.7;
                                            //if(rock === rock||paper === paper||scissors === scissors){
                                                rock.scale= 0.3;
                                                paper.scale=0.3;
                                                scissors.scale=0.3;
                                            fill("yellow");
                                             textSize(40);
                                             text("MATCH DRAWN",550,200);
                                             sound.stop();
                    
                                            }

                                            if(player1.isTouching(rock)&& player2.isTouching(scissors)){
                                                rock.scale= 0.5;
                                                paper.scale=0.3;
                                                scissors.scale=0.3;
                                                //if(rock === rock||paper === paper||scissors === scissors){
                                                fill("yellow");
                                                 textSize(40);
                                                 text("HITTED HARDLY",550,200);
                                                 sound.play();
                        
                                                }
                                                

                                                if(player1.isTouching(paper)&& player2.isTouching(rock)){
                                                    paper.scale= 0.5;
                                                    rock.scale=0.3;
                                                    scissors.scale=0.3;
                                                    //if(rock === rock||paper === paper||scissors === scissors){
                                                    fill("yellow");
                                                     textSize(40);
                                                     text("YOU ARE WRAPPED",550,200);
                                                     sound.play();
                            
                                                    }

                                                    if(player1.isTouching(scissors)&& player2.isTouching(paper)){
                                                        scissors.scale= 0.5;
                                                        rock.scale=0.3
                                                        paper.scale=0.3;
                                                        //if(rock === rock||paper === paper||scissors === scissors){
                                                        fill("yellow");
                                                         textSize(40);
                                                         text("YOU ARE CHOPPED",550,200);
                                                         sound.play();
                                
                                                        }
                                            

                                        

                       /* if(mousePressedOver(rock)&&mousePressedOver(scissors)){
                           rock .scale= 0.7;
                            //if(rock === rock||paper === paper||scissors === scissors){
                            fill("yellow");
                             textSize(20);
                             text("HITTED HARDLY!!",700,350);
    
                            }

                            if(mousePressedOver(scissors)&&mousePressedOver(paper)){
                                scissors.scale= 0.7;
                                //if(rock === rock||paper === paper||scissors === scissors){
                                fill("yellow");
                                 textSize(20);
                                 text("YOU ARE CHOPPED",700,350);
        
                                }

                                if(mousePressedOver(rock)&&mousePressedOver(paper)){
                                    paper.scale= 0.7;
                                    //if(rock === rock||paper === paper||scissors === scissors){
                                    fill("yellow");
                                     textSize(20);
                                     text("YOU ARE WRAPPED!!",700,350);
            
                                    }
                        if(rock === scissors){
                            fill("yellow");
                             textSize(20);
                             text("Hitted hardly",700,350);
    
                            }  
                            
                            if(rock === paper){
                                fill("yellow");
                                 textSize(20);
                                 text("You are Wrapped!!",700,350);
        
                                }

                                if(paper === scissors){
                                    fill("yellow");
                                     textSize(20);
                                     text("You are Cut!!",700,350);
            
                                    }*/


                    
                            

                    }
                     
                    /* if (mousePressedOver(player1) && player.index !== null) {
                        player1.x = mouseX
                        player1.y= mouseY
                        player.update();
                    }

                    if (mousePressedOver(player2) && player.index !== null) {
                        player2.x = mouseX
                        player2.y= mouseY
                        player.update();
                    }*/


                    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                        player.distance += 10
                        player.update();
                    }
                    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
                        player.distance -=10
                        player.update();
                      }

                    /*if (keyIsDown(UP_ARROW) && player.index !== null) {
                        player.distance -= 10
                        player.update();
                    }
                    if(keyIsDown(DOWN_ARROW) && player.index !== null){
                        player.distance +=10
                        player.update();
                      }*/
                      
                    
                    

                    //}
                    
                  
                 
                
                
            
                   player.update();
                  
                 
                  }
    }

    end(){
       console.log("Game Ended");
    }
}
