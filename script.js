
//#region Cards

const potion = {card_type:"potion", name:"Potion"}
const switchActive = {card_type:"switch", name:"Switch"}
//#region Bulbasaur deck
const Bulbasaur = {card_type:"BasicPokemon", name:"Bulbasaur", hp:70, skill1_name:"Tackle", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Vine Whip", skill2_dmg:"30", skill2_cost:"2", evolution:"Ivysaur", dmgCoins:[]};
const Ivysaur = {card_type:"Stage1Pokemon", name:"Ivysaur", hp:100, skill1_name:"Vine Whip", skill1_dmg:"30", skill1_cost:"3", skill2_name:"Razor Leaf", skill2_dmg:"60", skill2_cost:"3", dmgCoins:[]};
const Oddish = {card_type:"BasicPokemon", name:"Oddish", hp:50, skill1_name:"Absorb", skill1_dmg:"10", skill1_cost:"1", skill1_spec: "heal", skill1_spec_amount: 10 ,evolution:"Gloom", dmgCoins:[]};
const Gloom = {card_type:"Stage1Pokemon", name:"Gloom", hp:90, skill1_name:"Mega Drain", skill1_dmg:"60", skill1_cost:"2", skill1_spec_amount: 20, dmgCoins:[]};
const Exeggcute = {card_type:"BasicPokemon", name:"Exeggcute", hp:60, skill1_name:"Rollout", skill1_dmg:"40", skill1_cost:"2", evolution:"Exeggutor", dmgCoins:[]};
const Exeggutor = {card_type:"Stage1Pokemon", name:"Exeggutor ", hp:120, skill1_name:"Seed Bomb", skill1_dmg:"40", skill1_cost:"2", skill2_name:"Barrage Impact", skill2_dmg:"80", skill2_cost:"3", dmgCoins:[]};
const Scyther = {card_type:"BasicPokemon", name:"Scyther", hp:80, skill1_name:"X-Scissor", skill1_dmg:"20", skill1_cost:"1", skill1_spec: "coinFlipDmg", skill1_spec_amount: 40, dmgCoins:[]};
const GrassEnergy = {card_type:"energy", type:"grass", name:"GrassEnergy"}
let BulbasaurDeck = [Bulbasaur, Ivysaur, Ivysaur, Oddish, Oddish, Gloom, Exeggcute, Exeggcute, Exeggutor, Scyther, GrassEnergy, GrassEnergy, GrassEnergy, potion, switchActive]
//#endregion

//#region Pikachu deck
const Pikachu = {card_type:"BasicPokemon", name:"Pikachu", hp:70, skill1_name:"Quick Attack", skill1_dmg:"10", skill1_cost:"1", skill2_name:"Electro Ball", skill2_dmg:"30", skill2_cost:"2", evolution:"Raichu", dmgCoins:[]};

const LightningEnergy = {card_type:"energy", type:"lightning"}
//let PikachuDeck = [Pikachu, Raichu, Raichu, Magnemite, Magnemite, Magneton, Voltorb, Voltorb, Electrode, Electabuzz, LightningEnergy, LightningEnergy, LightningEnergy, potion, switchActive]
//#endregion

//#endregion

let player1 = {
    deckName : "",
    deck : [],
    activePokemon : "",
    bench : [],
    energy : 1,
    prize : 0
}

let player2 = {
    deckName : "",
    deck : [],
    activePokemon : "",
    bench : [],
    energy : 1,
    prize : 0
}

let win = true;
let turns = 1;
while (!win)
{
    if (turns%2 == 1) {
        if (turns == 1) {
            
        }
        else{
            BeginTurn(player1,player2)
        }
        
    }
    else{
        if (turns == 2) {
            
        }
        else{
            BeginTurn(player2,player1)
        }
    }
}

function BeginTurn(actingPlayer, waitingPlayer) {
    
}
