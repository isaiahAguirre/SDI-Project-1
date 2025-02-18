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