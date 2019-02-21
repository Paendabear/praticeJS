var numArr = [,2,3,4,5,6];

 const avg = ((numArr) => {
    let sum = numArr.reduce( (total, num) => {
        return total + num;
    })
    return (sum/numArr.length);
});


numArr.reduce( (total, num) => {
    return total + num
})

let people = [{age: 21},{age: 22},{age: 23},];

const doubled = people.map((key) => {
    people.key*= 2;
});

let car = "variable"

var object = {
     a: 1,
     b: 'strings', 
     c: car
    };
    
for (const prop in object) {
  console.log(`obj.${prop} = ${object[prop]}`);
}

var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }



function removeNumbersLargerThan(num, obj) { 
    Object.keys(obj).forEach( (key) => {
        if (obj[key] > num){
            delete obj[key];
        }
    });
    return obj;
  }
 
 removeNumbersLargerThan(5, obj);

 console.log(obj);

 function addArrayProperty(obj, key, arr) {
    obj.key = arr;
  }



  function countCharacter(str, char) {
    let count = 0
    for (let i=0; i<str.length; i++ ){
      if (str[i] === char){
        count ++;
      }
    }
    return count;
  }

  var output = countCharacter('I am a hacker', 'a');
console.log(output);