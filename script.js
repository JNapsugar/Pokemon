
//#region Cards

const potion = {card_type:"potion", name:"Potion"}
const switchActive = {card_type:"switch", name:"Switch"}
//#region Grass deck
const Bulbasaur = {card_type:"BasicPokemon", name:"Bulbasaur", hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Vine Whip", skill2_dmg:"30", skill2_cost:"2", evolution:"Ivysaur", dmgCoins:[]};
const Ivysaur = {card_type:"Stage1Pokemon", name:"Ivysaur", hp:100, skill1_name:"Vine Whip", skill1_dmg:"30", skill1_cost:"3", skill2_name:"Razor Leaf", skill2_dmg:"60", skill2_cost:"3", dmgCoins:[]};
const Oddish = {card_type:"BasicPokemon", name:"Oddish", hp:50, skill1_name:"Absorb", skill1_dmg:"10", skill1_cost:"1", skill1_spec: "heal", skill1_spec_amount: 10 ,evolution:"Gloom", dmgCoins:[]};
const Gloom = {card_type:"Stage1Pokemon", name:"Gloom", hp:90, skill1_name:"Mega Drain", skill1_dmg:"60", skill1_cost:"2", skill1_spec_amount: 20, dmgCoins:[]};
const Exeggcute = {card_type:"BasicPokemon", name:"Exeggcute", hp:60, skill1_name:"Rollout", skill1_dmg:"40", skill1_cost:"2", evolution:"Exeggutor", dmgCoins:[]};
const Exeggutor = {card_type:"Stage1Pokemon", name:"Exeggutor", hp:120, skill1_name:"Seed Bomb", skill1_dmg:"40", skill1_cost:"2", skill2_name:"Barrage Impact", skill2_dmg:"80", skill2_cost:"3", dmgCoins:[]};
const Scyther = {card_type:"BasicPokemon", name:"Scyther", hp:80, skill1_name:"X-Scissor", skill1_dmg:"20", skill1_cost:"1", skill1_spec: "coinFlipDmg", skill1_spec_amount: 40, dmgCoins:[]};
const GrassEnergy = {card_type:"energy", type:"grass", name:"BasicGrassEnergy"}
let GrassDeck = [Bulbasaur, Ivysaur, Ivysaur, Oddish, Oddish, Gloom, Exeggcute, Exeggcute, Exeggutor, Scyther, GrassEnergy, GrassEnergy, GrassEnergy, potion, switchActive]
//#endregion

//#region Lightning deck
const Pikachu = {card_type:"BasicPokemon", name:"Pikachu", hp:70, skill1_name:"Quick Attack", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Electro Ball", skill2_dmg:"30", skill2_cost:"2", evolution:"Raichu", dmgCoins:[]};

const LightningEnergy = {card_type:"energy", type:"lightning"}
//let LightningDeck = [Pikachu, Raichu, Raichu, Magnemite, Magnemite, Magneton, Voltorb, Voltorb, Electrode, Electabuzz, LightningEnergy, LightningEnergy, LightningEnergy, potion, switchActive]
//#endregion

//#endregion

//#region Players
let player1 = {
    deckType : "",
    deck : [],
    activePokemon : "",
    bench : ["","",""],
    energy : 1,
    prize : 0,
    hand : []
}

let player2 = {
    deckType : "",
    deck : [],
    activePokemon : "",
    bench : ["","",""],
    energy : 1,
    prize : 0,
    hand : []
}
//#endregion

//#region Deck választás, tábla felallitas
let decks = document.getElementsByClassName("DeckPickerBtn")
for (let i = 0; i < decks.length; i++) {
    decks[i].addEventListener("click", Deck); 
}


let player1Picked = false
function Deck(){
    if (!player1Picked) {
        player1.deckType =  this.id.replace("PickBtn","")
        //player1.deck = this.id.replace("PickBtn","Deck") 
        player1.deck = [...GrassDeck]
        document.getElementById("container").innerHTML=`
        <h1 id="DeckPickerTitle">2. játékos választ paklit</h1>
        <div id="DeckPicker">
            <div><img src="./Img/Types/grass.jpg"><h2>Grass</h2>
                <button class="DeckPickerBtn" id="GrassPickBtn">Választás</button><br><button class="ViewDeckBtn" id="GrassViewBtn">Kártyák megtekintése</button></div>
            <div><img src="./Img/Types/lightning.jpg"><h2>Lightning</h2>
                <button class="DeckPickerBtn" id="LightningPickBtn">Választás</button><br><button class="ViewDeckBtn" id="LightningViewBtn">Kártyák megtekintése</button></div>
            <div><img src="./Img/Types/water.jpg"><h2>Water</h2>
                <button class="DeckPickerBtn" id="WaterPickBtn">Választás</button><br><button class="ViewDeckBtn" id="WaterViewBtn">Kártyák megtekintése</button></div>
            <div><img src="./Img/Types/fire.jpg"><h2>Fire</h2>
                <button class="DeckPickerBtn" id="FirePickBtn">Választás</button><br><button class="ViewDeckBtn" id="FireViewBtn">Kártyák megtekintése</button></div>
        </div>`
        player1Picked = true
        let decks = document.getElementsByClassName("DeckPickerBtn")
        for (let i = 0; i < decks.length; i++) {
        decks[i].addEventListener("click", Deck); }
    }
    else{
        player2.deckType =  this.id.replace("PickBtn","")
        player2.deck = [...GrassDeck]
        document.getElementById("container").innerHTML= `<div id="board">
            <div id="waitingSide">
            <div class="hand" id="WaitingHand"></div>
                <div class="benchRow">
                    <div class="bench"></div>
                    <div class="bench"></div>
                    <div class="bench"></div>
                    <div class="discardPile"></div>
                </div>
                <div class="activeRow">
                    <div class="prizes" id="WaitingSidePrizes"></div>
                    <div class="activePokemon" id="WaitingSidePokemon"></div>
                    <div class="energy" id="WaitingSideEnergy"></div>
                    <div class="deck" id="WaitingSideDeck"></div>
                </div>
            </div>
        <hr>
            <div id="activeSide">
                <div class="hand" id="ActiveHand">
                <button id="EndTurnBtn">Kör vége</button><br></div>
                <div class="activeRow">
                    <div class="prizes" id="ActiveSidePrizes"></div>
                    <div class="activePokemon" id="ActiveSidePokemon"></div>
                    <div class="energy" id="ActiveSideEnergy"></div>
                    <div class="deck" id="ActiveSideDeck"></div>
                </div>
                <div class="benchRow">
                    <div class="bench" id="ActiveBench1"></div>
                    <div class="bench" id="ActiveBench2"></div>
                    <div class="bench" id="ActiveBench3"></div>
                    <div class="discardPile"></div>
                </div>
            </div>
            </div>`
        StartRound()
    }
}

//#endregion

//#region Kör
let turns = 1;
function StartRound(){

        if (turns%2 == 1) {
            
            document.getElementById("activeSide").style.backgroundColor = "lightskyblue"
            document.getElementById("waitingSide").style.backgroundColor = "lightcoral"
            if (turns == 1) {
               Setup(player1);
            }
            else{
                Turn(player1,player2)
            }
            
        }
        else{
            document.getElementById("activeSide").style.backgroundColor = "lightcoral"
            document.getElementById("waitingSide").style.backgroundColor = "lightskyblue"
            if (turns == 2) {
                Setup(player2);
            }
            else{
                Turn(player2,player1)
            }
        }
        turns++;
        document.getElementById("EndTurnBtn").onclick = StartRound
}
//#endregion

//#region setup
function Setup(player) {
    player.activePokemon = player.deck[0]
    document.getElementById("ActiveHand").innerHTML = '<button id="EndTurnBtn">Kör vége</button><br>'
    document.getElementById("ActiveSidePokemon").style.backgroundImage = `url(./Img/Cards/${player.deckType}/${player.deck[0].name}.jpg)`;
    document.getElementById("ActiveSideEnergy").innerHTML = `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${player.deckType}/Basic${player.deckType}Energy.jpg">`;
    document.getElementById("ActiveSideDeck").style.backgroundImage = `url(./Img/Cardback.jpg)`;
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * player.deck.length);
        player.hand.push(player.deck[random]);
        document.getElementById("ActiveHand").innerHTML += `<img src="./Img/Cards/${player.deckType}/${player.deck[random].name}.jpg">`;
        player.deck.splice(random, 1);
    }
}
//#endregion

