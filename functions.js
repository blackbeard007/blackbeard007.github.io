/* @author Vlad Yakymenko Dp-P05 JS Core */

/*Common array for 8,9 and 10 tasks*/
let numbers = [3, 18, -3, 22, -40, 6];
/***********************************/
console.log('1.' + createString());
console.log('2.Result of getting sum of 3 digits is ' + getSumOf3Digits(12,6,8));
console.log('3.Result of getting concatenation of 2 strings is ' + getConcatenation('Hello', 'JS'));
console.log('4.Result of getting String converted from 3 digits is ' + getStringConverted(5,23,7));
console.log('5.Result of getting String from 3 digits is ' + getString(4, 7, 5));
console.log('6.Result of sum 2 numbers ' + getSumOf2Numbers('14sssdg', true))
console.log('7.Biggest from 3 numbers is ' + getBiggest(4, 5, 5));
console.log('8.maxValue is ' + getMaxValue(numbers));
console.log('9.Min index of array is ' + getIndex(numbers));
console.log('10.Copy of array: '  + numbers + '\nis: ' + getCopy(numbers));

/* 1.Function that creates any string value */
function createString () {
    return 'Hello any string';
}

/* 2.Function that calculates sum of three inputted digits */
function getSumOf3Digits (firstNum, secondNum, thirdNum) {
    return Number(firstNum) + Number(secondNum) + Number(thirdNum);
}

/* 3.Function that creates concatenation of 2 inputted strings with space in middle */
function getConcatenation (firstStr, secondStr) {
    return firstStr + ' ' + secondStr;
}

/* 4.Function that returns string converted from 3 inputted digits */
function getStringConverted (firstNum, secondNum, thirdNum) {
    return String(firstNum) + String(secondNum) + String(thirdNum);
}

/* 5.Function that take 3 digits and create string
 * first and second should be added and 
 * it sum concatenate with third digit as a string 
 * coma is used as a separator
 */
function getString (firstNum, secondNum, thirdNum) {
    return (firstNum + secondNum) + ', ' + thirdNum;
}

/* 6.Function that returns number - result of sum 2 numbers:
 * first should be extracted from String,
 * second should be Boolean
 */
function getSumOf2Numbers (firstNum, secondNum) {
    let resultOfTransformation = '';

    for (let i = 0; i < firstNum.length; i++) {
        if (!isNaN(firstNum[i])) {
            resultOfTransformation += firstNum[i];
        }
    }

    return Number(resultOfTransformation) + Number(secondNum);
}

/* 7.Function that can find biggest from 3 numbers */
function getBiggest (firstNum, secondNum, thirdNum) {
    let biggest;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        biggest = firstNum;
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        biggest = secondNum;
    } else {
        biggest = thirdNum;
    }

    return biggest;
}

/* 8.Function that can find max value in array */
function getMaxValue (numbers) {
    let maxValue = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (maxValue < numbers[i]) {
            maxValue = numbers[i];
        }
    }

    return maxValue;
}

/* 9.Function that can find index of min value in array */
function getIndex (numbers) {
    let index = 0,
        minValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i];
            index = i;
        }
    }

    return index;
}

/* 10.Function that can create copy of array */
function getCopy (numbers) {
    let copyArray = [];

    for (let i = 0; i < numbers.length; i++) {
        copyArray[i] = numbers[i];
    }
    
    return copyArray;
}