// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let randomIndex = Math.floor(Math.random()*15);
      while(this.dna[randomIndex] === returnRandBase()){
        returnRandBase();
      }
      this.dna[randomIndex] = returnRandBase();
      return dna;
    },
    compareDNA(pAequorObj){
      let commonCount = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequorObj.dna[i]){
          commonCount = commonCount + 1;
        }
      }
      let commonPercent = Math.round(commonCount/(this.dna.length) * 100);
      console.log(`Specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${commonPercent}% DNA in common`)
    }
  };
}

let test1 = pAequorFactory(1, mockUpStrand());
let test2 = pAequorFactory(2, mockUpStrand());

console.log(test1);
console.log(test2);
test1.compareDNA(test2);





