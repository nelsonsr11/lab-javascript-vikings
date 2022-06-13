// Soldier
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;  
  }
  attack(){
    return this.strength
  }
  receiveDamage(dmg){
    this.health -= dmg
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
  super(name,health,strength)
    this.name = name; 
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(dmg){

    this.health -= dmg
    if (this.health > 0){
      return `${this.name} has received ${dmg} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
    
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg){
    this.health -= dmg;
     if (this.health > 0){
      return `A Saxon has received ${dmg} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
   let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
   let selectedSaxon = this.saxonArmy[randomSaxon]

    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    let selectedViking = this.vikingArmy[randomViking]
    
    let battleMessage2 = selectedSaxon.receiveDamage(selectedViking.attack())
    if(selectedSaxon.health <= 0){
      this.saxonArmy.splice(selectedSaxon, 1)
      
    }
    return battleMessage2;
     
  }

  saxonAttack(){
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let selectedSaxon = this.saxonArmy[randomSaxon]
 
     let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
     let selectedViking = this.vikingArmy[randomViking]
     
     let battleMessage = selectedViking.receiveDamage(selectedSaxon.strength)
     if(selectedViking.health <= 0){
       this.vikingArmy.splice(selectedViking, 1)
       
     }
     return battleMessage ;
   }

   showStatus(){
      if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`;
    } else if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    } else{
      return `Vikings and Saxons are still in the thick of battle.`
    }
   }

}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
