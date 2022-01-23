


var icon = document.getElementById("icon")

var song1 =document.getElementById("song1")
var song2 =document.getElementById("song2")
var song3 =document.getElementById("song3")
var song4 =document.getElementById("song4")
var song5 =document.getElementById("song5")
var song6 =document.getElementById("song6")
var items=[song1,song2,song3,song4,song5,song6]


var item = items[Math.floor(Math.random()*items.length)];



icon.onclick = function(){

    if(item.paused){
        item.play()
        icon.src="./pause.png"
     
    }
    else{
        item.pause()
        icon.src="./play.png"
    }

   
}