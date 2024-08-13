/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    getFilmsCount: function(){
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?'); 
        personalMovieDB.count = numberOfFilms;
        if (0 < personalMovieDB.count && personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    getLastFilmsRating: function(){
        let lastFilm,
        lastFilmRating;
    
    for (let i = 0; i < personalMovieDB.count; i++) {
        lastFilm = prompt('Один из последних просмотренных фильмов?');
        while (lastFilm == '' || lastFilm == null || lastFilm.length > 50) {
            lastFilm = prompt('Ответ не верный, попробуйте еще раз. Один из последних просмотренных фильмов?').trim();
        }
        lastFilmRating = +prompt('На сколько оцените его?');
        while (lastFilmRating == null || lastFilmRating <= 0 || isNaN(lastFilmRating) == true) {
            lastFilmRating = +prompt('Ответ не верный, попробуйте еще раз. На сколько оцените его?');
        }
        personalMovieDB.movies[lastFilm] = lastFilmRating;
    };
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        let favoriteGenres;
        do {
            favoriteGenres = prompt('Введите ваши любимые жанры через запятую');
        } while (favoriteGenres == null || favoriteGenres.trim() == '');
        personalMovieDB.genres = favoriteGenres.split(', ');
    
        personalMovieDB.genres.forEach(function(genre, index) {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });    
        },
    showMyDB: function(){
        if (!this.privat){
            console.log(this);
        } else {
            console.log("Private is ON");
        }
    }       
        
};


// personalMovieDB.getFilmsCount();
// personalMovieDB.getLastFilmsRating();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();

