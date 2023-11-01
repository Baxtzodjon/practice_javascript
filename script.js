// let array = ['alex', 'jordan']
// let arr_sec = ['alex', 'jordan']

// array = JSON.stringify(array) // он переводит объекты и массивы в стринг
// arr_sec = JSON.stringify(arr_sec)

// console.log(
//     array === arr_sec
// );


// exercise 

// Дубликаты 
// Удалить дубликаты в массиве в JS

// Хардкод Это известная всем проблема, когда программист из-за спешки или лени пишет код без учета переменных. 

// let arr = ['january', 'february', 'march', 'april', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'july', 'august', 'september', 'october', 'november', 'december'] // динамичный january, january, january, january.

// let month = new Set(arr)

// month = [...month]

// console.log(month);



// // second solution
// let orginalmonth = []

// for (let item of arr) {
//     if (!orginalmonth.includes(item)) {
//         orginalmonth.push(item)
//     }
// }

// console.log(orginalmonth);


// // exercise 2
// let monthes = ['january', 'february', 'march', 'april', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'july', 'august', 'september', 'october', 'november', 'december']


// let original = [...new Set(arr)]

// let sortedSeasons = {
//     'winter': ['december', 'january', 'february'],
//     'spring': ['march', 'april', 'may'],
//     'summer': ['june', 'july', 'august'],
//     'autumn': ['september', 'october', 'november']

// }

// let groupedSeasons = {
//     "winter": [],
//     "spring": [],
//     "summer": [],
//     "autumn": []
// }


// for (let month of original) {
//     for (let season in sortedSeasons) {
//         if (sortedSeasons[season].includes(month)) {
//             groupedSeasons[season].push(month);
//         }
//     }
// }
// console.log(groupedSeasons);



// function saySalam(name, gender) {
//     if (gender === true) {
//         alert('Salam Mister ' + name)
//     } else {
//         alert('Salam Missis ' + name)
//     }
// }

// saySalam('Ahror', true)



// Homework
const getLongestName = (isMax, ...names) => {
    let longestName = "";
    let shortestName = names[0];

    if (isMax) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].length > longestName.length) {
                longestName = names[i];
            }
        }
        return longestName;
    } else {
        for (let i = 0; i < names.length; i++) {
            if (names[i].length < shortestName.length) {
                shortestName = names[i];
            }
        }
        return shortestName;
    }
}

console.log(getLongestName(false, 'alex', 'jasur'));
console.log(getLongestName(true, 'alex', 'jasur'));

// функция принимает два аргумента первый names и isMax если я предам true а потом все имена сколько угодно через запятые к примеру true, 'alex', 'jasur' надо найти самую длинное имя, если я предам false надо найти самая короткая имя.
