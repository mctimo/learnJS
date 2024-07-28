/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms;
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
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

let lastFilm,
    lastFilmRating;

for (let i = 0; i < numberOfFilms; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?');
    while (lastFilm == '' || lastFilm == null || lastFilm.length > 50) {
        lastFilm = prompt('Ответ не верный, попробуйте еще раз. Один из последних просмотренных фильмов?');
    }
    lastFilmRating = +prompt('На сколько оцените его?');
    while (lastFilmRating == null || lastFilmRating <= 0 || isNaN(lastFilmRating) == true) {
        lastFilmRating = +prompt('Ответ не верный, попробуйте еще раз. На сколько оцените его?');
    }
    personalMovieDB.movies[lastFilm] = lastFilmRating;
};


console.log(personalMovieDB);