function Turn(actingPlayer, waitingPlayer) {
    //#region Tábla megforditas

    //Aktiv jatekos
    document.getElementById("ActiveHand").innerHTML = '<button id="EndTurnBtn">Kör vége</button><br>'
    for (let i = 0; i < actingPlayer.hand.length; i++) {
        document.getElementById("ActiveHand").innerHTML += `<img src="./Img/Cards/${actingPlayer.deckType}/${actingPlayer.hand[i].name}.jpg">`;  
    }
    for (let i = 0; i < 3; i++) {
        if (actingPlayer.bench[i] != "") {
            document.getElementById(`ActiveBench${i+1}`).backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${actingPlayer.bench[i].name}.jpg)`;
        } 
    }
    document.getElementById("ActiveSideEnergy").innerHTML = ""
    for (let i = 0; i < actingPlayer.energy; i++) {
        document.getElementById("ActiveSideEnergy").innerHTML += `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${actingPlayer.deckType}/Basic${actingPlayer.deckType}Energy.jpg">`;
    }
    document.getElementById("ActiveSidePokemon").style.backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${actingPlayer.activePokemon.name}.jpg)`;

    //Várakozó játékos
    document.getElementById("WaitingSideDeck").style.backgroundImage = `url(./Img/Cardback.jpg)`;
    for (let i = 0; i < waitingPlayer.hand.length; i++) {
        document.getElementById("WaitingHand").innerHTML += `<img src="./Img/Cardback.jpg">`;  
    }
    for (let i = 0; i < 3; i++) {
        if (waitingPlayer.bench[i] != "") {
            document.getElementById(`WaitingBench${i+1}`).backgroundImage = `url(./Img/Cards/${waitingPlayer.deckType}/${waitingPlayer.bench[i].name}.jpg)`;
        } 
    }
    document.getElementById("WaitingSideEnergy").innerHTML = ""
    for (let i = 0; i < waitingPlayer.energy; i++) {
        document.getElementById("WaitingSideEnergy").innerHTML += `<img class="WaitingPlacedEnergy PlacedEnergy" src="./Img/Cards/${waitingPlayer.deckType}/Basic${waitingPlayer.deckType}Energy.jpg">`;
    }
    document.getElementById("WaitingSidePokemon").style.backgroundImage = `url(./Img/Cards/${waitingPlayer.deckType}/${waitingPlayer.activePokemon.name}.jpg)`;
    //#endregion
}

