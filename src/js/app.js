
export default function rateParticpant(array) {
  array.sort((a, b) => (a.health > b.health ? -1 : 1));

}
