
async function pokemonArray (){

    return (fetch('https://pokeapi.co/api/v2/type/3?limit=150offset=0'))
    .then(response => response.json())
    .then(data => data.pokemon.map(x => x.pokemon));

}


let nameAndUrl = await pokemonArray();
let spriteURL = nameAndUrl.map(x => x.url).map(y => fetch(y).then(response => response.json()).then(data => data.sprites));

Promise.all(spriteURL).then(spriteURL => {
    for(let i = 0; i < spriteURL.length; i++)
    {
        if((spriteURL[i].front_default != null) && (spriteURL[i].back_default != null)) 
        {
            nameAndSprite.push({name: nameAndUrl[i].name, front: spriteURL[i].front_default, back: spriteURL[i].back_default});
 
        }

    }
})

let nameAndSprite = [];

console.log(nameAndSprite);


let crement = 0;

document.getElementById("buttonStart").addEventListener("click", ()=>{

    document.querySelector('#pokemon').src = nameAndSprite[crement].front
    document.getElementById("name").innerHTML = `${nameAndSprite[crement].name}`;

})

document.getElementById("buttonOnward").addEventListener("click", ()=>{

    let charCreate = document.getElementById("charSelect");
    let gameMain = document.getElementById("mainGame");
    document.getElementById("startBGM").pause();
    document.getElementById("mainBGM").play();
    document.getElementById("selectedPokeFront").src = nameAndSprite[crement].front;
    document.getElementById("selectedPokeBack").src = nameAndSprite[crement].back;
    document.getElementById("selectedPokeBack").style.display = 'block';
    document.getElementById("background-png").style.display = 'block';
    document.getElementById("castle-png").style.display = 'block';
    document.getElementById("cave-png").style.display = 'block';
    document.getElementById("moon-png").style.display = 'block';
    console.log("played2");
    if(charCreate.style.display !== "none")
    {
        gameMain.style.display = "block";
        charCreate.style.display = "none";
    }
})

document.getElementById("buttonFacing").addEventListener("click", () => {
    if(document.querySelector('#pokemon').src == nameAndSprite[crement].front)
    {
        document.querySelector('#pokemon').src =nameAndSprite[crement].back;

    } else if (document.querySelector('#pokemon').src == nameAndSprite[crement].back)
    {
        document.querySelector('#pokemon').src =nameAndSprite[crement].front;
    };

});
document.getElementById("buttonF").addEventListener("click", () => {
    crement += 1;
    document.querySelector('#pokemon').src =nameAndSprite[crement].front;
    document.getElementById("name").innerHTML = `${nameAndSprite[crement].name}`;
});
document.getElementById("buttonB").addEventListener("click", () => {
    if(crement != 0)
    {
        crement -=1;
        document.querySelector('#pokemon').src =nameAndSprite[crement].front;
        document.getElementById("name").innerHTML = `${nameAndSprite[crement].name}`;
    }

});



//Ok so we got the name and link - now we gotta go into the link and get the urls for the sprites we wanna use. Then we probably push into an array with pokemon name + sprite urls and go from there