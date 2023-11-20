// 1) повторить все что было на уроке
// сделать такой же запрос как на уроке но на массив из объектов с людьми
// и вывести это всё на страницу через ДОМ элементы, в виде карточек как мы это делали на уроке.
// Показал как должен выглядеть json файл на уроке.
const fetchData = (url, nameClass, ageClass, positionClass, clubClass) => {
    const request = new XMLHttpRequest();
    request.open('GET', url );
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);
        document.querySelector(nameClass).innerHTML = data.name;
        document.querySelector(ageClass).innerHTML = data.age;
        document.querySelector(positionClass).innerHTML = data.position;
        document.querySelector(clubClass).innerHTML = data.club;
    });
};

const playerData = () => {

    fetchData('../json/ronaldo.json', '.name', '.age', '.position', '.club');

    fetchData('../json/benzema.json', '.name2', '.age2', '.position2', '.club2');

    fetchData('../json/neymar.json', '.name3', '.age3', '.position3', '.club3');

    fetchData('../json/messi.json', '.name4', '.age4', '.position4', '.club4');
};

document.addEventListener('DOMContentLoaded', playerData);



//With Button

// const getBtn = document.querySelector("#btn-get")
// const fetchData = (url, nameClass, ageClass, positionClass, clubClass) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//
//     getBtn.addEventListener('click', () => {
//         const data = JSON.parse(request.response);
//         document.querySelector(nameClass).innerHTML = data.name;
//         document.querySelector(ageClass).innerHTML = data.age;
//         document.querySelector(positionClass).innerHTML = data.position;
//         document.querySelector(clubClass).innerHTML = data.club;
//     });
// };
//
// const playerData = () => {
//
//     fetchData('../json/ronaldo.json', '.name', '.age', '.position', '.club');
//
//     fetchData('../json/benzema.json', '.name2', '.age2', '.position2', '.club2');
//
//     fetchData('../json/neymar.json', '.name3', '.age3', '.position3', '.club3');
//
//     fetchData('../json/messi.json', '.name4', '.age4', '.position4', '.club4');
// };
//
// document.addEventListener('DOMContentLoaded', playerData);






// 2) Написать XMLHttpRequest запрос на json файл созданный вами (данные в json могут быть абсолютно
// любыми, главное напишите его сами) и вывести всё это просто в консоли в виде JS объекта.

const request2 = new XMLHttpRequest();
request2.open('GET', '../json/players.json');
request2.setRequestHeader('Content-type', 'application/json');
request2.send();

request2.addEventListener('load', () => {
    const data2 = JSON.parse(request2.response);
    console.log (data2)
});