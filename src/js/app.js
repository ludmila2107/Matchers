function rateParticpant(array) {
  array.sort((a, b) => (a.health > b.health ? -1 : 1));

}
const array = [
 {
   name: 'маг',
   health: 100
 }, {
   name: 'лучник',
   health: 80
 }, {
   name: 'мечник',
   health: 10
 },
]
console.log(array);