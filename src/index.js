module.exports = function reverse (n) {
  if(n > 0) return +n.toString().split('').reverse().join('');
  if(n < 0) {
      let num = n * -1;
      num = num.toString().split('').reverse().join('');
      return +num;  
  }
}
