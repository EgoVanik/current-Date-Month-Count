// Небольшой счетчик, который автоматически отображает текущую дату, текущий месяц (в кириллице) и какое кол-во товара осталось
// разрабатывался для посадочной страницы на flexbe.
document.addEventListener('DOMContentLoaded', () => {
    const myCounterSelector = document.querySelector('#myCounter'),// селектор кол-ва штук
          currentDateSelector = document.querySelector('#currentDate'),// селектор текущего дня
          currentMonthSelector = document.querySelector('#currentMonth'),// селектор месяца
          currentDate = new Date().getDate(),// из newDate() получаем Date, на выходе дата
          currentMonth = new Date().getMonth(),// получаем index месяца
          currentDay = new Date().getDay();// получаем index дня недели

    currentDateSelector.textContent = currentDate;// в селектор даты, задаем текстовое значение элемента равное текущей дате

    // с помощью конструкции switch сравниваем каждый индекс месяца с текущим и устанавливаем название месяца в кириллице
    switch (currentMonth) {
        case 0:
            currentMonthSelector.textContent = ' января';// задаем текстовым значением название месяца в селектор месяца
            break;

        case 1:
            currentMonthSelector.textContent = ' февраля';
            break;

        case 2:
            currentMonthSelector.textContent = ' марта';
            break;

        case 3:
            currentMonthSelector.textContent = ' апреля';
            break;

        case 4:
            currentMonthSelector.textContent = ' мая';
            break;

        case 5:
            currentMonthSelector.textContent = ' июня';
            break;

        case 6:
            currentMonthSelector.textContent = ' июля';
            break;

        case 7:
            currentMonthSelector.textContent = ' августа';
            break;

        case 8:
            currentMonthSelector.textContent = ' сентября';
            break;

        case 9:
            currentMonthSelector.textContent = ' октября';
            break;

        case 10:
            currentMonthSelector.textContent = ' ноября';
            break;

        case 11:
            currentMonthSelector.textContent = ' декабря';
            break;

    }


    // с помошью switch сравниваем index дня с текущим днем и определяем какое кол-во штук осталось
    switch (currentDay) {
        case 0:
            myCounterSelector.textContent = 7;// задаем текстовое значение в элемент
        break;

        case 1:
            myCounterSelector.textContent = 5;
        break;

        case 2:
            myCounterSelector.textContent = 11;
        break;

        case 3:
            myCounterSelector.textContent = 9;
        break;

        case 4:
            myCounterSelector.textContent = 7;
        break;

        case 5:
            myCounterSelector.textContent = 11;
        break;

        case 6:
            myCounterSelector.textContent = 9;
        break;
    }    

});
