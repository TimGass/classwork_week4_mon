Array.from = function(obj){
  var newArray = [];
    for (var i = 0; i < (obj.length); i++) {
      newArray.push(obj[i]);
    }
    return newArray;
}

console.assert(Array.from({0: 'a', 1: 'b', length: 2}).length === 2)
console.assert(Array.from(document.querySelectorAll('body')).length === 1)
