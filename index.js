function main() {
    const dateInput = document.querySelector('input[type="date"]');
    const button = document.querySelector('btn');
    const result = document.querySelector('p');
    const noResult = document.getElementById('noresult');

    const inputDate = dateInput.value;
    if (inputDate == '') {
        noResult.textContent = "Выберите дату!";
        return;
    }
    noResult.textContent = "";
    
    const difference = calculateDifference(new Date(inputDate), new Date());
    result.textContent = getMessage(difference);    
}

function calculateDifference(birthdayDate, currentDate) {
        // нормализуем время, чтобы учитывались только дни
        currentDate.setHours(0, 0, 0, 0);
        birthdayDate.setHours(0, 0, 0, 0);

        // для корректного сравнения приводим к одному году
        birthdayDate.setFullYear(currentDate.getFullYear());
    
        // если ДР уже прошло, то для вычисления разницы ставим следующий год
        if (currentDate.getTime() > birthdayDate.getTime()) {
            birthdayDate.setFullYear(currentDate.getFullYear() + 1);
        }

        return Math.abs(Math.floor((currentDate - birthdayDate) / (1000 * 60 * 60 * 24)));
}

function getMessage(difference) {
    if (difference == 0){
        return "С днём рождения!";
    }
    return `До вашего дня рождения ${difference} ${getDayWord(difference)}`;    
}

function getDayWord(daysAmount) {
    const str = daysAmount.toString();
    let dayWord = 'дней';
    if (str.slice(-1) == 2 || str.slice(-1) == 3 || str.slice(-1) == 4){
        dayWord = 'дня'
    } else if (str.slice(-1) == 1){
        dayWord = 'день'
    }
    return dayWord;
}