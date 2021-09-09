// Небольшой счетчик, который отображает текущую дату, текущий месяц (в кириллице) и остаток товара
document.addEventListener('DOMContentLoaded', () => {
    const counterSelector = document.querySelector('#myCounter'),// селектор кол-ва штук
          currentDateSelector = document.querySelector('#currentDate'),// селектор текущего дня
          currentMonthSelector = document.querySelector('#currentMonth'),// селектор месяца
          currentDate = new Date().getDate(),// получаем дату
          currentMonth = new Date().getMonth(),// получаем индекс месяца
          currentDay = new Date().getDay();// получаем индекс дня недели

    currentDateSelector.textContent = currentDate;// в селектор даты, задаем текстовое значение элемента равное текущей дате

    // с помощью конструкции switch сравниваем каждый индекс месяца с текущим и устанавливаем название месяца в кириллице
    switch (currentMonth) {
        case 0:
            currentMonthSelector.textContent = ' января';
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
            counterSelector.textContent = 7;// задаем текстовое значение в элемент
        break;

        case 1:
            counterSelector.textContent = 5;
        break;

        case 2:
            counterSelector.textContent = 11;
        break;

        case 3:
            counterSelector.textContent = 9;
        break;

        case 4:
            counterSelector.textContent = 7;
        break;

        case 5:
            counterSelector.textContent = 11;
        break;

        case 6:
            counterSelector.textContent = 9;
        break;
    }    
});
