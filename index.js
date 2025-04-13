var num=document.querySelectorAll(".drum");
for (var i=0; i<num.length; i++){
    num[i].addEventListener("click",function(){
        
        var butt = this.innerHTML;
        makeSound(butt);
        buttonAnimation(butt);

        

    });
};


document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key){
    switch (key) {
        case "w":
            var aud1=new Audio('sounds/crash.mp3');
            aud1.play();
            break;

        case "a":
            var aud2=new Audio('sounds/kick-bass.mp3');
            aud2.play();
            break;

        case "s":
            var aud3=new Audio('sounds/snare.mp3');
            aud3.play();
            break;

        case "d":
            var aud4=new Audio('sounds/tom-1.mp3');
            aud4.play();
            break;

        case "j":
            var aud5=new Audio('sounds/tom-2.mp3');
            aud5.play();
            break;

        case "k":
            var aud6=new Audio('sounds/tom-3.mp3');
            aud6.play();
            break;

        case "l":
            var aud7=new Audio('sounds/tom-4.mp3');
            aud7.play();
            break;
    
        default:console.log(key)
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}





