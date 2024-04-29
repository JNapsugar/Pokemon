//#region Cards
const potion = {card_type:"potion", name:"Potion"}
const switchActive = {card_type:"switch", name:"Switch"}

//#region Grass deck
const Bulbasaur = {card_type:"BasicPokemon", name:"Bulbasaur", starting_hp:70, hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Vine Whip", skill2_dmg:"30", skill2_cost:"2", evolution:"Ivysaur", special_skill: false, place:"", dmgCoins:[]};

const Ivysaur = {card_type:"Stage1Pokemon", name:"Ivysaur", starting_hp:100, hp:100, skill1_name:"Vine Whip", skill1_dmg:"30", skill1_cost:"1", skill2_name:"Razor Leaf", skill2_dmg:"60", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Oddish = {card_type:"BasicPokemon", name:"Oddish", starting_hp:50, hp:50, skill1_name:"Absorb", skill1_dmg:"10", skill1_cost:"1", skill2_name:"null", special_skill: true ,evolution:"Gloom", special_skill: false, place:"", dmgCoins:[]};

const Gloom = {card_type:"Stage1Pokemon", name:"Gloom", starting_hp:90, hp:90, skill1_name:"Mega Drain", skill1_dmg:"60", skill1_cost:"2", skill2_name:"null", special_skill: true, special_skill: false, place:"", dmgCoins:[]};

const Exeggcute = {card_type:"BasicPokemon", name:"Exeggcute", starting_hp:60, hp:60, skill1_name:"Rollout", skill1_dmg:"40", skill1_cost:"2", skill2_name:"null",evolution:"Exeggutor", special_skill: false, place:"", dmgCoins:[]};

const Exeggutor = {card_type:"Stage1Pokemon", name:"Exeggutor", starting_hp:120, hp:120, skill1_name:"Seed Bomb", skill1_dmg:"40", skill1_cost:"2", skill2_name:"Barrage Impact", skill2_dmg:"80", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Scyther = {card_type:"BasicPokemon", name:"Scyther", starting_hp:80, hp:80, skill1_name:"X-Scissor", skill1_dmg:"20", skill1_cost:"1", skill2_name:"null", special_skill: true, place:"", dmgCoins:[]};

const GrassEnergy = {card_type:"energy", type:"grass", name:"BasicGrassEnergy"}

var GrassDeck = [Bulbasaur, Ivysaur, {...Ivysaur}, Oddish, {...Oddish}, Gloom, Exeggcute, {...Exeggcute}, Exeggutor, Scyther, GrassEnergy, GrassEnergy, GrassEnergy, potion, switchActive]
// fuj var
//#endregion


//#region Lightning deck
const Pikachu = {card_type:"BasicPokemon", name:"Pikachu", starting_hp:70, hp:70, skill1_name:"Quick Attack", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Electro Ball", skill2_dmg:"30", skill2_cost:"2", evolution:"Raichu", special_skill: false, place:"", dmgCoins:[]};

const Raichu = {card_type:"Stage1Pokemon", name:"Raichu", starting_hp:100, hp:100, skill1_name:"Electro Ball", skill1_dmg:"30", skill1_cost:"1", skill2_name:"Thunder", skill2_dmg:"60", skill2_cost:"3", special_skill: false, place:"", dmgCoins:[]};

const Magnemite = {card_type:"BasicPokemon", name:"Magnemite", starting_hp:60, hp:60, skill1_name:"Thunder Shock", skill1_dmg:"20", skill1_cost:"1", skill2_name:"null", evolution:"Magneton", special_skill: false, place:"", dmgCoins:[]};

const Magneton = {card_type:"Stage1Pokemon", name:"Magneton", starting_hp:110, hp:110, skill1_name:"Thunder Shock", skill1_dmg:"20", skill1_cost:"1", skill2_name:"Magnetic Circle" ,skill2_dmg:"20", skill2_cost:"2", special_skill: true, place:"", dmgCoins:[]};


const Voltorb = {card_type:"BasicPokemon", name:"Voltorb", starting_hp:50, hp:50, skill1_name:"Rollout", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Spark", skill2_dmg:"30", skill1_cost:"2" ,evolution:"Electrode", special_skill: false, place:"", dmgCoins:[]};

const Electrode = {card_type:"Stage1Pokemon", name:"Electrode", starting_hp:80, hp:80, skill1_name:"Speed Attack", skill1_dmg:"40", skill1_cost:"1", skill2_name:"Single Shot Blast", skill2_dmg:"120", skill2_cost:"3", special_skill: true, place:"", dmgCoins:[]};

const Electabuzz = {card_type:"BasicPokemon", name:"Electabuzz", starting_hp:90, hp:90, skill1_name:"Low Kick", skill1_dmg:"20", skill1_cost:"1",  skill2_name:"Electro Punch", skill2_dmg:"50", skill2_cost:"2", special_skill: false, place:"", dmgCoins:[]};

const LightningEnergy = {card_type:"energy", type:"lightning", name:"BasicLightningEnergy"}

var LightningDeck = [Pikachu, Raichu, {...Raichu}, Magnemite, {...Magnemite}, Magneton, Voltorb, {...Voltorb}, Electrode, Electabuzz, LightningEnergy, LightningEnergy, LightningEnergy, potion, switchActive]
//#endregion

//#region Fire deck
const Charmander = {card_type:"BasicPokemon", name:"Charmander", starting_hp:70, hp:70, skill1_name:"Scratch", skill1_dmg:"10", skill1_cost:"1",  skill2_name:"Ember", skill2_dmg:"30", skill2_cost:"2", evolution:"Charmeleon", special_skill: false, place:"", dmgCoins:[]};

const Charmeleon = {card_type:"Stage1Pokemon", name:"Charmeleon", starting_hp:100, hp:100, skill1_name:"Ember", skill1_dmg:"1", skill1_cost:"30", skill2_name:"Flamethrower", skill2_dmg:"60", skill2_cost:"3" ,special_skill: false, place:"", dmgCoins:[]};

const Vulpix = {card_type:"BasicPokemon", name:"Vulpix", starting_hp:60, hp:60, skill1_name:"Will-O-Wisp", skill1_dmg:"20", skill1_cost:"1", skill2_name:"null", evolution:"Ninetales",special_skill: false, place:"", dmgCoins:[]};

const Ninetales = {card_type:"Stage1Pokemon", name:"Ninetales", starting_hp:100, hp:100, skill1_name:"Flame Tail", skill1_dmg:"70", skill1_cost:"2", skill2_name:"null", special_skill: false, place:"", dmgCoins:[]};

const Growlithe = {card_type:"BasicPokemon", name:"Growlithe", starting_hp:80, hp:80, skill1_name:"Gnaw", skill1_dmg:"30", skill1_cost:"2", skill2_name:"Take Down", skill2_dmg:"50", skill2_cost:"3", evolution:"Arcanine",special_skill: false, place:"", dmgCoins:[]};

const Arcanine = {card_type:"Stage1Pokemon", name:"Arcanine", starting_hp:140, hp:140, skill1_name:"Flare Blitz", skill1_dmg:"90", skill1_cost:"3", skill2_name:"null", special_skill: true, place:"", dmgCoins:[]};

const Magmar = {card_type:"BasicPokemon", name:"Magmar", starting_hp:90, hp:90, skill1_name:"Flare", skill1_dmg:"20", skill1_cost:"1",  skill2_name:"Magma Punch", skill2_dmg:"50", skill2_cost:"2", special_skill: false, place:"", dmgCoins:[]};

const FireEnergy = {card_type:"energy", type:"fire", name:"BasicFireEnergy"}

var FireDeck = [Charmander, Charmeleon, {...Charmeleon}, Vulpix, {...Vulpix}, Ninetales, Growlithe, {...Growlithe}, Arcanine, Magmar, FireEnergy, FireEnergy, FireEnergy, potion, switchActive]


//#endregion

//#region Water deck
const Squirtle = {card_type:"BasicPokemon", name:"Squirtle", starting_hp:70, hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1",  skill2_name:"Water Gun", skill2_dmg:"30", skill2_cost:"2", evolution:"Wartortle", special_skill: false, place:"", dmgCoins:[]};

const Wartortle = {card_type:"Stage1Pokemon", name:"Wartortle", starting_hp:100, hp:100, skill1_name:"Water Gun", skill1_dmg:"30", skill1_cost:"1", skill2_name:"Skull Bash", skill2_dmg:"60", skill2_cost:"3" ,special_skill: false, place:"", dmgCoins:[]};

const Poliwag = {card_type:"BasicPokemon", name:"Poliwag", starting_hp:60, hp:60,  skill1_name:"Pound", skill1_dmg:"20", skill1_cost:"1", skill2_name:"null", evolution:"Poliwhirl",special_skill: false, place:"", dmgCoins:[]};

const Poliwhirl = {card_type:"Stage1Pokemon", name:"Poliwhirl", starting_hp:90, hp:90, skill1_name:"Wave Splash", skill1_dmg:"50", skill1_cost:"1", skill2_name:"null", special_skill: false, place:"", dmgCoins:[]};

const Magikarp = {card_type:"BasicPokemon", name:"Magikarp", starting_hp:30, hp:30, skill1_name:"Splash", skill1_dmg:"10", skill1_cost:"1", skill2_name:"null", evolution:"Gyarados",special_skill: false, place:"", dmgCoins:[]};

const Gyarados = {card_type:"Stage1Pokemon", name:"Gyarados", starting_hp:160, hp:160, skill1_name:"Tail Smash", skill1_dmg:"90", skill1_cost:"3", skill2_name:"Hyper Beam", skill2_dmg:"120", skill2_cost:"4" ,special_skill: true, place:"", dmgCoins:[]};

const Lapras = {card_type:"BasicPokemon", name:"Lapras", starting_hp:110, hp:110, skill1_name:"Surf", skill1_dmg:"50", skill1_cost:"2", skill2_name:"null", special_skill: false, place:"", dmgCoins:[]};

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
let knockedOut = false
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
            <div class="activePokemon" id="WaitingSidePokemon">
                <div class="skills">
                    <p id="WaitingHP">HP : </p>
                </div>
            </div>
            <div class="energy" id="WaitingSideEnergy"></div>
            <div class="deck" id="WaitingSideDeck" id="WaitingSideDiscardPile"></div>
        </div>
    </div>
<hr>
    <div id="activeSide">
        <div class="hand">
            <div id="Tutorial">
                <h3 id="PhaseText">Laposztás</h3>
                <p id="TutorialText">A játékosok 3 lapot kapnak, elhelyezik kezdő pokemonjukat és 1 energyt</p>
                <button id="EndTurnBtn">Kör vége</button><br>
            </div>
            <div id="ActiveHand">
            </div>
        </div>
        <div class="activeRow">
            <div class="prizes" id="ActiveSidePrizes"></div>
            <div class="activePokemon" id="ActiveSidePokemon">
                <div class="skills">
                    <div id="skill1"></div>
                    <div id="skill2"></div>
                    <p id="ActiveHP">HP : </p>
                </div>
                
            </div>
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
                document.getElementById("PhaseText").innerText="1. játékos köre"
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
                document.getElementById("PhaseText").innerText="2. játékos köre"
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
    document.getElementById("ActiveHP").innerText = "HP : " + actingPlayer.activePokemon.hp;
    Skills(false)

    let random = Math.floor(Math.random() * actingPlayer.deck.length);
        actingPlayer.hand.push(actingPlayer.deck[random]);
        ActiveHand.innerHTML += `<img class="card" id="${actingPlayer.deck[random].name}" src="./Img/Cards/${actingPlayer.deckType}/${actingPlayer.deck[random].name}.jpg">`;
        actingPlayer.deck.splice(random, 1);

       
        if (actingPlayer.activePokemon.skill2_name == "null") {
            document.getElementById("skill1").style.height = "2.8rem"
            document.getElementById("skill2").style.height = "0"
        }
        else{
            document.getElementById("skill1").style.height = "1.4rem"
            document.getElementById("skill2").style.height = "1.4rem"
        }
        

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
    document.getElementById("WaitingHP").innerText = "HP : " + waitingPlayer.activePokemon.hp;

    document.getElementById("TutorialText").innerText=""
    //#endregion

    //#region Kiutott pokemon esetén
    if (knockedOut) {
        SelectSwitchPokemon()
        knockedOut = false
    }
    //#endregion

    //#region Kártya kijátszás
    let skillUsed = false;
    let cards = document.getElementsByClassName("card")
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", PlayCard); }

    function PlayCard() {
        let playable = false;
        switch (actingPlayer.hand.filter(x => x.name === this.id)[0].card_type) {
            case "energy":
                actingPlayer.energy++
                document.getElementById("ActiveSideEnergy").innerHTML += `<img class="ActivePlacedEnergy PlacedEnergy" src="./Img/Cards/${actingPlayer.deckType}/Basic${actingPlayer.deckType}Energy.jpg">`;
                Skills(skillUsed)
                playable = true
                break;
            case "potion":
                if (actingPlayer.activePokemon.hp < actingPlayer.activePokemon.starting_hp) {
                    actingPlayer.activePokemon.hp = actingPlayer.activePokemon.hp + 30 > actingPlayer.activePokemon.starting_hp? actingPlayer.activePokemon.starting_hp : actingPlayer.activePokemon.hp + 30
                    document.getElementById("ActiveHP").innerHTML = "HP : " +  actingPlayer.activePokemon.hp
                    playable = true
                }
                break;
            case "switch":
                SelectSwitchPokemon()
                playable = true
                break;
            case "BasicPokemon":
                    let placed = false;
                    for (let i = 0; i < actingPlayer.bench.length; i++) {
                        if (actingPlayer.bench[i] === "") {
                            actingPlayer.bench[i] = actingPlayer.hand.filter(x => x.name === this.id)[0]
                            actingPlayer.bench[i].place = `Bench${i + 1}`;
                            document.getElementById(`ActiveBench${i + 1}`).style.opacity = 0  
                            setTimeout(() => { 
                                document.getElementById(`ActiveBench${i + 1}`).style.backgroundImage = `url(./Img/Cards/${actingPlayer.deckType}/${this.id}.jpg)`;
                                document.getElementById(`ActiveBench${i + 1}`).style.opacity = 1 
                            }, 300);
                            
                            
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
                let Stage1 = actingPlayer.hand.filter(x => x.name === this.id)[0]
                let BasicPokemons = actingPlayer.bench.filter(x => x.evolution === this.id)
                    if(actingPlayer.bench.filter(x => x.evolution === this.id)){  
                        for (let i = 0; i < BasicPokemons.length; i++) {
                            const basicCard = document.getElementById(`Active${BasicPokemons[i].place}`)
                            basicCard.style.boxShadow = "0 0 25px 10px white"
                            basicCard.addEventListener("click", function(event) {
                                Evolve(Stage1, event.target, BasicPokemons[i].place, BasicPokemons, false)
                            }); 
                        }
                        if (actingPlayer.activePokemon.evolution === this.id) {
                            document.getElementById("ActiveSidePokemon").style.boxShadow = "0 0 25px 10px white"
                            document.getElementById("ActiveSidePokemon").addEventListener("click", function(event) {
                                Evolve(Stage1, event.target, "ActiveSidePokemon", BasicPokemons, true)
                            
                            })
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
    
    //#endregion


    function Skills(skillUsed) {
        if (Number(actingPlayer.activePokemon.skill1_cost) <= actingPlayer.energy && !skillUsed) {
            document.getElementById("skill1").classList.add("UsableSkill")
            document.getElementById("skill1").addEventListener("click", function(event) {
                UseSkill(actingPlayer.activePokemon.skill1_name, actingPlayer.activePokemon.skill1_dmg, actingPlayer.activePokemon.special_skill, skillUsed)})
        }
        else{
            document.getElementById("skill1").classList.remove("UsableSkill")
            document.getElementById("skill2").removeEventListener("click", function(event) {
                UseSkill(actingPlayer.activePokemon.skill2_name, actingPlayer.activePokemon.skill2_dmg, actingPlayer.activePokemon.special_skill, skillUsed)})
        }
        if (Number(actingPlayer.activePokemon.skill2_cost) <= actingPlayer.energy && !skillUsed) {
            document.getElementById("skill2").classList.add("UsableSkill")
            document.getElementById("skill2").addEventListener("click", function(event) {
                UseSkill(actingPlayer.activePokemon.skill2_name, actingPlayer.activePokemon.skill2_dmg, actingPlayer.activePokemon.special_skill, skillUsed)})
        }
        else{
            document.getElementById("skill2").classList.remove("UsableSkill") 
            document.getElementById("skill2").removeEventListener("click", function(event) {
                UseSkill(actingPlayer.activePokemon.skill2_name, actingPlayer.activePokemon.skill2_dmg, actingPlayer.activePokemon.special_skill, skillUsed)})
        }
    }

    function UseSkill(name, dmg, special, skillUsed){
        waitingPlayer.activePokemon.hp = waitingPlayer.activePokemon.hp - dmg < 0? 0 : waitingPlayer.activePokemon.hp -= dmg
        document.getElementById("WaitingHP").innerHTML = "HP : " +  waitingPlayer.activePokemon.hp
        if (waitingPlayer.activePokemon.hp <= 0) {
            knockedOut = true
        }
        skillUsed = true
        Skills(skillUsed)
    }

    function SelectSwitchPokemon() {
        console.log(actingPlayer)
        for (let i = 0; i < actingPlayer.bench.length; i++) {
            const benchedCard = document.getElementById(`Active${actingPlayer.bench[i].place}`)
            console.log(benchedCard)
            if (actingPlayer.bench[i] != "") {
                benchedCard.style.boxShadow = "0 0 25px 10px white"
                benchedCard.addEventListener("click", function(event) {
                    SwitchPokemon(event.target, actingPlayer.bench[i], actingPlayer.bench[i].place, actingPlayer.activePokemon, document.getElementById("ActiveSidePokemon"))
            }); 
            }
            
        }
    }
    function SwitchPokemon(bench, benchedPokemon, place, activePokemon, activeElement) {
        
        bench.style.opacity = 0
        bench.style.backgroundImage=`url(./Img/Cards/${actingPlayer.deckType}/${activePokemon.name}.jpg)`
        bench.style.opacity = 1
        activeElement.style.opacity = 0
        activeElement.style.backgroundImage=`url(./Img/Cards/${actingPlayer.deckType}/${benchedPokemon.name}.jpg)`
        activeElement.style.opacity = 1

        actingPlayer.bench[Number(place.replace("Bench",""))-1] = activePokemon
        actingPlayer.bench[Number(place.replace("Bench",""))-1].place = place
        actingPlayer.activePokemon = benchedPokemon
        document.getElementById("ActiveHP").innerHTML = "HP : " +  actingPlayer.activePokemon.hp

        if (actingPlayer.activePokemon.skill2_name == "null") {
            document.getElementById("skill1").style.height = "2.8rem"
            document.getElementById("skill2").style.height = "0"
        }
        else{
            document.getElementById("skill1").style.height = "1.4rem"
            document.getElementById("skill2").style.height = "1.4rem"
        }

        for (let i = 0; i < actingPlayer.bench.length; i++) {
            if (actingPlayer.bench[i] != "") {
                document.getElementById(`Active${actingPlayer.bench[i].place}`).style.boxShadow = "none"
                document.getElementById(`Active${actingPlayer.bench[i].place}`).removeEventListener("click", function(event) {
                    SwitchPokemon(event.target, actingPlayer.bench[i], actingPlayer.bench[i].place, actingPlayer.activePokemon, document.getElementById("ActiveSidePokemon"))}); 
            }
        }
    }

    function Evolve(Stage1, basicCard, place, BasicPokemons, active) {

        basicCard.style.opacity = 0
        basicCard.style.backgroundImage=`url(./Img/Cards/${actingPlayer.deckType}/${Stage1.name}.jpg)`
        basicCard.style.opacity = 1
        if (active == false) {
            actingPlayer.bench[Number(place.replace("Bench",""))-1] = Stage1
            actingPlayer.bench[Number(place.replace("Bench",""))-1].place = place
            
            for (let i = 0; i < BasicPokemons.length; i++) {
                const basicCard = document.getElementById(`Active${BasicPokemons[i].place}`)
                basicCard.style.boxShadow = "none"
            }
        }
        else{
            actingPlayer.activePokemon = Stage1
            document.getElementById("ActiveSidePokemon").style.boxShadow = "none"
            Skills(skillUsed)

        }
        playable = true;
    }

}

// // Easter Egg 
// setInterval(() => {
//     console.log(GrassDeck[0].name.toUpperCase());
//     let BULBASAUR = new Audio("Img/bulbasaur.mp3");
//     BULBASAUR.play()
// }, 1000);
