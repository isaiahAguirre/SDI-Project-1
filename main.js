var key = false;

//audio
document.getElementById("buttonStart").addEventListener("click", ()=>{
    document.getElementById("falcon").play();
    let start = document.getElementById("startScreen");
    let charCreate = document.getElementById("charSelect");


    if(start.style.display === "none")
    {
        start.style.display = "block";
        charCreate.style.display = "none";
    } else{
        start.style.display = "none";
        charCreate.style.display = "block";
    }
    console.log("played");
})

document.getElementById("buttonBack").addEventListener("click", ()=>{
    document.getElementById("falcon").play();
    let start = document.getElementById("startScreen");
    let charCreate = document.getElementById("charSelect");
    if(start.style.display === "none")
    {
        start.style.display = "block";
        charCreate.style.display = "none";
    } else{
        start.style.display = "none";
        charCreate.style.display = "none";
    }
    console.log("played");
})

document.getElementById("castle-png").addEventListener("click", ()=>{

    let castle = document.getElementById("castle");
    let gameMain = document.getElementById("mainGame");
    let notif = document.getElementById("lockedNotif");
    if(key === true){
        document.getElementById("castle-interior-png").style.display = 'block';
        document.getElementById("selectedPokeFront").style.display = 'block';
        document.getElementById("selectedPokeFront").style.left = '59%';
        document.getElementById("selectedPokeFront").style.top = '80%';
        document.getElementById("win-png").style.display = 'block';
    
        if(gameMain.style.display !== "none")
        {
            gameMain.style.display = "none";
            castle.style.display = "block";
        }
    } else{
        notif.style.display='block';
        notif.style.animation='goUP 2s ease-in-out forwards';
    }

    notif.onanimationend = ()=>{
        notif.style.display='none';
        notif.style.animation='none';
    }

})


document.getElementById("cave-png").addEventListener("click", ()=>{

    let cave = document.getElementById("cave");
    let gameMain = document.getElementById("mainGame");

    document.getElementById("cave-interior-png").style.display = 'block';

    if(key !== true){
        document.getElementById("chest-png").style.display = 'block';
    }
    
    document.getElementById("selectedPokeFront").style.display = 'block';
    document.getElementById("back-to-main").style.display = 'block';



    gameMain.style.display = "none";
    cave.style.display = "block";



})

document.getElementById("back-to-main").addEventListener("click", ()=>{

    let cave = document.getElementById("cave");
    let gameMain = document.getElementById("mainGame");
    let castle = document.getElementById("castle");
    let notif = document.getElementById("keyNotif");

    notif.style.animation='none';
    notif.style.display='none';

    document.getElementById("selectedPokeFront").style.display = 'none';
    document.getElementById("back-to-main").style.display = 'none';

    gameMain.style.display = "block";
    cave.style.display = "none";
    castle.style.display = "none";




})

document.getElementById("chest-png").addEventListener("click", ()=>{

    let chest = document.getElementById("chest-png");
    let notif = document.getElementById("keyNotif");
    document.getElementById("keyGet").play();
    chest.style.display='none';
    notif.style.display='block';
    notif.style.animation='goUP 2s ease-in-out forwards';
    key = true;


})

document.getElementById("win-png").addEventListener("click", ()=>{

    let start = document.getElementById("startScreen");
    let castle = document.getElementById("castle");

    start.style.display = 'block';
    castle.style.display = 'none';
    document.getElementById("selectedPokeFront").style.display = 'none';
    key = false;


})