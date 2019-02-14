var numArr = [,2,3,4,5,6];

// avg ((numArr) => {
//     let total = 0;
// for (let i=0; i<numArr.length; i++){
//     total += numArr[i];

//     return (total/(numArr.length));
// }
// });


numArr.reduce( (total, num) => {
    return total + num
})

let people = [{age: 21},{age: 22},{age: 23},];

const doubled = people.map((key) => {
    people.key*= 2;
});