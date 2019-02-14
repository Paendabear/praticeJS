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
