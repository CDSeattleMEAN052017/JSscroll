module.exports = function (){
  return {
    add: function(num1, num2) {
      var sum = num1 + num2
      console.log(sum)
        return sum;
    },
    multiply: function(num1, num2) {
        var sum = num1 * num2
        console.log(sum) 
            return sum;
    },
    square: function(num) {
        var sum = num * num
        console.log(sum)
            return sum;
    },
    random: function(num1, num2) {
       var rando = Math.floor( Math.random(num1)*num2 + 1)
       console.log(rando)
    }
  }
};

module.exports().add(2,6);
module.exports().multiply(2,6);
module.exports().square(2);
module.exports().random(1,50);
