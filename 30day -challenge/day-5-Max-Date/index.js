const tips_maxDate = dates => new Date(Math.max(...dates));
const array = [
  new Date(2016, 4, 13),
  new Date(2018, 3, 12),
  new Date(2016, 0, 10),
  new Date(2017, 0, 9)
];
console.log(tips_maxDate(array));