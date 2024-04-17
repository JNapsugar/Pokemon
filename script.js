//#region Cards
//sorry, de nem látom át ezért kicsit tagolom, ha baj majd kitöröljük
const potion = {card_type:"potion", name:"Potion"}
const switchActive = {card_type:"switch", name:"Switch"}

//#region Grass deck
const Bulbasaur = {card_type:"BasicPokemon", name:"Bulbasaur", hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Vine Whip", skill2_dmg:"30", skill2_cost:"2", evolution:"Ivysaur", special_skill: false, place:"", dmgCoins:[]};

const Ivysaur = {card_type:"Stage1Pokemon", name:"Ivysaur", hp:100, skill1_name:"Vine Whip", skill1_dmg:"30", skill1_cost:"3", skill2_name:"Razor Leaf", skill2_dmg:"60", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Oddish = {card_type:"BasicPokemon", name:"Oddish", hp:50, skill1_name:"Absorb", skill1_dmg:"10", skill1_cost:"1", special_skill: true ,evolution:"Gloom", special_skill: false, place:"", dmgCoins:[]};

const Gloom = {card_type:"Stage1Pokemon", name:"Gloom", hp:90, skill1_name:"Mega Drain", skill1_dmg:"60", skill1_cost:"2", special_skill: true, special_skill: false, place:"", dmgCoins:[]};

const Exeggcute = {card_type:"BasicPokemon", name:"Exeggcute", hp:60, skill1_name:"Rollout", skill1_dmg:"40", skill1_cost:"2", evolution:"Exeggutor", special_skill: false, place:"", dmgCoins:[]};

const Exeggutor = {card_type:"Stage1Pokemon", name:"Exeggutor", hp:120, skill1_name:"Seed Bomb", skill1_dmg:"40", skill1_cost:"2", skill2_name:"Barrage Impact", skill2_dmg:"80", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Scyther = {card_type:"BasicPokemon", name:"Scyther", hp:80, skill1_name:"X-Scissor", skill1_dmg:"20", skill1_cost:"1", special_skill: true, place:"", dmgCoins:[]};

const GrassEnergy = {card_type:"energy", type:"grass", name:"BasicGrassEnergy"}

var GrassDeck = [Bulbasaur, Ivysaur, {...Ivysaur}, Oddish, {...Oddish}, Gloom, Exeggcute, {...Exeggcute}, Exeggutor, Scyther, GrassEnergy, GrassEnergy, GrassEnergy, potion, switchActive]
// fuj var
//#endregion


//#region Lightning deck
const Pikachu = {card_type:"BasicPokemon", name:"Pikachu", hp:70, skill1_name:"Quick Attack", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Electro Ball", skill2_dmg:"30", skill2_cost:"2", evolution:"Raichu", special_skill: false, place:"", dmgCoins:[]};

const Raichu = {card_type:"Stage1Pokemon", name:"Raichu", hp:100, skill1_name:"Electro Ball", skill1_dmg:"30", skill1_cost:"1", skill2_name:"Thunder", skill2_dmg:"60", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Magnemite = {card_type:"BasicPokemon", name:"Magnemite", hp:60, skill1_name:"Thunder Shock", skill1_dmg:"20", skill1_cost:"1", evolution:"Magneton", special_skill: false, place:"", dmgCoins:[]};

const Magneton = {card_type:"Stage1Pokemon", name:"Magneton", hp:110, skill1_name:"Thunder Shock", skill1_dmg:"20", skill1_cost:"1", skill2_name:"Magnetic Circle" ,skill2_dmg:"20", skill2_cost:"2", special_skill: true, place:"", dmgCoins:[]};


const Voltorb = {card_type:"BasicPokemon", name:"Voltorb", hp:50, skill1_name:"Rollout", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Spark", skill2_dmg:"30", skill1_cost:"2" ,evolution:"Electrode", special_skill: false, place:"", dmgCoins:[]};

const Electrode = {card_type:"Stage1Pokemon", name:"Electrode", hp:80, skill1_name:"Speed Attack", skill1_dmg:"40", skill1_cost:"1", skill2_name:"Single Shot Blast", skill2_dmg:"120", skill2_cost:"3", special_skill: true, place:"", dmgCoins:[]};

const Electabuzz = {card_type:"BasicPokemon", name:"Electabuzz", hp:90, skill1_name:"Low Kick", skill1_dmg:"20", skill1_cost:"1",  skill2_name:"Electro Punch", skill2_dmg:"50", skill2_cost:"2", special_skill: false, place:"", dmgCoins:[]};

const LightningEnergy = {card_type:"energy", type:"lightning", name:"BasicLightningEnergy"}

var LightningDeck = [Pikachu, Raichu, {...Raichu}, Magnemite, {...Magnemite}, Magneton, Voltorb, {...Voltorb}, Electrode, Electabuzz, LightningEnergy, LightningEnergy, LightningEnergy, potion, switchActive]
//#endregion

//#region Fire deck
const Charmander = {card_type:"BasicPokemon", name:"Charmander", hp:70, skill1_name:"Scratch", skill1_dmg:"10", skill1_cost:"1",  skill2_name:"Ember", skill2_dmg:"30", skill2_cost:"2", evolution:"Charmeleon", special_skill: false, place:"", dmgCoins:[]};

const Charmeleon = {card_type:"Stage1Pokemon", name:"Charmeleon", hp:100, skill1_name:"Ember", skill1_dmg:"1", skill1_cost:"30", skill2_name:"Flamethrower", skill2_dmg:"60", skill2_cost:"3" ,special_skill: false, place:"", dmgCoins:[]};

const Vulpix = {card_type:"BasicPokemon", name:"Vulpix", hp:60, skill1_name:"Will-O-Wisp", skill1_dmg:"20", skill1_cost:"1", evolution:"Ninetales",special_skill: false, place:"", dmgCoins:[]};

const Ninetales = {card_type:"Stage1Pokemon", name:"Ninetales", hp:100, skill1_name:"Flame Tail", skill1_dmg:"70", skill1_cost:"2",special_skill: false, place:"", dmgCoins:[]};

const Growlithe = {card_type:"BasicPokemon", name:"Growlithe", hp:80, skill1_name:"Gnaw", skill1_dmg:"30", skill1_cost:"2", skill2_name:"Take Down", skill2_dmg:"50", skill2_cost:"3", evolution:"Arcanine",special_skill: false, place:"", dmgCoins:[]};
const Arcanine = {card_type:"Stage1Pokemon", name:"Arcanine", hp:140, skill1_name:"Flare Blitz", skill1_dmg:"90", skill1_cost:"3", special_skill: true, place:"", dmgCoins:[]};

const Magmar = {card_type:"BasicPokemon", name:"Magmar", hp:90, skill1_name:"Flare", skill1_dmg:"20", skill1_cost:"1",  skill2_name:"Magma Punch", skill2_dmg:"50", skill2_cost:"2", special_skill: false, place:"", dmgCoins:[]};

const FireEnergy = {card_type:"energy", type:"fire", name:"BasicFireEnergy"}

var FireDeck = [Charmander, Charmeleon, {...Charmeleon}, Vulpix, {...Vulpix}, Ninetales, Growlithe, {...Growlithe}, Arcanine, Magmar, FireEnergy, FireEnergy, FireEnergy, potion, switchActive]


//#endregion

//#region Water deck
const Squirtle = {card_type:"BasicPokemon", name:"Squirtle", hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1",  skill2_name:"Water Gun", skill2_dmg:"30", skill2_cost:"2", evolution:"Wartortle", special_skill: false, place:"", dmgCoins:[]};

const Wartortle = {card_type:"Stage1Pokemon", name:"Wartortle", hp:100, skill1_name:"Water Gun", skill1_dmg:"30", skill1_cost:"1", skill2_name:"Skull Bash", skill2_dmg:"60", skill2_cost:"3" ,special_skill: false, place:"", dmgCoins:[]};

const Poliwag = {card_type:"BasicPokemon", name:"Poliwag", hp:60, skill1_name:"Pound", skill1_dmg:"20", skill1_cost:"1", evolution:"Poliwhirl",special_skill: false, place:"", dmgCoins:[]};

const Poliwhirl = {card_type:"Stage1Pokemon", name:"Poliwhirl", hp:90, skill1_name:"Wave Splash", skill1_dmg:"50", skill1_cost:"1", special_skill: false, place:"", dmgCoins:[]};

const Magikarp = {card_type:"BasicPokemon", name:"Magikarp", hp:30, skill1_name:"Splash", skill1_dmg:"10", skill1_cost:"1", evolution:"Gyarados",special_skill: false, place:"", dmgCoins:[]};

const Gyarados = {card_type:"Stage1Pokemon", name:"Gyarados", hp:160, skill1_name:"Tail Smash", skill1_dmg:"90", skill1_cost:"3", skill2_name:"Hyper Beam", skill2_dmg:"120", skill2_cost:"4" ,special_skill: true, place:"", dmgCoins:[]};

const Lapras = {card_type:"BasicPokemon", name:"Lapras", hp:110, skill1_name:"Surf", skill1_dmg:"50", skill1_cost:"2", special_skill: false, place:"", dmgCoins:[]};

const WaterEnergy = {card_type:"energy", type:"water", name:"BasicWaterEnergy"}

var WaterDeck = [Squirtle, Wartortle,{...Wartortle}, Poliwag, {...Poliwag}, Poliwhirl, Magikarp, {...Magikarp}, Gyarados, Lapras, WaterEnergy, WaterEnergy, WaterEnergy, potion, switchActive]
//#endregion

const allDecks = [GrassDeck, LightningDeck, FireDeck, WaterDeck]
const deckTypes = ["Grass", "Lightning", "Fire", "Water"]
//#endregion

//#region Players
let player1 = {
    deckType : "",
    deck : [],
    activePokemon : "",
    bench : ["","",""],
    energy : 1,
    prize : 0,
    hand : [],
    discarded : []
}

let player2 = {
    deckType : "",
    deck : [],
    activePokemon : "",
    bench : ["","",""],
    energy : 1,
    prize : 0,
    hand : [],
    discarded : []
}
//#endregion

//#region Deck választás, tábla felállítás
let turns = 1;
let player1Picked = false
//let decks = document.getElementsByClassName("DeckPickerBtn")

const DeckPicker = document.getElementById("DeckPicker")
for (let i = 0; i < deckTypes.length; i++) {
    DeckPicker.innerHTML += `<div><img src="./Img/Types/${deckTypes[i].toLowerCase()}.jpg"><h2>${deckTypes[i]}</h2>
    <button onclick="Valaszt(${i})" class="DeckPickerBtn" id="${deckTypes[i]}PickBtn">Választás</button><br><button class="ViewDeckBtn" id="${deckTypes[i]}ViewBtn">Kártyák megtekintése</button></div>`

    function Valaszt(index) {
        if(!player1Picked) {
            player1Picked = true
            player1.deckType = deckTypes[index]
            player1.deck = [...allDecks[index]]
            document.getElementById("DeckPickerTitle").innerText = "2. játékos választ paklit"
        } else {
            player2.deckType = deckTypes[index]
            player2.deck = [...allDecks[index]]
            document.getElementById("container").innerHTML = GameBoard()
            StartRound()
        }
    }; 
}

function GameBoard() {
    
    return `<div id="board">
    <div id="waitingSide">
    <div class="hand" id="WaitingHand"></div>
        <div class="benchRow">
            <div class="bench" id="WaitingBench1"></div>
            <div class="bench" id="WaitingBench2"></div>
            <div class="bench" id="WaitingBench3"></div>
            <div class="discardPile"></div>
        </div>
        <div class="activeRow">
            <div class="prizes" id="WaitingSidePrizes"></div>
            <div class="activePokemon" id="WaitingSidePokemon"></div>
            <div class="energy" id="WaitingSideEnergy"></div>
            <div class="deck" id="WaitingSideDeck" id="WaitingSideDiscardPile"></div>
        </div>
    </div>
<hr>
    <div id="activeSide">
        <div class="hand">
        <button id="EndTurnBtn">Kör vége</button><br>
            <div id="ActiveHand">
            </div>
        </div>
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
            <div class="discardPile" id="ActiveSideDiscardPile"></div>
        </div>
    </div>
    </div>`
}
//#endregion

//#region Kör
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
    const ActiveHand = document.getElementById("ActiveHand")
    player.activePokemon = player.deck[0]
    ActiveHand.innerHTML = ''
    document.getElementById("ActiveSidePokemon").style.backgroundImage = `url(./Img/Cards/${player.deckType}/${player.deck[0].name}.jpg)`;
    document.getElementById("ActiveSideEnergy").innerHTML = `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${player.deckType}/Basic${player.deckType}Energy.jpg">`;
    document.getElementById("ActiveSideDeck").style.backgroundImage = `url(./Img/Cardback.jpg)`;
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * player.deck.length);
        player.hand.push(player.deck[random]);
        ActiveHand.innerHTML += `<img class="card" id="${player.deck[random].name}" src="./Img/Cards/${player.deckType}/${player.deck[random].name}.jpg">`;
        player.deck.splice(random, 1);
    }
}
//#endregion

function Turn(actingPlayer, waitingPlayer) {
    //#region Tábla megforditas

    //Aktiv jatekos
    const ActiveHand = document.getElementById("ActiveHand")
    ActiveHand.innerHTML = ''
    for (let i = 0; i < actingPlayer.hand.length; i++) {
        ActiveHand.innerHTML += `<img class="card" id="${actingPlayer.hand[i].name}" src="./Img/Cards/${actingPlayer.deckType}/${actingPlayer.hand[i].name}.jpg">`;  
    }
    for (let i = 0; i <= 2; i++) {
        if (actingPlayer.bench[i] != "") {
            document.getElementById(`ActiveBench${i+1}`).style.backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${actingPlayer.bench[i].name}.jpg)`;
            
        }
        else{
            document.getElementById(`ActiveBench${i+1}`).style.backgroundImage = ""; 
        }
    }
    const ActiveSideEnergy = document.getElementById("ActiveSideEnergy")
    ActiveSideEnergy.innerHTML = ""
    for (let i = 0; i < actingPlayer.energy; i++) {
        ActiveSideEnergy.innerHTML += `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${actingPlayer.deckType}/Basic${actingPlayer.deckType}Energy.jpg">`;
    }
    document.getElementById("ActiveSidePokemon").style.backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${actingPlayer.activePokemon.name}.jpg)`;

    let random = Math.floor(Math.random() * actingPlayer.deck.length);
        actingPlayer.hand.push(actingPlayer.deck[random]);
        ActiveHand.innerHTML += `<img class="card" id="${actingPlayer.deck[random].name}" src="./Img/Cards/${actingPlayer.deckType}/${actingPlayer.deck[random].name}.jpg">`;
        actingPlayer.deck.splice(random, 1);

    //Várakozó játékos
    document.getElementById("WaitingSideDeck").style.backgroundImage = `url(./Img/Cardback.jpg)`;
    const WaitingHand = document.getElementById("WaitingHand")
    WaitingHand.innerHTML = ``;
    for (let i = 0; i < waitingPlayer.hand.length; i++) {
        WaitingHand.innerHTML += `<img src="./Img/Cardback.jpg">`;  
    }
    for (let i = 0; i <= 2; i++) {
        if (waitingPlayer.bench[i] != "") {
            document.getElementById(`WaitingBench${i+1}`).style.backgroundImage = `url(./Img/Cards/${waitingPlayer.deckType}/${waitingPlayer.bench[i].name}.jpg)`;
        } 
        else{
            document.getElementById(`WaitingBench${i+1}`).style.backgroundImage = ``;
        }
    }
    const WaitingSideEnergy = document.getElementById("WaitingSideEnergy")
    WaitingSideEnergy.innerHTML = ""
    for (let i = 0; i < waitingPlayer.energy; i++) {
        WaitingSideEnergy.innerHTML += `<img class="WaitingPlacedEnergy PlacedEnergy" src="./Img/Cards/${waitingPlayer.deckType}/Basic${waitingPlayer.deckType}Energy.jpg">`;
    }
    document.getElementById("WaitingSidePokemon").style.backgroundImage = `url(./Img/Cards/${waitingPlayer.deckType}/${waitingPlayer.activePokemon.name}.jpg)`;
    //#endregion

    let cards = document.getElementsByClassName("card")
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", PlayCard); }

    function PlayCard() {
        let playable = false;
        switch (actingPlayer.hand.filter(x => x.name === this.id)[0].card_type) {
            case "energy":
                actingPlayer.energy++
                document.getElementById("ActiveSideEnergy").innerHTML += `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${actingPlayer.deckType}/Basic${actingPlayer.deckType}Energy.jpg">`;
                playable = true
                break;

            case "BasicPokemon":
                    let placed = false;
                    for (let i = 0; i < actingPlayer.bench.length; i++) {
                        if (actingPlayer.bench[i] === "") {
                            actingPlayer.bench[i] = actingPlayer.hand.filter(x => x.name === this.id)[0]
                            actingPlayer.bench[i].place = `Bench${i + 1}`;
                            document.getElementById(`ActiveBench${i + 1}`).style.backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${this.id}.jpg)`;
                            playable = true;
                            placed = true;
                            console.log(actingPlayer.bench);
                            break;
                        }
                    }

                    if (!placed) {
                        alert("Nincs üres bench");
                    }
                    break;

            case "Stage1Pokemon":
                    if(actingPlayer.bench.filter(x => x.evolution === this.id) || actingPlayer.activePokemon.evolution === this.id){
                        let BasicPokemons = actingPlayer.bench.filter(x => x.evolution === this.id)
                        let Stage1 = actingPlayer.hand.filter(x => x.name === this.id)[0]
                        console.log(BasicPokemons);
                        for (let i = 0; i < BasicPokemons.length; i++) {
                            const basicCard = document.getElementById(`Active${BasicPokemons[i].place}`)
                            basicCard.addEventListener("click", function(event) {
                                Evolve(Stage1, event.target, BasicPokemons[i].place)
                            }); 
                        }
                        
                    }
                break;
            default:
                break;

                
                
            
        }
        if (playable){
            actingPlayer.hand.splice(actingPlayer.hand.indexOf(actingPlayer.hand.filter(x => x.name === this.id)[0]),1)
            ActiveHand.innerHTML = ''

            for (let i = 0; i < actingPlayer.hand.length; i++) {
                ActiveHand.innerHTML += `<img class="card" id="${actingPlayer.hand[i].name}" src="./Img/Cards/${actingPlayer.deckType}/${actingPlayer.hand[i].name}.jpg">`;  
            }

            let cards = document.getElementsByClassName("card")

            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener("click", PlayCard);
            }
        }
        
    }
    
    function Evolve(Stage1, basicCard, place) {
        basicCard.innerHTML=`<img class="card animated" src="./Img/Cards/${actingPlayer.deckType}/${Stage1.name}.jpg">`
        actingPlayer.bench[place-1] = Stage1
        console.log(actingPlayer.bench[place-1]);
        playable = true;

    }
}

// // Easter Egg 
// setInterval(() => {
//     console.log(GrassDeck[0].name.toUpperCase());
//     let BULBASAUR = new Audio("Img/bulbasaur.mp3");
//     BULBASAUR.play()
// }, 1000);
