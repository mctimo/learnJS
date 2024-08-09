const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        return `Семья состоит из: ${[...family].join(' ')}`;
    }
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(city, number, arr){
        console.log(city.toLowerCase());
    });
    
}
standardizeStrings(favoriteCities);
