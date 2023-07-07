function generateRandom(){
    var randomNumber1 = Math.random();
    randomNumber1*=6;
    randomNumber1 = Math.floor(randomNumber1)+1;
    return randomNumber1;
}
var x =generateRandom();
var y= generateRandom();
temp = document.querySelector("h1");
if(x==y) temp.innerHTML="Draw!";
else if(x>y) temp.innerHTML="Player1 Wins!"
else temp.innerHTML="Player2 Wins!";
dice1 = document.querySelector(".img1");
dice1.setAttribute("src","./images/dice"+x+".png");
dice2 = document.querySelector(".img2");
dice2.setAttribute("src","./images/dice"+y+".png");




