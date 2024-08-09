const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        let result = '';
        for (let i = 1; i <= str.length; i++) {
        result += str[str.length - i];
    }
    return result;
    } else {
        return 'Ошибка!';
    }
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = 'Доступные валюты:\n';
        if (arr.length===0){
            return 'Нет доступных валют';
        } else {
        arr.forEach(function(curr, i){
            if (curr !==missingCurr){
                result += `${curr}\n`;
            }
        });
    }
    return result;
}

console.log(availableCurr([baseCurrencies, additionalCurrencies], 'CNY'));