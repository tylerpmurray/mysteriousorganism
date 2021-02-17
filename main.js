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
      let randomBase = this.dna[randomIndex];
      let newBase = returnRandBase();
      if(randomBase != newBase){
        randomBase = newBase;
      }
      return dna;
    }
  };
}

let test1 = pAequorFactory(1, mockUpStrand());

console.log(test1);
console.log(test1.mutate());





