'use strict'

// //1

// // var arr2d = [
// //     [1, 2, 3],
// //     [1, 2, 3],
// //     [1, 2, 3]
// // ]

// // var arr2d = [
// //     [1, 2, 3],
// //     [2, 2, 3]
// // ]

// // var isMat = isMatrix(arr2d);
// // console.log('is it ? ', isMat);


// // function isMatrix(arr2d) {
// //     var result = arr2d.every(isEqualLength);
// //     return result;
// // }

// // function isEqualLength(currentValue) {
// //     console.log('currentValue',currentValue)
// //     if (currentValue.length === arr2d[0].length) return true;
// //     else return false;
// // }

// //2

// var arr2d = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6]
// ]

// // var arr2d = [
// //     [1, 2, 3],
// //     [1, 2, 3]
// // ]

// var isMatWide = isWide(arr2d);
// console.log('is it wide? ', isMatWide);

// function isWide(arr2d) {
//     var res = arr2d.some(isBiggerThan5);
//     return res;
// }

// function isBiggerThan5(currentValue) {
//     if (currentValue.length > 5) return true;
//     else return false;
// }


// //3

// // var initialValue = [];
// // var arr = ['Hello', [9, 6], 18, [4, 7, 8]];
// // var res = arr.reduce(flatten, initialValue);

// // function flatten(initialValue, currentValue) {

// //     if (typeof currentValue === 'object') {
// //         currentValue.forEach(function (num) {
// //             initialValue.push(num)
// //         })
// //     }
// //     else initialValue.push(currentValue);
// //     return initialValue;
// // }

// // console.log('res', res)
// // var res = arr.reduce(function (acc, element) {

// //     if (typeof element === 'object') {
// //         element.forEach(function (num) {
// //             acc.push(num)
// //         })
// //     }
// //     else acc.push(element);
// //     return acc;
// // }, []);


// //4

// // var nums = [1, 1, 2, 2, 2, 4, 5];
// // var initialValue = {};
// // var result = nums.reduce(reduce1, initialValue);
// // var max = findModes(result);
// // console.log('max', max)

// // function reduce1(tally, value) {


// //     if (!tally[value]) {
// //         tally[value] = 1;
// //     } else {
// //         tally[value]++;

// //     }
// //     return tally;
// // }

// // function findModes(result) {

// //     var max = 0;
// //     for (var num in result) {
// //         if (result[num] > max)
// //             max = num;
// //     }
// //     return max;
// // }

// //5
// var emps = [{
//     name: 'Joe Schmoe',
//     yearsExperience: 1,
//     department: 'IT'
// },
// {
//     name: 'Sally Sallerson',
//     yearsExperience: 15,
//     department: 'Engineering'
// },
// {
//     name: 'Bill Billson',
//     yearsExperience: 5,
//     department: 'Engineering'
// },
// {
//     name: 'Jane Janet',
//     yearsExperience: 11,
//     department: 'Management'
// },
// {
//     name: 'Bob Hope',
//     yearsExperience: 9,
//     department: 'IT'
// }];


// //a
// // var exsSum = emps.reduce(function (acc, emp) {
// //     return acc + emp.yearsExperience
// // }, 0);

// // console.log('exsSum', exsSum)

// //b


// // var exsSum = emps.reduce(function (acc, emp) {
// //     // console.log('acc,emp', acc, emp);
// //     if(!acc[emp.department]) acc[emp.department] = emp.yearsExperience.valueOf();
// //     else acc[emp.department] += emp.yearsExperience.valueOf();
// //     return acc;
// // }, {});

// // console.log('exsSum', exsSum);

// //c

// // var empExpMap = emps.reduce(function (acc, emp) {
// //     // console.log('acc,emp', acc, emp);
// //      acc[emp.name] = emp.yearsExperience.valueOf();

// //     return acc;
// // }, {});

// // console.log('empExpMap', empExpMap);

// //d

// // var empDepSum = emps.reduce(function (acc, emp) {
// //     // console.log('acc,emp', acc, emp);
// //     if(!acc[emp.department]) acc[emp.department] = 1;
// //     else acc[emp.department] += 1;
// //     return acc;
// // }, {});

// // console.log('empDepSum', empDepSum);


// function inedxCall(i) {

//     setTimeout(function () { console.log(i); }, i * 1000);
// }


// for (var i = 0; i < 5; i++) {
//     inedxCall(i);
// }





// var buffer = {
//     entries: [], add: function (s) {
//         this.entries.push(s);
//     }, concat: function () {
//         return this.entries.join("");
//     }
// };
// var source = ["puki", "-", "muki"];
// source.forEach(function (item) {
//     buffer.add(item);
//     // source.forEach(buffer.add.bind(buffer));
// })


// buffer.concat();


// var prices = [100,80,90,250,60];
// var expensives = prices.reduce(function (acc, price) {
//     if (price > 80) acc.push(price); return acc;
// }, []);

// var expensives = prices.reduce(function (acc, price) {
//     return price > 80
//     if (price > 80) acc.push(price); return acc;
// }, []);



function sum() {
    var res = 0;
    console.log('arguments', arguments);
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        res += arg;
    }
    return res;

}
var res = sum(8, 6, 2);
// var res = sum.call(null, 8, 6, 2);
console.log('res', res);