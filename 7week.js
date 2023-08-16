// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов
//и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки
//с использованием разделителя.

const repeatString = (string, number, separator) => {
    return (string + separator).repeat(3)
}

// const repeatString2 = (str, countRepeat, separator) => Array.from({length: countRepeat}, () => str).join(separator)
// const repeatString3 = (str, countRepeat, separator) => Array(countRepeat).fill(str).join(separator)

// const repeatString_3 = (str, n, splitter) => {
//     return (str+splitter).repeat(n-1)+str;
// }


repeatString('yo', 3, ', ');
repeatString('yo', 3, ','); // => "yo,yo,yo"
repeatString('yo', 3, ', '); // => "yo, yo, yo"
repeatString('yo', 0, ', '); // => ""
repeatString('yo', 1, ', '); // => "yo"

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
//а возвращает true, если строка начинается с указанной подстроки, в противном
//случае - false. Регистр не учитывается.

const checkStart = (mp, fp) => {
    return mp.toLowerCase().startsWith(fp.toLowerCase())
}

// const checkStart = (str, subStr) => str.toLowerCase().startsWith(subStr.toLowerCase())
// const checkStart = (str, substr) => str.toLowerCase().substring(0, substr.length) === substr ? true : false

// const checkStart_2= (str, subStr) => {
//     return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
// }
//
// const checkStart_3= (str, subStr) => {
//     return str.toLowerCase().indexOf(subStr.toLowerCase()) === 0;
// }

checkStart('Incubator', 'inc'); // => true
checkStart('Incubator', 'yo'); // => false

//3. Реализуйте функцию, которая принимает параметром строку и число
//(количество символов), а возвращает строку из параметров, обрезанную до
//указанного количества символов и завершает её многоточием.

const truncateString = (string, number) => {
    return string.substring(0, number) + "..."
}

// const truncateString = (str, num) => num < str.length
//     ? `${str.substring(0, num)}...`
//     : str

truncateString('Всем студентам инкубатора желаю удачи!', 10); // => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает самое короткое слово в предложении, если в параметрах пустая строка
//или не строка, то возвращает null.

const getMinLengthWord = (string) => {
    return string.length > 0
        ? string.split(" ").sort((a,b) => a.length - b.length)[0]
        : null
}

// const res = typeof str === "string" && str.length > 0
//     ? str.split(' ').reduce((acc, el) => el.length < acc.length  ? el : acc)
//     : null

// const getMinLengthWord = str => typeof str === 'string' && str
//     ? str.split(' ').sort((a, b) => a.length - b.length)[0]
//     : null
// return str.split(' ').reduce((min, word) => (word.length < min.length ? word : min), str.split(' ')[0]);

// const getMinLengthWord = (str) => str === '' ? null : str.split(' ').sort((a, b) => a.length - b.length)[0];
getMinLengthWord('Всем студентам инкубатора желаю удачи.'); // => "Всем"
getMinLengthWord(''); // => null
getMinLengthWord(123); // => null
getMinLengthWord(true); // => null
getMinLengthWord(undefined); // => null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает то же предложение, где все слова написаны строчными, но начинаются
//с заглавных букв.

const setUpperCase = (string) => {
    return string.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ")
}


setUpperCase('всем стУдентам инкуБатора Желаю удачИ');

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (a, b) => {
    return a.toLowerCase().includes(b.toLowerCase())
}

isIncludes('Incubator', 'Cut'); // => true
isIncludes('Incubator', 'table'); // => false
isIncludes('Incubator', 'inbba'); // => true //*false
isIncludes('Incubator', 'inba'); // => true  //*true
isIncludes('Incubator', 'Incubatorrr'); // => true //*false


// const setUpperCase = str => typeof str === 'string' && str
//     ? str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//     : null
//
// const setUpperCase2 = str => typeof str === 'string' && str
//     ? str.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase())
//     : null

// const isIncludes = (str, subStr) => [...subStr.toLowerCase()].every(letter => str.toLowerCase().includes(letter))