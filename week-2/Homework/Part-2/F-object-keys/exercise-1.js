/*

Return the keys and values of the following object

*/

let capitalCities = {
  scotland: 'Edinburgh',
  kenya: 'Nairobi',
  australia: 'Canberra',
  canada: 'Ottawa'
};

let highScores = {
  55: 'Alistair',
  100: 'David',
  89: 'Hannah',
  34: ['Sergi', 'Frank',]
};

// ONLY EDIT BELOW HERE
const[ key,values]=capitalCities;
const[key1, value1]= highScores;

let capitalCitiesKeys = capitalCities.forEach(function(el){
  return el.key
});
console.log(capitalCitiesKeys) ; 
let highScoresKeys = highScores.map(function(ele){
  return ele.key1
});
  
 
let capitalCitiesValues = capitalCities.map(function(el){
  return el.values
});  ;
let highScoresValues =highScores.map(function(ele){
  return ele.value1
} ) ;

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys)
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues)
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']