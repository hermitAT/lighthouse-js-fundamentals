const howManyHundreds = function (num) {
  let hundreds = num/100;
  return Math.round(hundreds);
}

console.log(howManyHundreds(1000), "=?", 10);